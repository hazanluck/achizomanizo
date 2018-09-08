import React from 'react';
import { connect } from 'react-redux';
import InvestorExpenseForm from './InvestorExpenseForm';
import { startEditInvestorExpense, startRemoveInvestorExpense  } from '../actions/investorExpenses';

export class EditInvestorExpensePage extends React.Component {
  onSubmit = (investorExpense) => {
    this.props.startEditInvestorExpense(this.props.investorExpense.id, investorExpense);
    this.props.history.push('/investorDashboard');
  };
  onRemove = () => {
    this.props.startRemoveInvestorExpense({ id: this.props.investorExpense.id });
    this.props.history.push('/investorDashboard');
  };
  render() {
    return (
      <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Investor Expense </h1>
        </div>
      </div> 
      <div className="content-container">
      <InvestorExpenseForm
          investorExpense={this.props.investorExpense}
          onSubmit={this.onSubmit}
        />
        <button className="button button--secondary" onClick={this.onRemove}>Remove Investor Expense</button>
      </div>
    </div>
    );
  }  
};

const mapStateToProps = (state, props) => ({
  investorExpense: state.investorExpenses.find((investorExpense) => investorExpense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditInvestorExpense: (id, investorExpense) => dispatch(startEditInvestorExpense(id, investorExpense)),
  startRemoveInvestorExpense: (data) => dispatch(startRemoveInvestorExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditInvestorExpensePage);
