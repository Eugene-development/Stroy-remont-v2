const seoTitle = '';
const seoDescription = '';


const mainText = {
    nameCategory: '',
    descriptionCategory:
		''
};

const company = [
	{
		city: 'Дзержинск',
		name: '',
        address: '',
        phone: '',
        email: '',
        products: [
            {
                name: ''
            },
        ],
        site: ''
	},
];

const contentMarketingSectionV6 = {
    mainText,
	company
};

export const get = () => {
	return {
		body: {
			seoTitle,
			seoDescription,
			contentMarketingSectionV6
		}
	};
};
