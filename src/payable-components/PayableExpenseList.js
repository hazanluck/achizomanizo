import React from 'react';
import { connect } from 'react-redux';
import PayableExpenseListItem from './PayableExpenseListItem';
import selectPayableExpenses from '../selectors/payableExpenses';

export const PayableExpenseList = (props) => (
  <div className="content-container">
  <div className="list-header">
    <div className="show-for-desktop">List of Payables</div>
    <div className="show-for-desktop">Payable User</div>
    <div className="show-for-desktop">Amount</div>
  </div>
  <div className="list-body">
  {
    props.payableExpenses.length === 0 ? (
      <div className="list-item list-item--message">
        <span>No Payable Expenses</span>
      </div>
    ) : (
      props.payableExpenses.map((payableExpense) => {
        return <PayableExpenseListItem key={payableExpense.id} {...payableExpense} />;
        })
    )
  }
</div>
</div>
);

const mapStateToProps = (state) => {
  return {
    payableExpenses: selectPayableExpenses(state.payableExpenses, state.filters)
  };
};

export default connect(mapStateToProps)(PayableExpenseList);