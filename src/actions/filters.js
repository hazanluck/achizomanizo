// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

// SORT_BY_ITEMTOTAL
export const sortByItemTotal = () => ({
  type: 'SORT_BY_ITEMTOTAL'
});
// SORT_BY_ITEMSELLS
export const sortByItemSells = () => ({
  type: 'SORT_BY_ITEMSELLS'
});
// SORT_BY_RENTITEM
export const sortByRentItem = () => ({
  type: 'SORT_BY_RENTITEM'
});
// SORT_BY_PAYABLE
export const sortByPayableItem = () => ({
  type: 'SORT_BY_PAYABLE'
});