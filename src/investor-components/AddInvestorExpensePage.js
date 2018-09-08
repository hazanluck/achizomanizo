import React from 'react';
import { connect } from 'react-redux';
import InvestorExpenseForm from './InvestorExpenseForm';
import { startAddInvestorExpense } from '../actions/investorExpenses';     

export class AddInvestorExpensePage extends React.Component {
  onSubmit = (investorExpense) => {
    this.props.startAddInvestorExpense(investorExpense);
    this.props.history.push('/investorDashboard');
  };
  render() {
    return (
    <div>
         <div className="page-header">
          <div className="content-container">
           <h1 className="page-header__title">Add Investor Expenses</h1>
          </div>
        </div>
      <div className="content-container">
        <InvestorExpenseForm
        onSubmit={this.onSubmit}
        />
      </div>
    </div>
      
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddInvestorExpense: (investorExpense) => dispatch(startAddInvestorExpense(investorExpense))
});

export default connect(undefined, mapDispatchToProps)(AddInvestorExpensePage);
