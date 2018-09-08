// Expenses Reducer

const rentExpensesReducerDefaultState = [];

export default (state = rentExpensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_RENT_EXPENSE':
      return [
        ...state,
        action.rentExpense
      ];
    case 'REMOVE_RENT_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_RENT_EXPENSE':
      return state.map((rentExpense) => {
        if (rentExpense.id === action.id) {
          return {
            ...rentExpense,
            ...action.updates
          };
        } else {
          return rentExpense;
        };
      });
    case 'SET_RENT_EXPENSES':
      return action.rentExpenses;
    default:
      return state;
  }
};
