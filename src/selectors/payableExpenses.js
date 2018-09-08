import moment from 'moment';

// Get visible payableExpenses

export default (payableExpenses, { text, sortBy, startDate, endDate }) => {
  return payableExpenses.filter((payableExpense) => {
    const createdAtMoment = moment(payableExpense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = payableExpense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }else if (sortBy === 'payableItem') {
      return a.payableItem < b.payableItem ? 1 : -1;
    }
  });
};