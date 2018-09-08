import React from 'react';
import PayableExpenseList from './PayableExpenseList';
import PayableExpenseListFilters from './PayableExpenseListFilters';
import PayableExpensesSummary from './PayableExpensesSummary';

const PayableExpenseDashboardPage = () => (
  <div>
    <PayableExpensesSummary />
    <PayableExpenseListFilters />
    <PayableExpenseList />
  </div>
  
);

export default PayableExpenseDashboardPage;
