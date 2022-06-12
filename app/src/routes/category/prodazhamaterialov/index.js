const seoTitle = 'Каталог компаний по продаже строительных материалов';
const seoDescription = 'Ознакомьтесь с продавцами строительных и отделочных материалов в вашем регионе Нижегородская область';

const mainText = {
	titleCategory: 'Продажа стройматериалов',
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
	{
		city: 'Нижний Новгород',
		name: 'Стройкер',
		address: 'улица Торфяная, 7А',
		phone1: '+7 831 216-25-65',
		phone2: '+7 831 283-79-88',
		email: 'order@stmat.ru',
		products: [
			{
				name: 'Строительные материалы'
			},
			{
				name: 'Отделочные материалы'
			},
			{
				name: 'Лакокрасочные материалы'
			},
			{
				name: 'Хозяйственнные товары'
			},
			{
				name: 'Электротовары'
			},
			{
				name: 'Для дома, сада, бани'
			},
		],
		site: 'https://stmat.ru/'
	},
	{
		city: 'Нижний Новгород',
		name: 'СтройНН',
		address: 'Комсомольское шоссе, дом 4, корп 4',
		phone1: '+7 (831) 291-24-34,',
		phone2: '+7 (831) 291-46-51',
		email: 'tdns52@yandex.ru',
		products: [
			{
				name: 'Стройматериалы'
			},
			{
				name: 'Отделочные материалы'
			},
			{
				name: 'Пиломатериал'
			},
			{
				name: 'Металлопрокат'
			},
			{
				name: 'Крепёж'
			},
			{
				name: 'Инструмент'
			},
			{
				name: 'Сантехника'
			},
		],
		site: 'https://xn----rtbkaglgi.xn--p1ai/'
	},
	{
		city: 'Нижний Новгород',
		name: 'СтройРем',
		address: 'пр-т. Гагарина 23А, оф. №1',
		phone1: '+7 (831) 260-11-60',
		phone2: '+7 (831) 465-51-36',
		email: 'info@stroyrem-nn.ru',
		products: [
			{
				name: 'Стройматериалы'
			},
			{
				name: 'Интерьер и отделка'
			},
			{
				name: 'Электрика и освещение'
			},
			{
				name: 'Сантехника и водоснабжение'
			},
			{
				name: 'Ручной и электроинструмент'
			},
		],
		site: 'https://stroyrem-nn.ru/'
	},
	{
		city: 'Нижний Новгород',
		name: 'СтройБокс',
		address: 'Бурнаковский строительный рынок, пав. 68-69',
		phone1: '8 (903) 608-94-95',
		phone2: '8 (910) 875-05-06',
		email: 'stroymat.prof@mail.ru',
		products: [
			{
				name: 'Сухие смеси'
			},
			{
				name: 'Фасадные материалы'
			},
			{
				name: 'Кровельные материалы'
			},
			{
				name: 'Крепёж'
			},
			{
				name: 'Сантехника и водоснабжение'
			},
		],
		site: 'https://stroybox-nn.ru/'
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
