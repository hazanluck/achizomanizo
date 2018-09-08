import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectWithdrawalExpenses from '../selectors/withdrawalExpenses';
import selectWithdrawalExpensesTotal from '../selectors/withdrawalExpenses-total';

export const WithdrawalExpensesSummary = ({ withdrawalExpenseCount, withdrawalExpensesTotal }) => {
  const withdrawalExpenseWord = withdrawalExpenseCount === 1 ? 'withdrawalExpense' : 'withdrawalExpenses' ;
  const formattedwithdrawalExpensesTotal = numeral(withdrawalExpensesTotal / 100).format('$0,0.00');
  
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{withdrawalExpenseCount}</span> {withdrawalExpenseWord} totalling <span>{formattedwithdrawalExpensesTotal}</span></h1>
        <div className="page-header__actions">

          <Link className="button" to="/createWithdrawal">Add Withdrawal Expenses</Link>
        </div>
      </div>
    </div>
  );
  
};

const mapStateToProps = (state) => {
  const visiblewithdrawalExpenses = selectWithdrawalExpenses(state.withdrawalExpenses, state.filters);

  return {
    withdrawalExpenseCount: visiblewithdrawalExpenses.length,
    withdrawalExpensesTotal: selectWithdrawalExpensesTotal(visiblewithdrawalExpenses)
  };
};

export default connect(mapStateToProps)(WithdrawalExpensesSummary);