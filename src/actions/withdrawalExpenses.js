import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_WITHDRAWAL_EXPENSE
export const addWithdrawalExpense = (withdrawalExpense) => ({
  type: 'ADD_WITHDRAWAL_EXPENSE',
  withdrawalExpense
});

export const startAddWithdrawalExpense = (withdrawalExpenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      withdrawalName = '',  
      description = '',
      withdrawalItem = '',
      withdrawalPhone = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = withdrawalExpenseData;
    const withdrawalExpense = {withdrawalName , description, withdrawalItem, withdrawalPhone , note , amount, createdAt };


    return database.ref(`users/${uid}/withdrawalExpenses`).push(withdrawalExpense).then((ref) => {
      dispatch(addWithdrawalExpense({
        id: ref.key,
        ...withdrawalExpense
      }));
    });
  };
};

// REMOVE_WITHDRAWAL_EXPENSE
export const removeWithdrawalExpense = ({ id } = {}) => ({
  type: 'REMOVE_WITHDRAWAL_EXPENSE',
  id
});

export const startRemoveWithdrawalExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/withdrawalExpenses/${id}`).remove().then(() => {
      dispatch(removeWithdrawalExpense({ id }));
    });
  };
};

// EDIT_WITHDRAWAL_EXPENSE
export const editWithdrawalExpense = (id, updates) => ({
  type: 'EDIT_WITHDRAWAL_EXPENSE',
  id,
  updates
});

export const startEditWithdrawalExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/withdrawalExpenses/${id}`).update(updates).then(() => {
      dispatch(editWithdrawalExpense(id, updates));
    });
  };
};

// SET_WITHDRAWAL_EXPENSES
export const setWithdrawalExpenses = (withdrawalExpenses) => ({
  type: 'SET_WITHDRAWAL_EXPENSES',
  withdrawalExpenses
});

export const startSetWithdrawalExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/withdrawalExpenses`).once('value').then((snapshot) => {
      const withdrawalExpenses = [];

      snapshot.forEach((childSnapshot) => {
        withdrawalExpenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setWithdrawalExpenses(withdrawalExpenses));
    });
  };
};
