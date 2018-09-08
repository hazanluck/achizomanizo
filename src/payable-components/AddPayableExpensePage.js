import React from 'react';
import { connect } from 'react-redux';
import PayableExpenseForm from './PayableExpenseForm';
import { startAddPayableExpense } from '../actions/payableExpenses';     

export class AddPayableExpensePage extends React.Component {
  onSubmit = (payableExpense) => {
    this.props.startAddPayableExpense(payableExpense);
    this.props.history.push('/payableDashboard');
  };
  render() {
    return (
    <div>
         <div className="page-header">
          <div className="content-container">
           <h1 className="page-header__title">Add Payable Expenses</h1>
          </div>
        </div>
      <div className="content-container">
        <PayableExpenseForm
        onSubmit={this.onSubmit}
        />
      </div>
    </div>
      
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddPayableExpense: (payableExpense) => dispatch(startAddPayableExpense(payableExpense))
});

export default connect(undefined, mapDispatchToProps)(AddPayableExpensePage);
