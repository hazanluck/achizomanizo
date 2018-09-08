import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const InvestorExpenseListItem = ({ id, investorName , investorPhone , investorItem, description, amount, createdAt }) => (
  <Link className="list-item" to={`/editInvestor/${id}`}>
  <div>
    <h3 className="list-item__title">{description}</h3>
    <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
  </div>
  <h3 className="list-item__title">{investorName}</h3>
  <h3 className="list-item__dat">{numeral(investorPhone).format('(00)')}</h3>
  <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
  <h3 className="list-item__dat">{numeral(investorItem).format('0,0')}</h3>
  </Link>
      
 
);

export default InvestorExpenseListItem;
