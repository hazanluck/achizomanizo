import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectPayableExpenses from '../selectors/payableExpenses';
import selectPayableExpensesTotal from '../selectors/payableExpenses-total';

export const PayableExpensesSummary = ({ payableExpenseCount, payableExpensesTotal }) => {
  const payableExpenseWord = payableExpenseCount === 1 ? 'payableExpense' : 'payableExpenses' ;
  const formattedpayableExpensesTotal = numeral(payableExpensesTotal / 100).format('$0,0.00');
  
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{payableExpenseCount}</span> {payableExpenseWord} totalling <span>{formattedpayableExpensesTotal}</span></h1>
        <div className="page-header__actions">
          <Link className="button" to="/createPayable">Add Payable Expenses</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visiblepayableExpenses = selectPayableExpenses(state.payableExpenses, state.filters);

  return {
    payableExpenseCount: visiblepayableExpenses.length,
    payableExpensesTotal: selectPayableExpensesTotal(visiblepayableExpenses)
  };
};

export default connect(mapStateToProps)(PayableExpensesSummary);