import React from 'react';
import InvestorExpenseList from './InvestorExpenseList';
import InvestorExpenseListFilters from './InvestorExpenseListFilters';
import InvestorExpensesSummary from './InvestorExpensesSummary';

const InvestorExpenseDashboardPage = () => (
  <div>
    <InvestorExpensesSummary />
    <InvestorExpenseListFilters />
    <InvestorExpenseList />
  </div>
  
);

export default InvestorExpenseDashboardPage;
