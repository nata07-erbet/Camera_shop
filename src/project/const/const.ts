const PRODUCT_VIEW_COUNT = 9;

const MOCK_START = 1;
const MOCK_END = 40;

const REWIEWS_COUNT = 3;

const BACK_URL = 'https://camera-shop.accelerator.htmlacademy.pro';

const AppRoute = {
  Main: '/',
  Product: '/product/:productId/:tab?',
  Basket: '/basket',
  Loader:'/loader',
  AddBasket: 'add-basket',
  AddBasketSuccess: '/add-basket-success',
  AddRewiew: '/add-rewiew',
  AddRewiewSuccess: '/add-rewiew-success',
  AddRewiewError: '/add-rewiew-error',
} as const;

const ReqPath = {
  getProducts: `${BACK_URL}/cameras`,
  getBanners: `${BACK_URL}/promo`,
  getRewiews: 'reviews',
  getSimilar: 'similar'
};

const AppRouteTab = {
  Characteristic: 'characteristic',
  Description: 'description'
} as const;

const TabsMap = {
  [AppRouteTab.Characteristic]: 'Характеристики',
  [AppRouteTab.Description]: 'Описание'

}as const;

const DEFAULT_TAB = AppRouteTab.Characteristic;

const PanginationStep = {
  First: 1,
  Second: 2,
  Third: 3,
} as const;

const PanginationButton = {
  Next: 'Далее',
  Prev: 'Назад'
};

const PanginationsMap = {
  [PanginationButton.Next]: 'Далее',
  [PanginationButton.Prev]: 'Назад'
};

const PagesMap = {
  Main: 'Главная',
  Catalog:  'Каталог',
  Basket: 'Корзина'
} as const;

const RatingMap = {
  '5': 'Отлично',
  '4': 'Хорошо',
  '3': 'Нормально',
  '2': 'Плохо',
  '1': 'Ужасно'
} as const;

const INITAL_PAGE_BY_PANGINATION = 1;
const INITAL_RATING = 3;
const INITAL_COUNT_COMMENTS = 5;

const ERROR_MESSAGE = 'Нужно оценить товар';

export {PRODUCT_VIEW_COUNT, MOCK_START, MOCK_END, REWIEWS_COUNT, AppRoute, PanginationStep, INITAL_PAGE_BY_PANGINATION, PagesMap, RatingMap, AppRouteTab, DEFAULT_TAB, TabsMap, PanginationButton, PanginationsMap, ERROR_MESSAGE, INITAL_RATING, INITAL_COUNT_COMMENTS, BACK_URL, ReqPath};
