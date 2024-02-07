const PRODUCT_VIEW_COUNT = 9;

export { PRODUCT_VIEW_COUNT };

const MOCK_START = 1;
const MOCK_END = 40;

const REWIEWS_COUNT = 3;

const AppRoute = {
  Main: '/',
  Product: '/product',
  Basket: '/basket',
  AddBasket: 'add-basket',
  AddBasketSuccess: '/add-basket-success',
  AddRewiew: '/add-rewiew',
  AddRewiewSuccess: '/add-rewiew-success',
  AddRewiewError: '/add-rewiew-error',
} as const;

const PanginationStep = {
  First: 1,
  Second: 2,
  Third: 3,
};

const PagesMap = {
  Main: 'Главная',
  Catalog:  'Каталог',
  Basket: 'Корзина'
};

const INITAL_PAGE_BY_PANGINATION = 1;

export { MOCK_START, MOCK_END, REWIEWS_COUNT, AppRoute, PanginationStep, INITAL_PAGE_BY_PANGINATION, PagesMap };
