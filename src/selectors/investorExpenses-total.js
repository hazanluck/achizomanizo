export default (investorExpenses) => {
    return investorExpenses
        .map((investorExpense) => investorExpense.amount)
        .reduce((sum, value) => sum + value, 0);
  };