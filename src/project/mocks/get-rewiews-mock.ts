import { TRewiew } from '../types/index';

const getRewiewsJSON = `
[
  {
    "id": "5b9497d9-3616-48f5-b36c-33800bc07abd",
    "userName": "Дарья",
    "advantage": "Хорошо. Отличная камера.",
    "disadvantage": "Без объектива",
    "review": "В целом для домашнего использования в самый раз!",
    "rating": 3,
    "createAt": "2023-10-31T09:38:11.174Z",
    "cameraId": 1
  },
  {
    "id": "2d357c05-563c-46e4-8c4d-ff2545f53460",
    "userName": "Ксения",
    "advantage": "Недорогая, за такую цену отличный вариант.",
    "disadvantage": "Пришла поврежденная упаковка. Нет теперь понимая со внутренностями",
    "review": "Отличная камера, мне понравилась, пользуюсь около года. Профессионально оценить нет возможности. Есть разные мелкие недочеты, но, по скольку я не являюсь специалисто в данной области, они не ощущаются в моих работах.",
    "rating": 1,
    "createAt": "2023-08-22T09:38:11.177Z",
    "cameraId": 1
  },
  {
    "id": "c60def2d-763f-4b56-8a49-67cff5ee5664",
    "userName": "Алексей",
    "advantage": "Рекомендую данный аппарат",
    "disadvantage": "Быстро садиться зарядка",
    "review": "Подарила сыну на первое сентября прошлого года. Пришла целой. Для начала камера хорошая.",
    "rating": 4,
    "createAt": "2023-07-24T09:38:11.177Z",
    "cameraId": 1
  },
  {
    "id": "c178feca-2463-417d-a8d2-063d52740ba2",
    "userName": "Евгений",
    "advantage": "Недорогая, за такую цену отличный вариант.",
    "disadvantage": "Не рекомендую!",
    "review": "В целом для домашнего использования в самый раз!",
    "rating": 1,
    "createAt": "2023-06-20T09:38:11.177Z",
    "cameraId": 1
  },
  {
    "id": "a0146843-9a4c-4563-9021-a0a0b9caa81d",
    "userName": "Ксения",
    "advantage": "Настройки, внешний вид, лёгкость",
    "disadvantage": "Трудно найти чехол. Заводские крайне дррогие",
    "review": "В целом для домашнего использования в самый раз!",
    "rating": 2,
    "createAt": "2023-07-23T09:38:11.177Z",
    "cameraId": 1
  },
  {
    "id": "6fdb2d7e-3a8a-4961-9504-0d1fba30173f",
    "userName": "Александр",
    "advantage": "Недорогая, за такую цену отличный вариант.",
    "disadvantage": "Не удобный интерфейс и кнопки",
    "review": "Не возможно найти дополнительные аккамуляторы. К сожалению, те, что идут в комплекте не держут более 7 часов?",
    "rating": 1,
    "createAt": "2023-10-21T09:38:11.177Z",
    "cameraId": 1
  },
  {
    "id": "b6773c82-daca-4409-86dd-fb60464a659f",
    "userName": "Кирилл",
    "advantage": "Недорогая, за такую цену отличный вариант.",
    "disadvantage": "Нет.",
    "review": "Хорошая камера. Лучше за эти деньги не найти.",
    "rating": 1,
    "createAt": "2023-11-27T09:38:11.177Z",
    "cameraId": 1
  },
  {
    "id": "7beaa709-b1be-44ea-9d27-cc817906267a",
    "userName": "Ксения",
    "advantage": "Покупали недавно. Пока нареканий нет.",
    "disadvantage": "Плохая камера, не рекомендую",
    "review": "Подарила сыну на первое сентября прошлого года. Пришла целой. Для начала камера хорошая.",
    "rating": 1,
    "createAt": "2023-06-27T09:38:11.177Z",
    "cameraId": 1
  },
  {
    "id": "b976c442-352a-4a52-b683-7ae2ea51b6ed",
    "userName": "Павел",
    "advantage": "Легкая в плане веса, удобная в интерфейсе, зарядка",
    "disadvantage": "Нет.",
    "review": "Отличная камера. Великолепные снимки, проста в управлении. Полностью оправдывает стоимость",
    "rating": 4,
    "createAt": "2023-11-26T09:38:11.177Z",
    "cameraId": 1
  },
  {
    "id": "b99a291e-53d9-46f3-9df0-a1d7a5c28443",
    "userName": "Ксения",
    "advantage": "Легкая в плане веса, удобная в интерфейсе, зарядка",
    "disadvantage": "Нет.",
    "review": "Хорошая камера. Лучше за эти деньги не найти.",
    "rating": 5,
    "createAt": "2023-11-25T09:38:11.178Z",
    "cameraId": 1
  },
  {
    "id": "cef107cc-b057-4a5c-84f1-44a8aa5f88e3",
    "userName": "Евгений",
    "advantage": "Рекомендую данный аппарат",
    "disadvantage": "Быстро садиться зарядка",
    "review": "Отличная камера, мне понравилась, пользуюсь около года. Профессионально оценить нет возможности. Есть разные мелкие недочеты, но, по скольку я не являюсь специалисто в данной области, они не ощущаются в моих работах.",
    "rating": 1,
    "createAt": "2023-11-22T09:38:11.178Z",
    "cameraId": 1
  },
  {
    "id": "0e02dda3-2dc4-42a0-bde8-08574a5ee1c7",
    "userName": "Ольга",
    "advantage": "Настройки, внешний вид, лёгкость",
    "disadvantage": "Пришла поврежденная упаковка. Нет теперь понимая со внутренностями",
    "review": "Это моя первая камера. Я в восторге, нареканий нет",
    "rating": 1,
    "createAt": "2023-05-31T09:38:11.178Z",
    "cameraId": 1
  },
  {
    "id": "5b81b2f1-57b8-4d93-8621-5bf294d81ca6",
    "userName": "Евгений",
    "advantage": "Покупали недавно. Пока нареканий нет.",
    "disadvantage": "Трудно найти чехол. Заводские крайне дррогие",
    "review": "Отличная камера, мне понравилась, пользуюсь около года. Профессионально оценить нет возможности. Есть разные мелкие недочеты, но, по скольку я не являюсь специалисто в данной области, они не ощущаются в моих работах.",
    "rating": 4,
    "createAt": "2023-09-27T09:38:11.178Z",
    "cameraId": 1
  },
  {
    "id": "6a960a91-24a6-42cc-a121-259ef6741c79",
    "userName": "Алексей",
    "advantage": "Легкая в плане веса, удобная в интерфейсе, зарядка",
    "disadvantage": "Трудно найти чехол. Заводские крайне дррогие",
    "review": "Не возможно найти дополнительные аккамуляторы. К сожалению, те, что идут в комплекте не держут более 7 часов?",
    "rating": 2,
    "createAt": "2023-08-02T09:38:11.178Z",
    "cameraId": 1
  },
  {
    "id": "733c80ab-ec78-46b4-b3aa-ef8d9335109f",
    "userName": "Анастасия",
    "advantage": "Хороший стабилизатор и матрица",
    "disadvantage": "Пришла поврежденная упаковка. Нет теперь понимая со внутренностями",
    "review": "Камера для начинающих, самое то. Но урезанный комплект и многое придётся докупать",
    "rating": 3,
    "createAt": "2023-11-01T09:38:11.178Z",
    "cameraId": 1
  },
  {
    "id": "9b524ed0-2d72-408a-a7b4-18a254f229e1",
    "userName": "Анастасия",
    "advantage": "Рекомендую данный аппарат",
    "disadvantage": "Нет.",
    "review": "Камера для начинающих, самое то. Но урезанный комплект и многое придётся докупать",
    "rating": 5,
    "createAt": "2023-10-20T09:38:11.178Z",
    "cameraId": 1
  },
  {
    "id": "f3537999-9ce1-4c9c-9bde-79bb29e3f877",
    "userName": "Ольга",
    "advantage": "Нет.",
    "disadvantage": "Быстро садиться зарядка",
    "review": "Камера достаточно хорошая, но не очень радует цена.",
    "rating": 2,
    "createAt": "2023-09-27T09:38:11.178Z",
    "cameraId": 1
  },
  {
    "id": "25ff32f1-7743-4005-9739-c2874f648a9c",
    "cameraId": 1,
    "userName": "Люся",
    "advantage": "Все супер",
    "disadvantage": "нет",
    "review": "Рекомендую",
    "rating": 5,
    "createAt": "2023-12-05T15:02:55.379Z"
  },
  {
    "id": "e614bc0b-73c6-42ac-a3bd-58b3db2c9eec",
    "cameraId": 1,
    "userName": "Коля",
    "advantage": "Норм",
    "disadvantage": "Сойдет",
    "review": "Сойдет",
    "rating": 3,
    "createAt": "2023-12-05T15:04:10.609Z"
  },
  {
    "id": "941896b4-6270-4e73-9bac-3b91af78280d",
    "rating": 4,
    "userName": "asdf",
    "advantage": "asdf",
    "disadvantage": "asd",
    "review": "asdf sdafasd",
    "cameraId": 1,
    "createAt": "2023-12-06T12:58:38.195Z"
  },
  {
    "id": "8b145142-8ab4-4d66-a31b-c444877db7e0",
    "rating": 4,
    "userName": "F23445",
    "advantage": "ergwergewrg",
    "disadvantage": "YA DEREVO",
    "review": "1231414514",
    "cameraId": 1,
    "createAt": "2023-12-07T13:58:46.794Z"
  },
  {
    "id": "aa62b758-1921-4a69-b064-a1f36bef6d76",
    "rating": 1,
    "userName": "Ваше имя",
    "advantage": "Ваше имя",
    "disadvantage": "Ваше имя",
    "review": "Ваше имя",
    "cameraId": 1,
    "createAt": "2023-12-10T21:27:41.584Z"
  },
  {
    "id": "aba2a9eb-f6fc-474a-b15a-60e006384b3e",
    "rating": 1,
    "userName": "Рейтинг",
    "advantage": "Рейтинг",
    "disadvantage": "Рейтинг",
    "review": "Рейтинг",
    "cameraId": 1,
    "createAt": "2023-12-10T21:38:00.201Z"
  },
  {
    "id": "2053e6e0-a548-47cd-976f-4e17f292a851",
    "cameraId": 1,
    "userName": "dddddddddddddd",
    "advantage": "dddddddddddddd",
    "disadvantage": "dddddddddddddd",
    "review": "dddddddddddddd",
    "rating": 4,
    "createAt": "2023-12-28T20:41:46.037Z"
  },
  {
    "id": "864c5b58-bbc6-461a-9a16-bd0eec28371f",
    "cameraId": 1,
    "userName": "Алексей",
    "advantage": "нет слайдера, это главное ",
    "disadvantage": "но валидацию тоже не люблю",
    "review": "1 итерация, сдавайся",
    "rating": 5,
    "createAt": "2023-12-28T20:46:58.056Z"
  },
  {
    "id": "c7299df8-caaf-4b8c-9df2-77512ebc54fc",
    "cameraId": 1,
    "userName": "dddddddddddddd",
    "advantage": "awdddddddddddddddddd",
    "disadvantage": "dddddddddddddddddddddd",
    "review": "dddddddddddddddddddddddddddddd",
    "rating": 3,
    "createAt": "2024-01-07T15:35:44.031Z"
  },
  {
    "id": "ba86e81f-459f-4423-8125-c30883e2158d",
    "cameraId": 1,
    "userName": "ууу",
    "advantage": "ууууууууууууу",
    "disadvantage": "ууууууууууууу",
    "review": "ууууууууууу",
    "rating": 5,
    "createAt": "2024-01-15T10:04:44.608Z"
  },
  {
    "id": "bca8f827-2bd8-4d66-9d07-1e1991bfe47a",
    "cameraId": 1,
    "userName": "Кирилл",
    "advantage": "Легкая в плане веса, удобная в интерфейсе",
    "disadvantage": "Быстро садиться зарядка",
    "review": "Это моя первая камера. Я в восторге, нареканий нет",
    "rating": 5,
    "createAt": "2024-01-19T10:33:28.183Z"
  },
  {
    "id": "b13d01a7-d788-4f64-843e-716d521c9192",
    "rating": 3,
    "userName": "Наталья",
    "advantage": "Очень хорошая камера, легкая, удобная, функциональнаяю",
    "disadvantage": "Не увидела.",
    "review": "555555555555555555555555555555",
    "cameraId": 1,
    "createAt": "2024-01-19T10:39:42.055Z"
  },
  {
    "id": "54a42489-dd15-4295-b18a-54501a0ca718",
    "rating": 4,
    "userName": "Наталья",
    "advantage": "Неплохая камера, делает отличные снимки",
    "disadvantage": "Выглядит странно. Тяжелая для меня. Долго снимать не получится",
    "review": "Хорошее качество снимков перекрывает все недостатки",
    "cameraId": 1,
    "createAt": "2024-01-19T10:53:11.472Z"
  },
  {
    "id": "d6641c74-8330-45e1-a5ac-d68a0837a7d2",
    "rating": 5,
    "userName": "Наталья",
    "advantage": "Очень хорошая камера",
    "disadvantage": "Не увидела.",
    "review": "Радуюсь что купила именно такую",
    "cameraId": 1,
    "createAt": "2024-01-19T10:58:32.161Z"
  },
  {
    "id": "c5992e9a-1178-421b-8d4d-ea7fb9022cda",
    "rating": 4,
    "userName": "Клуша",
    "advantage": "красивый и хороший",
    "disadvantage": "очень дорогой",
    "review": "фотик работает, но очень дорого за него по-моему",
    "cameraId": 1,
    "createAt": "2024-01-19T13:54:32.114Z"
  },
  {
    "id": "f7112516-87ab-4d21-8d95-320a454c94d9",
    "cameraId": 1,
    "advantage": "очень крутой мужик",
    "disadvantage": "жаль дурачёк",
    "rating": 3,
    "review": "фывфы в фв фыв фыв фыв фыв ",
    "userName": "Василий",
    "createAt": "2024-01-20T02:48:33.186Z"
  },
  {
    "id": "f084bb73-e1a8-4d11-9a1c-f07654d87862",
    "cameraId": 1,
    "advantage": "фывфывфы вфы фыв фыв ",
    "disadvantage": "фывфывфы вфы фыв фыв ",
    "rating": 3,
    "review": "фывфывфы вфы фыв фыв  фывфывфы вфы фыв фыв  фывфывфы вфы фыв фыв ",
    "userName": "Слава",
    "createAt": "2024-01-20T02:50:49.625Z"
  },
  {
    "id": "ac26beb4-cdaf-45bb-abab-a0a0ce693ad2",
    "cameraId": 1,
    "advantage": "111111111111111111111",
    "disadvantage": "фывфывфы вфы фыв фыв ",
    "rating": 3,
    "review": "фывфывфы вфы фыв фыв  фывфывфы вфы фыв фыв  фывфывфы вфы фыв фыв ",
    "userName": "Слава",
    "createAt": "2024-01-20T02:51:03.400Z"
  },
  {
    "id": "f95aebb2-60bd-4fb2-a6a7-3f2ec56af98c",
    "cameraId": 1,
    "advantage": "12341234 23423423 ",
    "disadvantage": "12341234 23423423 ",
    "rating": 5,
    "review": "ифыавифыав ифыав ифыав ифыавифыавифыав",
    "userName": "Слава",
    "createAt": "2024-01-20T02:51:33.417Z"
  },
  {
    "id": "4ad6dc7a-ee05-4386-b805-bace695b31d0",
    "cameraId": 1,
    "advantage": "Кушала кашу",
    "disadvantage": "Манную кашу",
    "rating": 2,
    "review": "Но манка невкусная, подумала Маша",
    "userName": "Маша",
    "createAt": "2024-01-20T02:55:14.248Z"
  },
  {
    "id": "3dbb460a-4c1c-442b-b026-4f0f8d6d0e6e",
    "cameraId": 1,
    "advantage": "dflgjkdflg",
    "disadvantage": "dflgjkdflg",
    "rating": 5,
    "review": "dflgjkdflg dflgjkdflg dflgjkdflg ",
    "userName": "dflgjkdflg",
    "createAt": "2024-01-20T02:59:35.789Z"
  },
  {
    "id": "ff428d8f-0928-4fb8-8ff7-2edd93257239",
    "cameraId": 1,
    "advantage": "bcvnbkerhgo",
    "disadvantage": "bcvnbkerhgo",
    "rating": 1,
    "review": "bcvnbkerhgo bcvnbkerhgo bcvnbkerhgo",
    "userName": "bcvnbkerhgo",
    "createAt": "2024-01-20T02:59:44.620Z"
  },
  {
    "id": "7549cf1a-82a9-441f-9acf-115963f8a147",
    "cameraId": 1,
    "advantage": "bbbbb bbbbb",
    "disadvantage": "bbbbb bbbbb",
    "rating": 5,
    "review": "bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb",
    "userName": "bbbbbbbbbbbb",
    "createAt": "2024-01-20T03:08:06.280Z"
  },
  {
    "id": "07864bcf-c382-49e4-acee-648e190c6cf9",
    "cameraId": 1,
    "advantage": "важлрощвпщвжро",
    "disadvantage": "важлрощвпщвжро",
    "rating": 5,
    "review": "ывадпорывдлоар лыдовра длы",
    "userName": "Таня",
    "createAt": "2024-01-20T03:09:04.678Z"
  },
  {
    "id": "11f503a4-7696-4e6e-9ca8-7856594e59e6",
    "cameraId": 1,
    "advantage": "фа пиав при уе ц ",
    "disadvantage": "фа пиав при уе ц ",
    "rating": 3,
    "review": "фа пиав при уе ц  фа пиав при уе ц  фа пиав при уе ц  ",
    "userName": "Миша",
    "createAt": "2024-01-20T03:09:48.390Z"
  },
  {
    "id": "5a844970-4828-4080-ac2d-f61e4a4e28c8",
    "cameraId": 1,
    "advantage": "аывпджрыащпр лдваырп",
    "disadvantage": "аывпджрыащпр лдваырп",
    "rating": 3,
    "review": "аывпджрыащпр лдваырп",
    "userName": "Валера",
    "createAt": "2024-01-20T03:16:32.780Z"
  },
  {
    "id": "df5f6104-b2a2-41ab-a744-44e0034740e5",
    "cameraId": 1,
    "advantage": "вапващдепрвлдапро дл",
    "disadvantage": "вапващдепрвлдапро дл",
    "rating": 3,
    "review": "вапващдепрвлдапро дл вапващдепрвлдапро дл ",
    "userName": "Филипп",
    "createAt": "2024-01-20T03:17:53.632Z"
  },
  {
    "id": "08c5d2d4-bc7e-40e9-8474-6095e04902ea",
    "cameraId": 1,
    "advantage": "фыв фывф ывф вы ф вф ",
    "disadvantage": "фыв фывф ывф вы ф вф ",
    "rating": 3,
    "review": "фыв фывф ывф вы ф вф  фыв фывф ывф вы ф вф  фыв фывф ывф вы ф вф ",
    "userName": "Даша",
    "createAt": "2024-01-20T03:18:44.900Z"
  },
  {
    "id": "0af5ec81-df7c-4829-a09d-b1f50a4987bd",
    "cameraId": 1,
    "advantage": "варовлапрлварп",
    "disadvantage": "варовлапрлварп",
    "rating": 3,
    "review": "варовлапрлварп варовлапрлварп варовлапрлварп",
    "userName": "варовлапрлварп",
    "createAt": "2024-01-20T03:21:03.442Z"
  },
  {
    "id": "d143cbf1-d377-4ab0-982b-99c7a76b3288",
    "cameraId": 1,
    "advantage": "dflhnldfhldjfh",
    "disadvantage": "dflhnldfhldjfh",
    "rating": 3,
    "review": "dflhnldfhldjfh dflhnldfhldjfh",
    "userName": "dflhnldfhldjfh",
    "createAt": "2024-01-20T04:39:38.132Z"
  },
  {
    "id": "4ad31c5c-591b-4829-889e-c9677ee22c6a",
    "cameraId": 1,
    "advantage": "Вот такой вот",
    "disadvantage": "Родителей не выбирают",
    "rating": 3,
    "review": "Но то, каким ты станешь - выбор только за тобой!",
    "userName": "Слава",
    "createAt": "2024-01-21T03:15:20.058Z"
  },
  {
    "id": "7038cb16-3edd-4494-9fd1-729352f9435d",
    "cameraId": 1,
    "advantage": "фывфывфывфы фывфывфывфы",
    "disadvantage": "фывфывфывфы фывфывфывфы",
    "rating": 5,
    "review": "м мфывфывфывфымфывфывфывфыфывфывфывфы",
    "userName": "фывфывфывфы",
    "createAt": "2024-01-21T03:16:33.216Z"
  },
  {
    "id": "5ca36203-e1c6-4a00-a923-e778cb550207",
    "cameraId": 1,
    "advantage": "asdasdasd asdasdasd",
    "disadvantage": "asdasdasd asdasdasd",
    "rating": 5,
    "review": " asdasdasd asdasdasd asdasdasd",
    "userName": "asdasdasd",
    "createAt": "2024-01-21T03:19:03.613Z"
  },
  {
    "id": "6634e5f5-e063-4c6a-9800-ed6b37771b3e",
    "cameraId": 1,
    "advantage": "asdasdasd asdasdasd",
    "disadvantage": "asdasdasd asdasdasd",
    "rating": 5,
    "review": "asdasdasd asdasdasd asdasdasdasdasdasd",
    "userName": "asdasdasd",
    "createAt": "2024-01-21T03:19:11.150Z"
  },
  {
    "id": "0c0f60fa-226d-49e7-b382-34598c32d9d6",
    "cameraId": 1,
    "advantage": "asdasdasd asdasdasd",
    "disadvantage": "asdasdasd asdasdasd",
    "rating": 4,
    "review": "asdasdasd asdasdasd asdasdasd ",
    "userName": "asdasdasd",
    "createAt": "2024-01-21T03:19:19.691Z"
  },
  {
    "id": "eed638e4-ef46-4ab2-95fd-29d9ae227e91",
    "cameraId": 1,
    "advantage": "asdasdasdasd",
    "disadvantage": "asdasdasdasd",
    "rating": 5,
    "review": "asdasdasdasd asdasdasdasd",
    "userName": "asdasdasdasd",
    "createAt": "2024-01-21T04:43:21.873Z"
  },
  {
    "id": "a65dd9fd-bdf1-445e-93d4-2e3c6ffcf49e",
    "cameraId": 1,
    "advantage": "asdasdasdasdasdasd",
    "disadvantage": "asdasdasdasdasdasd",
    "rating": 4,
    "review": "asdasdasdasdasdasdasdasdasdasdasdasdasdasdasd",
    "userName": "asdasd",
    "createAt": "2024-01-21T05:03:27.384Z"
  },
  {
    "id": "885adf83-be05-4b12-8bdb-79c31d0e43f2",
    "cameraId": 1,
    "advantage": "asdasdasdasd",
    "disadvantage": "asdasdasdasd",
    "rating": 5,
    "review": "asdasdasdasdasdasdasd",
    "userName": "DJDJDJDJDJDJDJD",
    "createAt": "2024-01-21T05:04:12.288Z"
  },
  {
    "id": "0d05fc45-cf27-490c-ab63-e09587357b51",
    "cameraId": 1,
    "advantage": "KKKKKKKKKKKK",
    "disadvantage": "KKKKKKKKKKKK",
    "rating": 5,
    "review": "KKKKKKKKKKKK KKKKKKKKKKKK KKKKKKKKKKKK KKKKKKKKKKKK",
    "userName": "KKKKKKKKKKKK",
    "createAt": "2024-01-21T05:06:01.084Z"
  },
  {
    "id": "bfb1032c-a458-4044-8905-1c64ef224049",
    "cameraId": 1,
    "advantage": "bbbbbbbbbbbbbbbbb",
    "disadvantage": "bbbbbbbbbbbbbbb",
    "rating": 5,
    "review": "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "userName": "bbbbbbbbbbbbbb",
    "createAt": "2024-01-21T05:06:17.985Z"
  },
  {
    "id": "93900c96-b223-49fc-a6a9-f71b113da109",
    "cameraId": 1,
    "advantage": "sdfsdfsdfsdfsdfsdfsdfsdf",
    "disadvantage": "sdfsdfsdfsdfsdfsdfsdfsdf",
    "rating": 5,
    "review": "sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf",
    "userName": "sdfsdfsdfsdf",
    "createAt": "2024-01-21T05:15:29.908Z"
  },
  {
    "id": "b097cbaf-b029-4c5c-89cb-38dec1c1c598",
    "cameraId": 1,
    "userName": "Кирилл",
    "advantage": "Легкая в плане веса, удобная в интерфейсе",
    "disadvantage": "Быстро садиться зарядка",
    "review": "Это моя первая камера. Я в восторге, нареканий нет",
    "rating": 5,
    "createAt": "2024-01-22T11:21:12.203Z"
  },
  {
    "id": "35e47a0b-f3d8-475a-8632-5eaac4b2aab3",
    "cameraId": 1,
    "userName": "Кирилл",
    "advantage": "Легкая в плане веса, удобная в интерфейсе",
    "disadvantage": "Быстро садиться зарядка",
    "review": "Это моя первая камера. Я в восторге, нареканий нет",
    "rating": 5,
    "createAt": "2024-01-22T15:29:15.227Z"
  },
  {
    "id": "aa5f80ca-a22e-4460-8a55-30dc3f3f9baa",
    "cameraId": 1,
    "userName": "Кирилл",
    "advantage": "Легкая в плане веса, удобная в интерфейсе",
    "disadvantage": "Быстро садиться зарядка",
    "review": "Это моя первая камера. Я в восторге, нареканий нет",
    "rating": 5,
    "createAt": "2024-01-22T15:32:04.252Z"
  },
  {
    "id": "399df4ff-ae6e-4898-86a8-e746ba51539a",
    "cameraId": 1,
    "userName": "Кирилл",
    "advantage": "Легкая в плане веса, удобная в интерфейсе",
    "disadvantage": "Быстро садиться зарядка",
    "review": "Это моя первая камера. Я в восторге, нареканий нет",
    "rating": 5,
    "createAt": "2024-01-22T15:32:09.336Z"
  },
  {
    "id": "3d9623e1-38e8-49c0-bdbd-4ef3fc1c8090",
    "cameraId": 1,
    "userName": "fdgdfsafg",
    "advantage": "dadfdgdadfdgdfadf",
    "disadvantage": "gdsfadfdgfbdadfv",
    "review": "fasfdgfadfdgfbgsdardfvc",
    "rating": 4,
    "createAt": "2024-01-23T08:01:56.149Z"
  },
  {
    "id": "18172cb8-b635-4eef-adc6-c9185145cc2b",
    "cameraId": 1,
    "userName": "sdfgsagdbfdf",
    "advantage": "gsfgfsdgfdsfg",
    "disadvantage": "dgfsdgfsdgdf",
    "review": "dgdfgdfdgfdf",
    "rating": 3,
    "createAt": "2024-01-23T08:02:08.773Z"
  },
  {
    "id": "11202968-9660-4729-bd03-3bf758f88f57",
    "cameraId": 1,
    "userName": "ывааааааааа",
    "advantage": "аывааааааааа",
    "disadvantage": "ыфавввввввввввв",
    "review": "ывааааааааааааааааааааа",
    "rating": 3,
    "createAt": "2024-01-23T09:32:06.300Z"
  },
  {
    "id": "5b46214a-52c0-4bec-9308-a8b5b0e44333",
    "cameraId": 1,
    "advantage": "Финальный текст формы",
    "disadvantage": "asdasdasdasdas ",
    "rating": 4,
    "review": "asdasdasdasdas  v",
    "userName": "Слава",
    "createAt": "2024-01-24T10:10:47.044Z"
  },
  {
    "id": "67670cfa-7e62-4a66-8814-c54a64585672",
    "cameraId": 1,
    "advantage": "asdasdasd asdasdasd",
    "disadvantage": "asdasdasd asdasdasd",
    "rating": 4,
    "review": "asdasdasd asdasdasd asdasdasd asdasdasd",
    "userName": "asdasdasd",
    "createAt": "2024-01-24T10:11:18.614Z"
  },
  {
    "id": "ee8fb682-8414-4f7b-89ae-5eb480d2a95b",
    "cameraId": 1,
    "advantage": "vvvvvvvvvvv",
    "disadvantage": "vvvvvvvvvvv",
    "rating": 5,
    "review": "vvvvvvvvvvvvvvvvvvvvvv vvvvvvvvvvv",
    "userName": "vvvvvvvvvvv",
    "createAt": "2024-01-24T13:54:27.087Z"
  },
  {
    "id": "fb96befa-2b69-4a8e-8389-d6991b7b5200",
    "cameraId": 1,
    "userName": "bbbbbbbbbbbb",
    "advantage": "adfsghjdfsghj",
    "disadvantage": "gdgfhjmfrdfgnmghfd",
    "review": "grdfghnrtewrdfghnf",
    "rating": 3,
    "createAt": "2024-01-26T07:37:42.713Z"
  },
  {
    "id": "6b80d42f-e837-49fd-ae9c-4d6ca3b15aa5",
    "cameraId": 1,
    "userName": "bbbbbbbbbbbb",
    "advantage": "fdsgfsfgfbdgs",
    "disadvantage": "afsdgbfsafvfdgs",
    "review": "335435rtegfdbgs",
    "rating": 3,
    "createAt": "2024-01-26T07:38:49.608Z"
  },
  {
    "id": "06b08fe9-3be5-4480-9d58-b673a1965bc2",
    "cameraId": 1,
    "userName": "sdfsdf",
    "advantage": "sdfsdfsdfsdfsdf",
    "disadvantage": "sdfsdffffffffffff",
    "review": "fffffffffffsssss",
    "rating": 2,
    "createAt": "2024-01-26T07:52:04.960Z"
  },
  {
    "id": "3c7a9ff3-ecef-4f55-b83a-23816d8ba934",
    "cameraId": 1,
    "userName": "sdfffffffff",
    "advantage": "weweweeeeeeeeeeeeee",
    "disadvantage": "weeeeeeeeeeeee",
    "review": "fdsgfhdggearfdgfhrgwaf",
    "rating": 3,
    "createAt": "2024-01-26T07:56:46.814Z"
  },
  {
    "id": "52321291-529f-4241-b486-55652bb21cca",
    "cameraId": 1,
    "userName": "Кирилл",
    "advantage": "Легкая в плане веса, удобная в интерфейсе",
    "disadvantage": "Быстро садиться зарядка",
    "review": "Это моя первая камера. Я в восторге, нареканий нет",
    "rating": 5,
    "createAt": "2024-01-26T10:00:15.182Z"
  },
  {
    "id": "3dfa1068-3339-4460-89b1-33ebfcf91784",
    "cameraId": 1,
    "advantage": "asdasdasd asdasdasd",
    "disadvantage": "asdasdasd asdasdasd",
    "rating": 5,
    "review": "asdasdasd asdasdasd",
    "userName": "asdasdasd",
    "createAt": "2024-01-26T11:28:51.939Z"
  },
  {
    "id": "0ebd6703-13c3-4042-8a40-cd92669eb772",
    "cameraId": 1,
    "advantage": "aaaaaaaaaaaaaa",
    "disadvantage": "aaaaaaaaaaaaaa",
    "rating": 4,
    "review": "aaaaaaaaaaaaaa",
    "userName": "aa",
    "createAt": "2024-01-26T11:32:05.690Z"
  },
  {
    "id": "5e82f960-5b94-409c-bd36-eff1253a8437",
    "cameraId": 1,
    "userName": "sdff",
    "advantage": "ffffsdfgsdfgdsf",
    "disadvantage": "sdfsdfsdfsdfsdf",
    "review": "sdfsdfsdfsdfsdf",
    "rating": 4,
    "createAt": "2024-01-26T18:29:55.095Z"
  },
  {
    "id": "37b70940-d5fa-47b2-ba58-2fd94dd82f08",
    "rating": 3,
    "userName": "Николай",
    "advantage": "Достоинства",
    "disadvantage": "Недостатки",
    "review": "Комментарий",
    "cameraId": 1,
    "createAt": "2024-01-27T15:50:33.197Z"
  },
  {
    "id": "817016f0-47cc-49af-8ec7-a061dc91ec5e",
    "rating": 4,
    "userName": "Александр",
    "advantage": "Достоинства",
    "disadvantage": "Недостатки",
    "review": "Комментарий комментарий комментарий",
    "cameraId": 1,
    "createAt": "2024-01-27T15:54:07.268Z"
  },
  {
    "id": "25e648ed-d0e4-474e-8058-0604a3a360ee",
    "cameraId": 1,
    "advantage": "примерпримерпримерпример",
    "disadvantage": "примерпримерпримерпример",
    "rating": 5,
    "review": "примерпримерпримерпример",
    "userName": "примерпример",
    "createAt": "2024-01-27T20:11:31.909Z"
  },
  {
    "id": "0b02c087-d4cf-4917-adc5-d18d1712d4f3",
    "rating": 4,
    "userName": "123213",
    "advantage": "123213123123",
    "disadvantage": "123123123123",
    "review": "фыффффффффффффффффффффф",
    "cameraId": 1,
    "createAt": "2024-01-29T13:44:42.815Z"
  },
  {
    "id": "b2431067-eaf8-432b-ac8d-f0baa04ede28",
    "cameraId": 1,
    "userName": "Диана",
    "advantage": "пвавввввввввввввввввв",
    "disadvantage": "ваааааааааа",
    "review": "ваввввввввввввввввввввввввввввв",
    "rating": 5,
    "createAt": "2024-01-30T14:32:41.899Z"
  },
  {
    "id": "4f756ac8-75e2-4b29-a509-2cb77674b063",
    "cameraId": 1,
    "userName": "gggggggggggggggggggg",
    "advantage": "gggggggggggggggggg",
    "disadvantage": "gggggggggggggggggg",
    "review": "gggggggggggggggggggggggg",
    "rating": 2,
    "createAt": "2024-01-30T14:34:07.049Z"
  },
  {
    "id": "de00ce36-6852-452a-bffe-5e063aef11e5",
    "cameraId": 1,
    "userName": "gggggggggggggggggggg",
    "advantage": "gggggggggggggggggg",
    "disadvantage": "gggggggggggggggggg",
    "review": "gggggggggggggggggggggggg",
    "rating": 2,
    "createAt": "2024-01-30T14:34:42.590Z"
  },
  {
    "id": "19d947ed-a9a7-44e7-b087-6562b8f480a5",
    "cameraId": 1,
    "userName": "gggggggggggggggggggg",
    "advantage": "gggggggggggggggggg",
    "disadvantage": "gggggggggggggggggg",
    "review": "gggggggggggggggggggggggg",
    "rating": 2,
    "createAt": "2024-01-30T14:34:52.370Z"
  },
  {
    "id": "6c5d6edf-e368-4ea8-931a-b6d903cb3d1c",
    "cameraId": 1,
    "userName": "gggggggggggggggggggg",
    "advantage": "gggggggggggggggggg",
    "disadvantage": "gggggggggggggggggg",
    "review": "gggggggggggggggggggggggg",
    "rating": 2,
    "createAt": "2024-01-30T14:34:56.032Z"
  },
  {
    "id": "99e7b05e-dd21-4a79-b3d4-df4b12145538",
    "cameraId": 1,
    "userName": "gggggggggggggggggggg",
    "advantage": "gggggggggggggggggg",
    "disadvantage": "gggggggggggggggggg",
    "review": "gggggggggggggggggggggggg",
    "rating": 2,
    "createAt": "2024-01-30T14:34:56.190Z"
  },
  {
    "id": "c64f796e-5a08-4993-ab49-450cbd42749e",
    "cameraId": 1,
    "userName": "gggggggggggggggggggg",
    "advantage": "gggggggggggggggggg",
    "disadvantage": "gggggggggggggggggg",
    "review": "gggggggggggggggggggggggg",
    "rating": 5,
    "createAt": "2024-01-30T14:35:01.888Z"
  },
  {
    "id": "87e35de2-24ec-4c43-be63-65bc142bf54a",
    "cameraId": 1,
    "userName": "gggggggggggggggggggg",
    "advantage": "gggggggggggggggggg",
    "disadvantage": "gggggggggggggggggg",
    "review": "gggggggggggggggggggggggg",
    "rating": 5,
    "createAt": "2024-01-30T14:35:01.990Z"
  },
  {
    "id": "ff69dc10-c395-4263-ba53-5998f32120e0",
    "cameraId": 1,
    "userName": "gggggggggggggggggggg",
    "advantage": "gggggggggggggggggg",
    "disadvantage": "gggggggggggggggggg",
    "review": "gggggggggggggggggggggggg",
    "rating": 5,
    "createAt": "2024-01-30T14:35:22.501Z"
  },
  {
    "id": "8298a0c0-2bff-4d62-bcb8-4b69e3f41e7e",
    "cameraId": 1,
    "userName": "gggggggggggggggggggg",
    "advantage": "gggggggggggggggggg",
    "disadvantage": "gggggggggggggggggg",
    "review": "gggggggggggggggggggggggg",
    "rating": 5,
    "createAt": "2024-01-30T14:35:24.889Z"
  },
  {
    "id": "f35247aa-8d42-4701-9223-d3075cf0fca8",
    "cameraId": 1,
    "userName": "gggggggggggggggggggg",
    "advantage": "gggggggggggggggggg",
    "disadvantage": "gggggggggggggggggg",
    "review": "gggggggggggggggggggggggg",
    "rating": 1,
    "createAt": "2024-01-30T14:35:26.954Z"
  },
  {
    "id": "e7ab172b-c719-4afd-9e20-73b6dc945b98",
    "cameraId": 1,
    "userName": "gggggggggggggggggggg",
    "advantage": "gggggggggggggggggg",
    "disadvantage": "gggggggggggggggggg",
    "review": "gggggggggggggggggggggggg",
    "rating": 4,
    "createAt": "2024-01-30T14:35:48.858Z"
  },
  {
    "id": "4af5aa21-d6e4-4e09-ae3e-5efd3edc75b9",
    "cameraId": 1,
    "userName": "gggggggggggggggggggg",
    "advantage": "gggggggggggggggggg",
    "disadvantage": "gggggggggggggggggg",
    "review": "gggggggggggggggggggggggg",
    "rating": 4,
    "createAt": "2024-01-30T14:35:48.992Z"
  },
  {
    "id": "4bbcbc6a-a7c5-4805-bed3-c9e2991ecd0f",
    "cameraId": 1,
    "advantage": "dsdaaaaaaaaaaaaa",
    "disadvantage": "fddsfgdfdhdgdf",
    "rating": 3,
    "review": "gdfgdfgdfgdfgdfgdf",
    "userName": "2124343",
    "createAt": "2024-01-30T14:43:31.892Z"
  },
  {
    "id": "9ebaf0c1-bce7-43f3-974e-8fa88e0172d5",
    "cameraId": 1,
    "advantage": "asdasdasdasd",
    "disadvantage": "asdasdasdasd",
    "rating": 3,
    "review": "asdasdas32",
    "userName": "dsadasdasdas",
    "createAt": "2024-01-30T14:54:25.125Z"
  }
]`;

const getRewiewsMock = JSON.parse(getRewiewsJSON) as TRewiew[];

export { getRewiewsMock };
