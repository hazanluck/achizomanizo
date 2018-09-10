import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import currencyFormatter from 'currency-formatter';
import selectInvestorExpenses from '../selectors/investorExpenses';
import selectInvestorExpensesTotal from '../selectors/investorExpenses-total';

export const InvestorExpensesSummary = ({ investorExpenseCount, investorExpensesTotal }) => {
  const investorExpenseWord = investorExpenseCount === 1 ? 'investorExpense' : 'investorExpenses' ;
  const formattedinvestorExpensesTotal = currencyFormatter.format((investorExpensesTotal), { locale: 'sw-TZ' });
  
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{investorExpenseCount}</span> {investorExpenseWord} totalling <span>{formattedinvestorExpensesTotal}</span></h1>
        <div className="page-header__actions">
          <Link className="button" to="/createInvestor">Add Investor Expenses</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleinvestorExpenses = selectInvestorExpenses(state.investorExpenses, state.filters);

  return {
    investorExpenseCount: visibleinvestorExpenses.length,
    investorExpensesTotal: selectInvestorExpensesTotal(visibleinvestorExpenses)
  };
};

export default connect(mapStateToProps)(InvestorExpensesSummary);