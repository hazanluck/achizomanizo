import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectRentExpenses from '../selectors/rentExpenses';
import selectRentExpensesTotal from '../selectors/rentExpenses-total';

export const RentExpensesSummary = ({ rentExpenseCount, rentExpensesTotal }) => {
  const rentExpenseWord = rentExpenseCount === 1 ? 'rentExpense' : 'rentExpenses' ;
  const formattedrentExpensesTotal = numeral(rentExpensesTotal / 100).format('$0,0.00');
  
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{rentExpenseCount}</span> {rentExpenseWord} totalling <span>{formattedrentExpensesTotal}</span></h1>
        <div className="page-header__actions">
          <Link className="button" to="/createRent">Add Rent Expenses</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visiblerentExpenses = selectRentExpenses(state.rentExpenses, state.filters);

  return {
    rentExpenseCount: visiblerentExpenses.length,
    rentExpensesTotal: selectRentExpensesTotal(visiblerentExpenses)
  };
};

export default connect(mapStateToProps)(RentExpensesSummary);