import React from 'react';
import { CreditCardList } from './CreditCardList';
import { CreditCard } from './CreditCard';
import './container.css';

export const Container = () => {
	const [selectedCard, setSelectedCard] = React.useState(undefined);

	const cardClickHandler = (card) => {
		setSelectedCard(card);
	};

	return (<div className='grid-container'>
		<div className='list-container'>
			<CreditCardList onCardClicked={cardClickHandler}/>
		</div>
		<div className='card-container'>
			<CreditCard card={selectedCard}/>
		</div>
	</div>);
};
