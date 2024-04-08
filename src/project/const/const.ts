const PRODUCT_VIEW_COUNT = 9;
const SIMILAR_VIEW_COUNT = 3;

const MOCK_START = 1;
const MOCK_END = 40;
const MAX_PRODUCTS_IN_BASKET = 99;
const MIN_PRODUCTS_IN_BASKET = 1;
const REWIEWS_COUNT = 3;
const DEFAULT_NULL = 0;
const START_SEARCH_TERM = 3;

const API_URL = 'https://camera-shop.accelerator.htmlacademy.pro';

const AppRoute = {
  Main: '/',
  AnyProduct: '/product',
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
  getProducts: '/cameras',
  getBanners: '/promo',
  getRewiews: '/reviews',
  getSimilar: '/similar',
  postRewiews: '/reviews',
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

const INITIAL_PAGE_BY_PAGINATION = 1;
const INITIAL_RATING = 3;
const INITIAL_COUNT_COMMENTS = 5;

const NAME_MIN = 3;
const NAME_MAX = 10;

const DATA_MIN = 10;
const DATA_MAX = 160;

const ERROR_MESSAGE = 'Нужно оценить товар';

const FilterPriceMap = {
  priceMin: 'от',
  priceMax: 'до'
}as const;

const FilterCategoryMap = {
  photocamera: 'Фотоаппарат',
  videocamera: 'Видеокамера'
} as const;

const FilterTypeMap = {
  digital: 'Цифровая',
  film: 'Плёночная',
  snapshot: 'Моментальная',
  collection: 'Коллекционная',
} as const;

const FilterLevelMap = {
  zero: 'Нулевой',
  nonProfessional: 'Любительский',
  professional: 'Профессиональный'
} as const;


const SortingType = {
  rating: 'rating',
  price: 'price',
} as const;


const SortingTypeLabel = {
  [SortingType.price]: 'по цене',
  [SortingType.rating]: 'по популярности'
};

const SortingDirection = {
  up: 'asc',
  down: 'desc'
} as const;

const SortingDirectionLabel = {
  [SortingDirection.up]: 'По возрастанию',
  [SortingDirection.down]: 'По убыванию'
};

const SettingValidation = {
  UserNameMin: 2,
  UserNameMax: 15,
  UserMessageValidation: 'От 2 до 15 символов',
  UserMessageRequired: 'Нужно указать имя',
  UserTextMin: 10,
  UserTextMax: 160,
  UserTextMessage: 'От 10 до 160 символов',
  UserTextPlus: 'Нужно указать достоинства',
  UserTextMinus: 'Нужно указать недостатки',
  UserComment: 'Нужно добавить комментарий'
};

export {
  PRODUCT_VIEW_COUNT,
  SIMILAR_VIEW_COUNT,
  MOCK_START,
  MOCK_END,
  REWIEWS_COUNT,
  START_SEARCH_TERM,
  AppRoute,
  PanginationStep,
  INITIAL_PAGE_BY_PAGINATION,
  NAME_MIN,
  NAME_MAX,
  DATA_MIN,
  DATA_MAX,
  PagesMap,
  RatingMap,
  AppRouteTab,
  DEFAULT_TAB,
  TabsMap,
  PanginationButton,
  PanginationsMap,
  ERROR_MESSAGE,
  INITIAL_RATING,
  INITIAL_COUNT_COMMENTS,
  API_URL,
  DEFAULT_NULL,
  ReqPath,
  FilterCategoryMap,
  FilterTypeMap,
  FilterLevelMap,
  FilterPriceMap,
  SortingTypeLabel,
  SortingDirection,
  SortingDirectionLabel,
  SortingType,
  SettingValidation,
  MAX_PRODUCTS_IN_BASKET,
  MIN_PRODUCTS_IN_BASKET
};
