import React from 'react';
import { connect } from 'react-redux';
import WithdrawalExpenseListItem from './WithdrawalExpenseListItem';
import selectWithdrawalExpenses from '../selectors/withdrawalExpenses';

export const WithdrawalExpenseList = (props) => (
  <div className="content-container">
  <div className="list-header">
    <div className="show-for-desktop">List of Withdrawal</div>
    <div className="show-for-desktop">Withdrawal User</div>
    <div className="show-for-desktop">Amount</div>
  </div>
  <div className="list-body">
  {
    props.withdrawalExpenses.length === 0 ? (
      <div className="list-item list-item--message">
        <span>No Withdrawal Expenses</span>
      </div>
    ) : (
      props.withdrawalExpenses.map((withdrawalExpense) => {
        return <WithdrawalExpenseListItem key={withdrawalExpense.id} {...withdrawalExpense} />;
      })
    )
  }
</div>
</div>
);

const mapStateToProps = (state) => {
  return {
    withdrawalExpenses: selectWithdrawalExpenses(state.withdrawalExpenses, state.filters)
  };
};

export default connect(mapStateToProps)(WithdrawalExpenseList);