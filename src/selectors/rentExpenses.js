import moment from 'moment';

// Get visible RentExpenses

export default (rentExpenses, { text, sortBy, startDate, endDate }) => {
  return rentExpenses.filter((rentExpense) => {
    const createdAtMoment = moment(rentExpense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = rentExpense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }else if (sortBy === 'rentItem') {
      return a.rentItem < b.rentItem ? 1 : -1;
    }
  });
};