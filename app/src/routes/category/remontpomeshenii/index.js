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
