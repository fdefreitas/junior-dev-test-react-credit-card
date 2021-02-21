import React from 'react';

import './credit-card.css';

import visaLogo from './assets/visa_logo.png';
import masterCardLogo from './assets/mc_logo.png';

const cardTypeToLogo = {
	'MASTERCARD': masterCardLogo,
	'VISA': visaLogo
};

export const CreditCard = ({ card }) => {
	if (!card) {
		return null;
	}

	return (
		<div className='credit-card'>
			<div className='credit-card__logo'>
				<img className='logo' src={cardTypeToLogo[card.provider]} width="60"/>
			</div>

			<div className='credit-card__number'>{card.cardNumber}</div>

			<div className='credit-card__info'>
				<div className='credit-card__info_name'>
					<div className='credit-card__info_label'>CARDHOLDER'S NAME</div>
					<div>{card.cardHolder}</div>
				</div>

				<div className='credit-card__info_expiry'>
					<div className='credit-card__info_label'>EXPIRES END</div>
					<div>{card.expiry}</div>
				</div>
			</div>

		</div>
	);
};
