import React from 'react';
import { connect } from 'react-redux';
import PayableExpenseForm from './PayableExpenseForm';
import { startEditPayableExpense, startRemovePayableExpense  } from '../actions/payableExpenses';

export class EditPayableExpensePage extends React.Component {
  onSubmit = (payableExpense) => {
    this.props.startEditPayableExpense(this.props.payableExpense.id, payableExpense);
    this.props.history.push('/payableDashboard');
  };
  onRemove = () => {
    this.props.startRemovePayableExpense({ id: this.props.payableExpense.id });
    this.props.history.push('/payableDashboard');
  };
  render() {
    return (
      <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Payable Expense </h1>
        </div>
      </div> 
      <div className="content-container">
      <PayableExpenseForm
          payableExpense={this.props.payableExpense}
          onSubmit={this.onSubmit}
        />
        <button className="button button--secondary" onClick={this.onRemove}>Remove Payable Expense</button>
      </div>
    </div>
    );
  }  
};

const mapStateToProps = (state, props) => ({
  payableExpense: state.payableExpenses.find((payableExpense) => payableExpense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditPayableExpense: (id, payableExpense) => dispatch(startEditPayableExpense(id, payableExpense)),
  startRemovePayableExpense: (data) => dispatch(startRemovePayableExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPayableExpensePage);
