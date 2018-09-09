import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_PAYABLE_EXPENSE
export const addPayableExpense = (payableExpense) => ({
  type: 'ADD_PAYABLE_EXPENSE',
  payableExpense
});

export const startAddPayableExpense = (payableExpenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      payableName = '',  
      description = '',
      payableItem = '',
      payablePhone = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = payableExpenseData;
    const payableExpense = {payableName , description, payableItem, payablePhone , note , amount, createdAt };


    return database.ref(`users/${uid}/payableExpenses`).push(payableExpense).then((ref) => {
      dispatch(addPayableExpense({
        id: ref.key,
        ...payableExpense
      }));
    });
  };
};

// REMOVE_PAYABLE_EXPENSE
export const removePayableExpense = ({ id } = {}) => ({
  type: 'REMOVE_PAYABLE_EXPENSE',
  id
});

export const startRemovePayableExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/payableExpenses/${id}`).remove().then(() => {
      dispatch(removePayableExpense({ id }));
    });
  };
};

// EDIT_PAYABLE_EXPENSE
export const editPayableExpense = (id, updates) => ({
  type: 'EDIT_PAYABLE_EXPENSE',
  id,
  updates
});

export const startEditPayableExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/payableExpenses/${id}`).update(updates).then(() => {
      dispatch(editPayableExpense(id, updates));
    });
  };
};

// SET_PAYABLE_EXPENSES
export const setPayableExpenses = (payableExpenses) => ({
  type: 'SET_PAYABLE_EXPENSES',
  payableExpenses
});

export const startSetPayableExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/payableExpenses`).once('value').then((snapshot) => {
      const payableExpenses = [];

      snapshot.forEach((childSnapshot) => {
        payableExpenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setPayableExpenses(payableExpenses));
    });
  };
};
