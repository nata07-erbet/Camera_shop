const PRODUCT_VIEW_COUNT = 9;
const SIMILAR_VIEW_COUNT = 3;

const MOCK_START = 1;
const MOCK_END = 40;

const DEFAULT_PAGE_NUM = 1;

const REWIEWS_COUNT = 3;

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

const INITAL_PAGE_BY_PANGINATION = 1;
const INITAL_RATING = 3;
const INITAL_COUNT_COMMENTS = 5;

const NAME_MIN = 3;
const NAME_MAX = 10;

const DATA_MIN = 10;
const DATA_MAX = 160;

const ERROR_MESSAGE = 'Нужно оценить товар';

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
  rating: 'Rating',
  price: 'Price',
} as const;

<<<<<<< HEAD
const SortingTypeLabel = {
  [SortingType.rating]: 'по популярности',
  [SortingType.price]: 'по цене'
} as const;

const SortingDirection = {
  up: 'LowToHigh',
  down: 'HighToLow'
} as const;

=======

const SortingTypeLabel = {
  [SortingType.price]: 'по цене',
  [SortingType.rating]: 'по популярности'
};

const SortingDirection = {
  up: 'LowToHigh',
  down: 'HighToLow'
} as const;

>>>>>>> 7155c6c (fix after rewiew)
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
  DEFAULT_PAGE_NUM,
  REWIEWS_COUNT,
  START_SEARCH_TERM,
  AppRoute,
  PanginationStep,
  INITAL_PAGE_BY_PANGINATION,
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
  INITAL_RATING,
  INITAL_COUNT_COMMENTS,
  API_URL,
  ReqPath,
  FilterCategoryMap,
  FilterTypeMap,
  FilterLevelMap,
<<<<<<< HEAD
  SortingType,
  SortingTypeLabel,
  SortingDirection,
  SortingDirectionLabel,
  SettingValidation
=======
  SortingTypeLabel,
  SortingDirection,
  SortingDirectionLabel,
  SortingType,
  SettingValidation,
>>>>>>> 7155c6c (fix after rewiew)
};
