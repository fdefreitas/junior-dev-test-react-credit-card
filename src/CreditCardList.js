import React from 'react';
import { fetchCards } from './api';
import { CreditCardListItem } from './CreditCardListItem';

import './credit-card-list.css';

export const CreditCardList = ({onCardClicked}) => {
	const [cardList, setCardList] = React.useState([]);

	React.useEffect(() => {
		const getCardsFromApi = async () => {
			const cards = await fetchCards();
			setCardList(cards);
		};

		getCardsFromApi();
	}, []);

	return (
		<div>
			<h4>Recently registered cards</h4>
			<ul className='card-list'>
				{cardList.map((card) =>
					<li key={card.cardNumber} onClick={() => onCardClicked(card)}>
						<CreditCardListItem card={card}/>
					</li>
				)}
			</ul>
		</div>);
};
