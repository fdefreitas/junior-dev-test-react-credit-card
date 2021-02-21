import { PROVIDER_MASTERCARD, PROVIDER_VISA } from './utils';

const FAKE_CARDS = [
	{
		provider: 'VISA',
		cardNumber: '4556602712570087',
		cardHolder: 'Emily Davis',
		expiry: '10/27'
	},
	{
		provider: 'VISA',
		cardNumber: '4716582203442789',
		cardHolder: 'Jessica Moore',
		expiry: '4/24'
	},
	{
		provider: 'VISA',
		cardNumber: '4693859851056922',
		cardHolder: 'Megan Taylor',
		expiry: '3/25'
	},
	{
		provider: 'VISA',
		cardNumber: '4485920415996821',
		cardHolder: 'Sarah Brown',
		expiry: '12/26'
	},
	{
		provider: 'VISA',
		cardNumber: '4532458933853987',
		cardHolder: 'Hannah Jones',
		expiry: '5/27'
	},
	{
		provider: 'MASTERCARD',
		cardNumber: '5205376796036503',
		cardHolder: 'Elizabeth Williams',
		expiry: '4/24'
	},
	{
		provider: 'MASTERCARD',
		cardNumber: '5522574884842255',
		cardHolder: 'Rebecca Blaese',
		expiry: '6/23'
	},
	{
		provider: 'MASTERCARD',
		cardNumber: '5329846831016976',
		cardHolder: 'Lauren Smith',
		expiry: '10/25'
	},
	{
		provider: 'MASTERCARD',
		cardNumber: '5371980942872485',
		cardHolder: 'Samantha Wilson',
		expiry: '6/22'
	},
	{
		provider: 'MASTERCARD',
		cardNumber: '5419503675124637',
		cardHolder: 'Katherine Miller',
		expiry: '3/27'
	},
];

export const fetchCards = async (provider) => {
	if(!provider) {
		return [...FAKE_CARDS];
	}

	switch(provider.toUppercase()) {
		case PROVIDER_MASTERCARD:
			return FAKE_CARDS.filter(card => card.provider === PROVIDER_MASTERCARD);
		case PROVIDER_VISA:
			return FAKE_CARDS.filter(card => card.provider === PROVIDER_VISA);
	}
};
