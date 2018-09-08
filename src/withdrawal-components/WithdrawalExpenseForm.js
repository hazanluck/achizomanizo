import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class WithdrawalExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      withdrawalName: props.withdrawalExpense ? props.withdrawalExpense.withdrawalName : '',  
      description: props.withdrawalExpense ? props.withdrawalExpense.description : '',
      withdrawalItem: props.withdrawalExpense ? (props.withdrawalExpense.withdrawalItem).toString(): '',
      withdrawalPhone: props.withdrawalExpense ? (props.withdrawalExpense.withdrawalPhone).toString(): '',
      note: props.withdrawalExpense ? props.withdrawalExpense.note : '',
      amount: props.withdrawalExpense ? (props.withdrawalExpense.amount / 100).toString() : '',
      createdAt: props.withdrawalExpense ? moment(props.withdrawalExpense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onWithdrawalNameChange = (e) => {
    const withdrawalName = e.target.value;
    this.setState(() => ({ withdrawalName }));
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onWithdrawalItemChange= (e) => {
    const withdrawalItem = e.target.value;
    if (!withdrawalItem || withdrawalItem.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ withdrawalItem }));
    }
  };
  onWithdrawalPhoneChange= (e) => {
    const withdrawalPhone = e.target.value;
    if (!withdrawalPhone || withdrawalPhone.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ withdrawalPhone }));
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

    if (!this.state.withdrawalName||!this.state.description|| !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description or amount  or how many time did you withdraw.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        withdrawalName: this.state.withdrawalName,
        description: this.state.description,
        withdrawalItem : parseInt(this.state.withdrawalItem, 10),
        withdrawalPhone : parseInt(this.state.withdrawalPhone),
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
            placeholder="Withdrawal username"
            className="text-input"
            autoFocus
            value={this.state.withdrawalName}
            onChange={this.onWithdrawalNameChange}
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
            placeholder="PhoneNumber (optional)"
            className="text-input"
            value={this.state.withdrawalPhone}
            onChange={this.onWithdrawalPhoneChange}
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
            placeholder="withdrawalItem (optional)"
            className="text-input"
            value={this.state.withdrawalItem}
            onChange={this.onWithdrawalItemChange}
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
            placeholder="Add a note for your withdrawal Expense (optional)"
            className="text-input"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <div>
          <button className="button">Save  Withdrawal Expense</button>
        </div>
      </form>
    )
  }
} 
