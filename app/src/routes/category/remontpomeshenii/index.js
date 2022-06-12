const seoTitle = 'Каталог компаний, осуществляющих ремонт помещений';
const seoDescription = 'Ознакомьтесь с компаниями, ремонтирующими квартиры, офисы и нежилые помещения.';

const mainText = {
	titleCategory: 'Ремонт помещений',
	descriptionCategory: 'Ремонт квартир и иных помещений под нужды заказчика'
};

const company = [
	{
		city: 'Нижний Новгород',
		name: 'АльфаСтройПро',
		address: 'ул. Проспект Ленина 54а, оф. 431',
		phone1: '+7 831 423-71-14',
		phone2: '+7 967 513-58-59',
		email: 'alphastroypro@yandex.ru',
		products: [
			{
				name: 'Черновой ремонт'
			},
			{
				name: 'Косметический ремонт'
			},
			{
				name: 'Капитальный ремонт'
			},
			{
				name: 'Дизайнерский ремонт'
			},
		],
		site: 'https://alphastroy.pro/'
	},
	{
		city: 'Нижний Новгород',
		name: 'Ремонт Строй',
		address: 'ул. Гоголя, дом 47, офис 7',
		phone1: '+7 (831) 423-46-73',
		email: 'remont-stroynn@yandex.ru',
		products: [
			{
				name: 'Натяжные потолки'
			},
			{
				name: 'Капитальный ремонт'
			},
			{
				name: 'Элетромонтажные работы'
			},
			{
				name: 'Ремонт ванной комнаты'
			},
		],
		site: 'http://remont-stroynn.ru/'
	},
	{
		city: 'Нижний Новгород',
		name: 'Регодизайн',
		address: 'Родионова 165 к.13',
		phone1: '8 (831) 423-87-07',
		email: 'regodesign-nn@yandex.ru',
		products: [
			{
				name: 'Дизайн'
			},
			{
				name: 'Ремонт'
			},
			{
				name: 'Мебель'
			},
			{
				name: 'Фасады'
			},
		],
		site: 'https://regodesign.ru/'
	},
	{
		city: 'Дзержинск',
		name: 'ГостРемонт',
		address: 'бульвар Правды, д.1',
		phone1: '+7 (8313) 300-261',
		phone2: '8 (920) 022-50-85',
		products: [
			{
				name: 'Косметический ремонт'
			},
			{
				name: 'Капитальный ремонт'
			},
			{
				name: 'Дизайнерский ремонт'
			},
		],
		site: 'https://dzerzhinsk-gostremont.ru/'
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
