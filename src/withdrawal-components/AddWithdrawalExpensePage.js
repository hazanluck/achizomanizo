import React from 'react';
import { connect } from 'react-redux';
import WithdrawalExpenseForm from './WithdrawalExpenseForm';
import { startAddWithdrawalExpense } from '../actions/withdrawalExpenses';     

export class AddWithdrawalExpensePage extends React.Component {
  onSubmit = (withdrawalExpense) => {
    this.props.startAddWithdrawalExpense(withdrawalExpense);
    this.props.history.push('/withdrawalDashboard');
  };
  render() {
    return (
      <div>
         <div className="page-header">
          <div className="content-container">
           <h1 className="page-header__title">Add Withdrawal Expenses</h1>
          </div>
        </div>
      <div className="content-container">
        <WithdrawalExpenseForm
        onSubmit={this.onSubmit}
        />
      </div>
    </div>
      
    );
  } 
}

const mapDispatchToProps = (dispatch) => ({
  startAddWithdrawalExpense: (withdrawalExpense) => dispatch(startAddWithdrawalExpense(withdrawalExpense))
});

export default connect(undefined, mapDispatchToProps)(AddWithdrawalExpensePage);
