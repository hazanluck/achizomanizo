import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class RentExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rentName: props.rentExpense ? props.rentExpense.rentName : '',  
      description: props.rentExpense ? props.rentExpense.description : '',
      rentItem: props.rentExpense ? (props.rentExpense.rentItem).toString(): '',
      rentPhone: props.rentExpense ? (props.rentExpense.rentPhone).toString(): '',
      note: props.rentExpense ? props.rentExpense.note : '',
      amount: props.rentExpense ? (props.rentExpense.amount / 100).toString() : '',
      createdAt: props.rentExpense ? moment(props.rentExpense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onRentNameChange = (e) => {
    const rentName = e.target.value;
    this.setState(() => ({ rentName }));
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onrentItemChange= (e) => {
    const rentItem = e.target.value;
    if (!rentItem || rentItem.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ rentItem }));
    }
  };
  onrentPhoneChange= (e) => {
    const rentPhone = e.target.value;
    if (!rentPhone || rentPhone.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ rentPhone }));
    }
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.rentName||!this.state.description|| !this.state.amount||!this.state.rentItem) {
      this.setState(() => ({ error: 'Please provide description or amount  or rentItems.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        rentName: this.state.rentName,
        description: this.state.description,
        rentItem : parseInt(this.state.rentItem, 10),
        rentPhone : parseInt(this.state.rentPhone),
        amount: parseFloat(this.state.amount, 10) ,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
          <input
            type="text"
            placeholder="Rent Username"
            className="text-input"
            autoFocus
            value={this.state.rentName}
            onChange={this.onRentNameChange}
          />
          <input
            type="text"
            placeholder="Description"
            className="text-input"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Phonenumber"
            className="text-input"
            value={this.state.rentPhone}
            onChange={this.onrentPhoneChange}
          />
          <input
            type="text"
            placeholder="Amount"
            className="text-input"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <input
            type="text"
            placeholder="How many rentItem ?"
            className="text-input"
            value={this.state.rentItem}
            onChange={this.onrentItemChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your rentExpense (optional)"
            className="text-input"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <div>
          <button className="button">Save Rent Expense</button>
        </div>
      </form>
    )
  }
}
