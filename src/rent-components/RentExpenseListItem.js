import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import currencyFormatter from 'currency-formatter';

const RentExpenseListItem = ({ id, rentName , rentPhone , rentItem, description, amount, createdAt }) => (
  <Link className="list-item" to={`/editRent/${id}`}>
  <div>
    <h3 className="list-item__title">{description}</h3>
    <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
  </div>
  <h3 className="list-item__title">{rentName}</h3>
  <h3 className="list-item__dat">{numeral(rentPhone).format('(00)')}</h3>
  <h3 className="list-item__data">{currencyFormatter.format(amount, { locale: 'sw-TZ' })}</h3>
  <h3 className="list-item__dat">{numeral(rentItem).format('0,0')}</h3>
  </Link>
      
 
);

export default RentExpenseListItem;
