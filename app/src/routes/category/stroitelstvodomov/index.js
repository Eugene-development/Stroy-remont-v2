const seoTitle = 'Строительство дач, бань и малоэтажных кострукций';
const seoDescription = 'Компании, строящие дачи, бани и другие малоэтажные здания жилой и коммерческой направленности';

const mainText = {
	titleCategory: 'Строительство',
	descriptionCategory: 'Строительство малоэтажных зданий и сооружений различной архитектуры'
};

const company = [
	{
		city: 'Нижний Новгород',
		name: 'СтройДом',
		address: 'ул. Казанская набережная, д.5, 3 этаж',
		phone1: '',
		phone2: '',
		email: 'mail@lesstroy52.ru',
		products: [
			{
				name: 'Строительство домов'
			},
			{
				name: 'Строительство котеджей'
			},
		],
		site: 'https://lesstroy52.ru/'
	},
	{
		city: 'Нижний Новгород',
		name: 'Усадьбы',
		address: 'ул. Литвинова 74 Б, 6 этаж, офис 605',
		phone1: '+7 (831) 266-48-04',
		email: 'sk-usadby@mail.ru',
		products: [
			{
				name: 'Каркасные дома'
			},
			{
				name: 'Каменные дома'
			},
			{
				name: 'Дачные дома'
			},
			{
				name: 'Бани'
			},
		],
		site: 'https://xn----8sbdl1a5bcp0fi.xn--p1ai/'
	},
	{
		city: 'Нижний Новгород',
		name: 'Дом-Проект',
		address: 'ул. Ульянова, 26/11',
		phone1: '8 (831) 214-03-36',
		email: 'mail@domproekt-52.ru',
		products: [
			{
				name: 'Загородные дома'
			},
			{
				name: 'Дачи'
			},
			{
				name: 'Бани'
			},
			{
				name: 'Гаражи'
			},
			{
				name: 'Заборы'
			},
			{
				name: 'Малые строения'
			},
		],
		site: 'https://domproekt-52.ru/'
	},
	{
		city: 'Нижний Новгород',
		name: 'БИНГО ГРУПП',
		address: 'ул. Родионова, 167 Б, офис 110/1',
		phone1: '+7 (831) 231-03-49',
		email: 'info@s-dom52.ru',
		products: [
			{
				name: 'Дома из блоков, бруса и пр.'
			},
			{
				name: 'Кровля крыши'
			},
			{
				name: 'Инженерные системы'
			},
			{
				name: 'Земляные работы'
			},
			{
				name: 'Ангары'
			},
			{
				name: 'Бассейны'
			},
		],
		site: 'https://s-dom52.ru/'
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
