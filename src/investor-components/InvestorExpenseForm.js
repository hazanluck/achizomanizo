import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class InvestorExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      investorName: props.investorExpense ? props.investorExpense.investorName : '',  
      description: props.investorExpense ? props.investorExpense.description : '',
      investorItem: props.investorExpense ? (props.investorExpense.investorItem).toString(): '',
      investorPhone: props.investorExpense ? (props.investorExpense.investorPhone).toString(): '',
      note: props.investorExpense ? props.investorExpense.note : '',
      amount: props.investorExpense ? (props.investorExpense.amount / 100).toString() : '',
      createdAt: props.investorExpense ? moment(props.investorExpense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onInvestorNameChange = (e) => {
    const investorName = e.target.value;
    this.setState(() => ({ investorName }));
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onInvestorItemChange= (e) => {
    const investorItem = e.target.value;
    if (!investorItem || investorItem.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ investorItem }));
    }
  };
  onInvestorPhoneChange= (e) => {
    const investorPhone = e.target.value;
    if (!investorPhone || investorPhone.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ investorPhone }));
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

    if (!this.state.investorName||!this.state.description|| !this.state.amount||!this.state.investorItem) {
      this.setState(() => ({ error: 'Please provide description or amount or how many time did you invest.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        investorName: this.state.investorName,
        description: this.state.description,
        investorItem : parseInt(this.state.investorItem, 10),
        investorPhone : parseInt(this.state.investorPhone),
        amount: parseFloat(this.state.amount, 10),
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
            placeholder="Investor username"
            className="text-input"
            autoFocus
            value={this.state.investorName}
            onChange={this.onInvestorNameChange}
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
            value={this.state.investorPhone}
            onChange={this.onInvestorPhoneChange}
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
            placeholder="How many did he/she invest?"
            className="text-input"
            value={this.state.investorItem}
            onChange={this.onInvestorItemChange}
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
            placeholder="Add a note for your investor expense (optional)"
            className="text-input"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <div>
          <button className="button">Save Investor Expense</button>
        </div>
      </form>
    )
  }
}
