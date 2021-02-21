export const PROVIDER_MASTERCARD = 'MASTERCARD';
export const PROVIDER_VISA = 'VISA';

import masterCardLogo from './assets/mc_logo.png';
import visaLogo from './assets/visa_logo.png';

export const getProviderLogo = (provider) => {
	if(provider) {
		switch (provider.toUpperCase()) {
			case PROVIDER_MASTERCARD:
				return masterCardLogo;
			case PROVIDER_VISA:
				return visaLogo;
		}
	}
};
