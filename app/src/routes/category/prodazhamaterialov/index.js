const seoTitle = '';
const seoDescription = '';

const mainText = {
	titleCategory: 'Продажа',
	descriptionCategory: 'Реализация строительных и отделочных материалов оптом и в розницу'
};

const company = [
	// {
	// 	city: '',
	// 	name: '',
	// 	address: '',
	// 	phone1: '',
	// 	phone2: '',
	// 	email: '',
	// 	products: [
	// 		{
	// 			name: ''
	// 		},
	// 	],
	// 	site: ''
	// },

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
			},
			{
				name: 'Окна'
			}
		],
		site: 'https://orbita-stroy.com'
	},
	{
		city: 'Нижний Новгород',
		name: 'СтройБаза',
		address: 'ул. Тургенева, д. 19А/11',
		phone1: '+7 (831) 216-09-04',
		phone2: '+7 (831) 291-26-08',
		email: 'stroybaza-nn@mail.ru',
		products: [
			{
				name: 'Стройматериалы'
			},
			{
				name: 'Отделочные материалы'
			},
			{
				name: 'Инструмент и расходники'
			},
			{
				name: 'Электрика и сантехника'
			},
		],
		site: 'https://stroybaza-nn.ru/'
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
