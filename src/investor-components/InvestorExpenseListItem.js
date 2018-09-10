import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import currencyFormatter from 'currency-formatter';

const InvestorExpenseListItem = ({ id, investorName , investorPhone , investorItem, description, amount, createdAt }) => (
  <Link className="list-item" to={`/editInvestor/${id}`}>
  <div>
    <h3 className="list-item__title">{description}</h3>
    <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
  </div>
  <h3 className="list-item__title">{investorName}</h3>
  <h3 className="list-item__data">{currencyFormatter.format(amount, { locale: 'sw-TZ' })}</h3>
 </Link>
      
 
);

export default InvestorExpenseListItem;
