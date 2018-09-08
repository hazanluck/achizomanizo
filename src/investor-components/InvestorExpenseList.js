import React from 'react';
import { connect } from 'react-redux';
import InvestorExpenseListItem from './InvestorExpenseListItem';
import selectInvestorExpenses from '../selectors/investorExpenses';

export const InvestorExpenseList = (props) => (
  <div className="content-container">
  <div className="list-header">
    <div className="show-for-mobile">Investor Expense</div>
    <div className="show-for-desktop">List of Investors</div>
    <div className="show-for-desktop">Investor User</div>
    <div className="show-for-desktop">Phone Number</div>
    <div className="show-for-desktop">Amount</div>
    <div className="show-for-desktop">Investor Item</div>
  </div>
  <div className="list-body">
  {
    props.investorExpenses.length === 0 ? (
      <div className="list-item list-item--message">
        <span>No Investor Expenses</span>
      </div>
    ) : (
      props.investorExpenses.map((investorExpense) => {
        return <InvestorExpenseListItem key={investorExpense.id} {...investorExpense} />;
        })
    )
  }
</div>
</div>
);

const mapStateToProps = (state) => {
  return {
    investorExpenses: selectInvestorExpenses(state.investorExpenses, state.filters)
  };
};

export default connect(mapStateToProps)(InvestorExpenseList);