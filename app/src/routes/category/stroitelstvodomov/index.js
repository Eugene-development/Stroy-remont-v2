const seoTitle = '';
const seoDescription = '';

const mainText = {
	nameCategory: '',
	descriptionCategory: ''
};

const company = [
	{
		city: 'Дзержинск',
		name: 'Орбита-Строй',
		address: 'п-т Ленина 121-в',
		phone1: '8 (902) 303-36-54',
		phone2: '8 (930) 688-88-62',
		email: 'info@orbita-stroy.com',
		products: [
			{
				name: 'Стройматериалы'
			},
			{
				name: 'Изоляция'
			},
			{
				name: 'Отделка'
			},
			{
				name: 'Инструмент'
			},
			{
				name: 'Сантехника'
			},
			{
				name: 'Электротовары'
			}
		],
		site: 'https://orbita-stroy.com'
	}
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
