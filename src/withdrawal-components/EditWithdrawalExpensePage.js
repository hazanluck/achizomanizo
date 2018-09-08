import React from 'react';
import { connect } from 'react-redux';
import WithdrawalExpenseForm from './WithdrawalExpenseForm';
import { startEditWithdrawalExpense, startRemoveWithdrawalExpense  } from '../actions/withdrawalExpenses';

export class EditWithdrawalExpensePage extends React.Component {
  onSubmit = (withdrawalExpense) => {
    this.props.startEditWithdrawalExpense(this.props.withdrawalExpense.id, withdrawalExpense);
    this.props.history.push('/withdrawalDashboard');
  };
  onRemove = () => {
    this.props.startRemoveWithdrawalExpense({ id: this.props.withdrawalExpense.id });
    this.props.history.push('/withdrawalDashboard');
  };
  render() {
    return (
      <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Withdrawal Expense </h1>
        </div>
      </div>  
      <div className="content-container">
      <WithdrawalExpenseForm
          withdrawalExpense={this.props.withdrawalExpense}
          onSubmit={this.onSubmit}
        />
        <button className="button button--secondary" onClick={this.onRemove}>Remove Withdrawal Expense</button>
      </div>
    </div>
    ); 
  } 
};

const mapStateToProps = (state, props) => ({
    withdrawalExpense: state.withdrawalExpenses.find((withdrawalExpense) => withdrawalExpense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditWithdrawalExpense: (id, withdrawalExpense) => dispatch(startEditWithdrawalExpense(id, withdrawalExpense)),
  startRemoveWithdrawalExpense: (data) => dispatch(startRemoveWithdrawalExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWithdrawalExpensePage);
