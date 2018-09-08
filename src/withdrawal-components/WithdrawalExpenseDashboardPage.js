import React from 'react';
import WithdrawalExpenseList from './WithdrawalExpenseList';
import WithdrawalExpenseListFilters from './WithdrawalExpenseListFilters';
import WithdrawalExpensesSummary from './WithdrawalExpensesSummary';

const WithdrawalExpenseDashboardPage = () => (
  <div>
    <WithdrawalExpensesSummary />
    <WithdrawalExpenseListFilters />
    <WithdrawalExpenseList />
  </div>
  
);

export default WithdrawalExpenseDashboardPage;
