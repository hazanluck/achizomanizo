import React from 'react';
import RentExpenseList from './RentExpenseList';
import RentExpenseListFilters from './RentExpenseListFilters';
import RentExpensesSummary from './RentExpensesSummary';

const RentExpenseDashboardPage = () => (
  <div>
    <RentExpensesSummary />
    <RentExpenseListFilters />
    <RentExpenseList />
  </div>
  
);

export default RentExpenseDashboardPage;
