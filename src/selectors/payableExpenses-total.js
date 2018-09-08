export default (payableExpenses) => {
    return payableExpenses
        .map((payableExpense) => payableExpense.amount)
        .reduce((sum, value) => sum + value, 0);
  };