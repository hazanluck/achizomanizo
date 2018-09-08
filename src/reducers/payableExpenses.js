// Expenses Payable Reducer

const payableExpensesReducerDefaultState = [];

export default (state = payableExpensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PAYABLE_EXPENSE':
      return [
        ...state,
        action.payableExpense
      ];
    case 'REMOVE_PAYABLE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_PAYABLE_EXPENSE':
      return state.map((payableExpense) => {
        if (payableExpense.id === action.id) {
          return {
            ...payableExpense,
            ...action.updates
          };
        } else {
          return payableExpense;
        };
      });
    case 'SET_PAYABLE_EXPENSES':
      return action.payableExpenses;
    default:
      return state;
  }
};
