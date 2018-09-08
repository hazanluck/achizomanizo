import moment from 'moment';

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date' ,
  //sortBy:'itemTotal',
  //sortBy:'itemsells',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
      case 'SORT_BY_ITEMTOTAL':
      return {
        ...state,
        sortBy: 'itemTotal'
      };
      case 'SORT_BY_ITEMSELLS':
      return {
        ...state,
        sortBy: 'itemSells'
      };
      case 'SORT_BY_RENTITEM':
      return {
        ...state,
        sortBy: 'rentItem'
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};
