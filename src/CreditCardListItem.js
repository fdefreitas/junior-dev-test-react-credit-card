import React from 'react';
import { getProviderLogo } from './utils';

import './credit-card-list-item.css';

export const CreditCardListItem = ({card}) => {
	return (<div className='list-item'>
		<img className='logo' src={getProviderLogo(card.provider)} width="40"/>
		<div  className='number'>{card.cardNumber}</div>
		<div  className='name'>{card.cardHolder}</div>
	</div>);
};
