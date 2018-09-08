export default (withdrawalExpenses) => {
    return withdrawalExpenses
        .map((withdrawalExpense) => withdrawalExpense.amount)
        .reduce((sum, value) => sum + value, 0);
  };