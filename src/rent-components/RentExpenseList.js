import React from 'react';
import { connect } from 'react-redux';
import RentExpenseListItem from './RentExpenseListItem';
import selectRentExpenses from '../selectors/rentExpenses';

export const RentExpenseList = (props) => (
  <div className="content-container">
  <div className="list-header">
    <div className="show-for-desktop">List of Rents</div>
    <div className="show-for-desktop">Rent User</div>
    <div className="show-for-desktop">Phone Number</div>
    <div className="show-for-desktop">Amount</div>
    <div className="show-for-desktop">Item Sells</div>
  </div>
  <div className="list-body">
  {
    props.rentExpenses.length === 0 ? (
      <div className="list-item list-item--message">
        <span>No Rent Expenses</span>
      </div>
    ) : (
      props.rentExpenses.map((rentExpense) => {
        return <RentExpenseListItem key={rentExpense.id} {...rentExpense} />;
        })
    )
  }
</div>
</div>
);

const mapStateToProps = (state) => {
  return {
    rentExpenses: selectRentExpenses(state.rentExpenses, state.filters)
  };
};

export default connect(mapStateToProps)(RentExpenseList);