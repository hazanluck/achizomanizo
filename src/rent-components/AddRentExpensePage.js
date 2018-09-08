import React from 'react';
import { connect } from 'react-redux';
import RentExpenseForm from './RentExpenseForm';
import { startAddRentExpense } from '../actions/rentExpenses';     

export class AddRentExpensePage extends React.Component {
  onSubmit = (rentExpense) => {
    this.props.startAddRentExpense(rentExpense);
    this.props.history.push('/rentDashboard');
  };
  render() {
    return (
    <div>
         <div className="page-header">
          <div className="content-container">
           <h1 className="page-header__title">Add Rent Expenses</h1>
          </div>
        </div>
      <div className="content-container">
        <RentExpenseForm
        onSubmit={this.onSubmit}
        />
      </div>
    </div>
      
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddRentExpense: (rentExpense) => dispatch(startAddRentExpense(rentExpense))
});

export default connect(undefined, mapDispatchToProps)(AddRentExpensePage);
