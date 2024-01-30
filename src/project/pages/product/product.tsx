import { Header} from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { UpBtn } from '../../components/up-btn/up-btn';
import { BreadCrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { SimilarList } from '../../components/similar-list/similar-list';
import { TProducts } from '../../types/index';
import classNames from 'classnames';
import { useState } from 'react';

// import { useParams } from 'react-router';
// import { number } from 'prop-types';

type ProductProps = {
  products: TProducts;
}


function Product ({products}: ProductProps) {
  const isRetina = true;
  const [isActive, setIsActive] = useState(true);

  const tabClassAct = classNames(
    'tabs__element',
    {
      'is-active': isActive,
      disabled: !isActive
    },
  );

  const tabClassNoAct = classNames(
    'tabs__element',
    {
      'is-active': !isActive,
      disabled: !isActive
    },
  );

  // const param = useParams();
  // const id = Number(param);
  //для проверки корректности отбражения данных
  const id = 13;
  const currentProduct = products.find((el) => el.id === id);

  //потом будет спиннер
  if(!currentProduct) {
    return null;
  }

  const { name, previewImgWebp, previewImgWebp2x, previewImg, previewImg2x, price} = currentProduct;

  const similarProds = [];
  //для проверки корректности отбражения данных
  for (const product of products) {
    const similar = products.find((el)=> el.category === product.category);
    similarProds.push(similar);
  }

  return (
    <>
      <Header />
      <main>
        <div className="page-content">
          <BreadCrumbs />
          <div className="page-content__section">
            <section className="product">
              <div className="container">
                <div className="product__img">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={ isRetina ? previewImgWebp : previewImgWebp2x }
                    />
                    <img
                      src={previewImg}
                      srcSet={previewImg2x}
                      width={560}
                      height={480}
                      alt={name}
                    />
                  </picture>
                </div>
                <div className="product__content">
                  <h1 className="title title--h3">{name}</h1>
                  {/* Rating */}
                  <div className="rate product__rate">
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <p className="visually-hidden">Рейтинг: 4</p>
                    <p className="rate__count">
                      <span className="visually-hidden">Всего оценок:</span>12
                    </p>
                  </div>

                  <p className="product__price">
                    <span className="visually-hidden">Цена:</span>{price} &#8381;
                  </p>
                  <button className="btn btn--purple" type="button">
                    <svg width={24} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-add-basket" />
                    </svg>
                Добавить в корзину
                  </button>
                  <div className="tabs product__tabs">
                    <div className="tabs__controls product__tabs-controls">
                      <button
                        className={classNames(
                          'tabs__control',
                          {'is-active': !isActive}
                        )}
                        type="button"
                        onClick={() => setIsActive(true)} // хз не меняет состояние
                      >
                        Характеристики
                      </button>

                      <button
                        className={classNames(
                          'tabs__control',
                          {'is-active': isActive}
                        )}
                        type="button"
                        onClick={() => setIsActive(false)} // хз не меняет состояние
                      >
                    Описание
                      </button>
                    </div>

                    <div className="tabs__content">
                      <div className={tabClassNoAct}>
                        <ul className="product__tabs-list">
                          <li className="item-list">
                            <span className="item-list__title">Артикул:</span>
                            <p className="item-list__text"> DA4IU67AD5</p>
                          </li>
                          <li className="item-list">
                            <span className="item-list__title">Категория:</span>
                            <p className="item-list__text">Видеокамера</p>
                          </li>
                          <li className="item-list">
                            <span className="item-list__title">Тип камеры:</span>
                            <p className="item-list__text">Коллекционная</p>
                          </li>
                          <li className="item-list">
                            <span className="item-list__title">Уровень:</span>
                            <p className="item-list__text">Любительский</p>
                          </li>
                        </ul>
                      </div>
                      <div className={tabClassAct}>
                        <div className="product__tabs-text">
                          <p>
                        Немецкий концерн BRW разработал видеокамеру Das Auge IV
                        в&nbsp;начале 80-х годов, однако она до&nbsp;сих пор
                        пользуется популярностью среди коллекционеров
                        и&nbsp;яростных почитателей старинной техники.
                          </p>
                          <p>
                        Вы&nbsp;тоже можете прикоснуться к&nbsp;волшебству
                        аналоговой съёмки, заказав этот чудо-аппарат. Кто знает,
                        может с&nbsp;Das Auge IV&nbsp;начнётся ваш путь
                        к&nbsp;наградам всех престижных кинофестивалей.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="page-content__section">
            <SimilarList similarProds={similarProds} />
          </div>
          <div className="page-content__section">
            <section className="review-block">
              <div className="container">
                <div className="page-content__headed">
                  <h2 className="title title--h3">Отзывы</h2>
                  <button className="btn" type="button">
                    Оставить свой отзыв
                  </button>
                </div>
                <ul className="review-block__list">
                  <li className="review-card">
                    <div className="review-card__head">
                      <p className="title title--h4">Сергей Горский</p>
                      <time className="review-card__data" dateTime="2022-04-13">
                    13 апреля
                      </time>
                    </div>
                    <div className="rate review-card__rate">
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-full-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-full-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-full-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-full-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-full-star" />
                      </svg>
                      <p className="visually-hidden">Оценка: 5</p>
                    </div>
                    <ul className="review-card__list">
                      <li className="item-list">
                        <span className="item-list__title">Достоинства:</span>
                        <p className="item-list__text">
                      Надёжная, хорошо лежит в руке, необычно выглядит
                        </p>
                      </li>
                      <li className="item-list">
                        <span className="item-list__title">Недостатки:</span>
                        <p className="item-list__text">
                      Тяжеловата, сложно найти плёнку
                        </p>
                      </li>
                      <li className="item-list">
                        <span className="item-list__title">Комментарий:</span>
                        <p className="item-list__text">
                      Раз в полгода достаю из-под стекла, стираю пыль, заряжаю —
                      работает как часы. Ни у кого из знакомых такой нет, все
                      завидуют) Теперь это жемчужина моей коллекции, однозначно
                      стоит своих денег!
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li className="review-card">
                    <div className="review-card__head">
                      <p className="title title--h4">Пётр Матросов</p>
                      <time className="review-card__data" dateTime="2022-03-02">
                    2 марта
                      </time>
                    </div>
                    <div className="rate review-card__rate">
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-full-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-star" />
                      </svg>
                      <p className="visually-hidden">Оценка: 1</p>
                    </div>
                    <ul className="review-card__list">
                      <li className="item-list">
                        <span className="item-list__title">Достоинства:</span>
                        <p className="item-list__text">Хорошее пресс-папье</p>
                      </li>
                      <li className="item-list">
                        <span className="item-list__title">Недостатки:</span>
                        <p className="item-list__text">
                      Через 3 дня развалилась на куски
                        </p>
                      </li>
                      <li className="item-list">
                        <span className="item-list__title">Комментарий:</span>
                        <p className="item-list__text">
                      При попытке вставить плёнку сломался механизм открытия
                      отсека, пришлось заклеить его изолентой. Начал настраивать
                      фокус&nbsp;— линза провалилась внутрь корпуса. Пока доставал
                      — отломилось несколько лепестков диафрагмы. От злости
                      стукнул камеру об стол, и рукоятка треснула пополам. Склеил
                      всё суперклеем, теперь прижимаю ей бумагу. НЕ РЕКОМЕНДУЮ!!!
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li className="review-card">
                    <div className="review-card__head">
                      <p className="title title--h4">Татьяна Кузнецова </p>
                      <time className="review-card__data" dateTime="2021-12-30">
                    30 декабря
                      </time>
                    </div>
                    <div className="rate review-card__rate">
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-full-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-full-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-full-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-full-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-star" />
                      </svg>
                      <p className="visually-hidden">Оценка: 4</p>
                    </div>
                    <ul className="review-card__list">
                      <li className="item-list">
                        <span className="item-list__title">Достоинства:</span>
                        <p className="item-list__text">Редкая</p>
                      </li>
                      <li className="item-list">
                        <span className="item-list__title">Недостатки:</span>
                        <p className="item-list__text">Высокая цена</p>
                      </li>
                      <li className="item-list">
                        <span className="item-list__title">Комментарий:</span>
                        <p className="item-list__text">
                      Дорого для портативной видеокамеры, но в моей коллекции как
                      раз не хватало такого экземпляра. Следов использования нет,
                      доставили в заводской упаковке, выглядит шикарно!
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="review-block__buttons">
                  <button className="btn btn--purple" type="button">
                Показать больше отзывов
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <UpBtn />
      <Footer />
    </>
  );
}

export { Product };
