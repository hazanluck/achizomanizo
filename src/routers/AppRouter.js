import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import RentExpenseDashboardPage from '../rent-components/RentExpenseDashboardPage';
import InvestorExpenseDashboardPage from '../investor-components/InvestorExpenseDashboardPage';
import PayableExpenseDashboardPage from '../payable-components/PayableExpenseDashboardPage';
import WithdrawalExpenseDashboardPage from '../withdrawal-components/WithdrawalExpenseDashboardPage';

import AddExpensePage from '../components/AddExpensePage';
import AddRentExpensePage from '../rent-components/AddRentExpensePage';
import AddInvestorExpensePage from '../investor-components/AddInvestorExpensePage';
import AddPayableExpensePage from '../payable-components/AddPayableExpensePage';
import AddWithdrawalExpensePage from '../withdrawal-components/AddWithdrawalExpensePage';

import EditExpensePage from '../components/EditExpensePage';
import EditRentExpensePage from '../rent-components/EditRentExpensePage';
import EditInvestorExpensePage from '../investor-components/EditInvestorExpensePage';
import EditPayableExpensePage from '../payable-components/EditPayableExpensePage';
import EditWithdrawalExpensePage from '../withdrawal-components/EditWithdrawalExpensePage';

import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        </Switch>
        <Switch>
          <PrivateRoute path="/rentDashboard" component={RentExpenseDashboardPage} exact={true}  />
          <PrivateRoute path="/createRent" component={AddRentExpensePage} />
          <PrivateRoute path="/editRent/:id" component={EditRentExpensePage} />
          </Switch>
          <Switch>
            <PrivateRoute path="/investorDashboard" component={InvestorExpenseDashboardPage} exact={true}  />
            <PrivateRoute path="/createInvestor" component={AddInvestorExpensePage} />
            <PrivateRoute path="/editInvestor/:id" component={EditInvestorExpensePage} />
           </Switch>
           <Switch>
             <PrivateRoute path="/payableDashboard" component={PayableExpenseDashboardPage} exact={true}  />
             <PrivateRoute path="/createPayable" component={AddPayableExpensePage} />
             <PrivateRoute path="/editPayable/:id" component={EditPayableExpensePage} />
            </Switch>
            <Switch>
              <PrivateRoute path="/withdrawalDashboard" component={WithdrawalExpenseDashboardPage} exact={true}  />
              <PrivateRoute path="/createWithdrawal" component={AddWithdrawalExpensePage} />
              <PrivateRoute path="/editWithdrawal/:id" component={EditWithdrawalExpensePage} />
           </Switch>
    </div>
  </Router>
);

export default AppRouter;
