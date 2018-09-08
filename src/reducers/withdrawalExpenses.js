// Expenses Reducer

const withdrawalExpensesReducerDefaultState = [];

export default (state = withdrawalExpensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_WITHDRAWAL_EXPENSE':
      return [
        ...state,
        action.withdrawalExpense
      ];
    case 'REMOVE_WITHDRAWAL_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_WITHDRAWAL_EXPENSE':
      return state.map((withdrawalExpense) => {
        if (withdrawalExpense.id === action.id) {
          return {
            ...withdrawalExpense,
            ...action.updates
          };
        } else {
          return withdrawalExpense;
        };
      });
    case 'SET_WITHDRAWAL_EXPENSES':
      return action.withdrawalExpenses;
    default:
      return state;
  }
};
