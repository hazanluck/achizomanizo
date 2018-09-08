// Expenses Payable Reducer

const investorExpensesReducerDefaultState = [];

export default (state = investorExpensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_INVESTOR_EXPENSE':
      return [
        ...state,
        action.investorExpense
      ];
    case 'REMOVE_INVESTOR_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_INVESTOR_EXPENSE':
      return state.map((investorExpense) => {
        if (investorExpense.id === action.id) {
          return {
            ...investorExpense,
            ...action.updates
          };
        } else {
          return investorExpense;
        };
      });
    case 'SET_INVESTOR_EXPENSES':
      return action.investorExpenses;
    default:
      return state;
  }
};
