import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      itemTotal: props.expense ? (props.expense.itemTotal).toString(): '',
      itemSells: props.expense ? (props.expense.itemSells).toString(): '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onItemTotalChange= (e) => {
    const itemTotal = e.target.value;
    if (!itemTotal || itemTotal.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ itemTotal }));
    }
  };
  onItemSellsChange= (e) => {
    const itemSells = e.target.value;
    if (!itemSells || itemSells.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ itemSells }));
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

    if (!this.state.description|| !this.state.amount ||!this.state.itemTotal||!this.state.itemSells) {
      this.setState(() => ({ error: 'Please provide description or amount or itemTotal or itemSells.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        itemTotal : parseInt(this.state.itemTotal, 10),
        itemSells : parseInt(this.state.itemSells, 10),
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
            placeholder="Description"
            autoFocus
            className="text-input"
            value={this.state.description}
            onChange={this.onDescriptionChange}
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
            placeholder="Set item Total"
            className="text-input"
            value={this.state.itemTotal}
            onChange={this.onItemTotalChange}
          />
          <input
            type="text"
            placeholder="Item Sells"
            className="text-input"
            value={this.state.itemSells}
            onChange={this.onItemSellsChange}
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
            placeholder="Add a note for your expense (optional)"
            className="text-input"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <div>
          <button className="button">Save Sell Expense</button>
        </div>
      </form>
    )
  }
}
