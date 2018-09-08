import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_INVESTOR_EXPENSE
export const addInvestorExpense = (investorExpense) => ({
  type: 'ADD_INVESTOR_EXPENSE',
  investorExpense
});

export const startAddInvestorExpense = (investorExpenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      investorName = '',  
      description = '',
      investorItem = '',
      investorPhone = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = investorExpenseData;
    const investorExpense = {investorName , description, investorItem, investorPhone , note , amount, createdAt };


    return database.ref(`users/${uid}/investorExpenses`).push(investorExpense).then((ref) => {
      dispatch(addInvestorExpense({
        id: ref.key,
        ...investorExpense
      }));
    });
  };
};

// REMOVE_INVESTOR_EXPENSE
export const removeInvestorExpense = ({ id } = {}) => ({
  type: 'REMOVE_INVESTOR_EXPENSE',
  id
});

export const startRemoveInvestorExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/investorExpenses/${id}`).remove().then(() => {
      dispatch(removeInvestorExpense({ id }));
    });
  };
};

// EDIT_INVESTOR_EXPENSE
export const editInvestorExpense = (id, updates) => ({
  type: 'EDIT_INVESTOR_EXPENSE',
  id,
  updates
});

export const startEditInvestorExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/investorExpenses/${id}`).update(updates).then(() => {
      dispatch(editInvestorExpense(id, updates));
    });
  };
};

// SET_INVESTOR_EXPENSES
export const setInvestorExpenses = (investorExpenses) => ({
  type: 'SET_INVESTOR_EXPENSES',
  investorExpenses
});

export const startSetInvestorExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/investorExpenses`).once('value').then((snapshot) => {
      const investorExpenses = [];

      snapshot.forEach((childSnapshot) => {
        investorExpenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setInvestorExpenses(investorExpenses));
    });
  };
};
