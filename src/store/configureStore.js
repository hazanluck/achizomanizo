import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import rentExpensesReducer from '../reducers/rentExpenses';
import investorExpensesReducer from '../reducers/investorExpenses';
import payableExpensesReducer from '../reducers/payableExpenses';
import withdrawalExpensesReducer from '../reducers/withdrawalExpenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      rentExpenses: rentExpensesReducer,
      investorExpenses : investorExpensesReducer,
      payableExpenses: payableExpensesReducer,
      withdrawalExpenses:withdrawalExpensesReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
