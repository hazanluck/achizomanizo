import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class PayableExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      payableName: props.payableExpense ? props.payableExpense.payableName : '',  
      description: props.payableExpense ? props.payableExpense.description : '',
      payableItem: props.payableExpense ? (props.payableExpense.payableItem).toString(): '',
      payablePhone: props.payableExpense ? (props.payableExpense.payablePhone).toString(): '',
      note: props.payableExpense ? props.payableExpense.note : '',
      amount: props.payableExpense ? (props.payableExpense.amount / 100).toString() : '',
      createdAt: props.payableExpense ? moment(props.payableExpense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onPayableNameChange = (e) => {
    const payableName = e.target.value;
    this.setState(() => ({ payableName }));
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onPayableItemChange= (e) => {
    const payableItem = e.target.value;
    if (!payableItem || payableItem.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ payableItem }));
    }
  };
  onPayablePhoneChange= (e) => {
    const payablePhone = e.target.value;
    if (!payablePhone || payablePhone.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ payablePhone }));
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

    if (!this.state.payableName||!this.state.description|| !this.state.amount||!this.state.payableItem) {
      this.setState(() => ({ error: 'Please provide description or amount  or how many times have you been paid (item).' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        payableName: this.state.payableName,
        description: this.state.description,
        payableItem : parseInt(this.state.payableItem, 10),
        payablePhone : parseInt(this.state.payablePhone),
        amount: parseFloat(this.state.amount, 10) * 100,
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
            placeholder="Payable username"
            className="text-input"
            autoFocus
            value={this.state.payableName}
            onChange={this.onPayableNameChange}
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
            placeholder="Phonenumber (optional)"
            className="text-input"
            value={this.state.payablePhone}
            onChange={this.onPayablePhoneChange}
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
            placeholder="How many have you been paid?"
            className="text-input"
            value={this.state.payableItem}
            onChange={this.onPayableItemChange}
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
            placeholder="Add a note for your payable expense (optional)"
            className="text-input"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <div>
          <button className="button">Save Payable Expense</button>
        </div>
      </form>
    )
  }
}
