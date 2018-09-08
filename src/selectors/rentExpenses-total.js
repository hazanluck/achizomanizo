export default (rentExpenses) => {
    return rentExpenses
        .map((rentExpense) => rentExpense.amount)
        .reduce((sum, value) => sum + value, 0);
  };