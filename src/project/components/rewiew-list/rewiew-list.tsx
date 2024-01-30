import { TGetRewiew } from '../../types/index';
import { FormattedDate } from '../../utils/utils';

type RewiewListProps ={
  rewiews: TGetRewiew[];
}

function RewiewList ({rewiews}: RewiewListProps) {

  return (
    <ul className="review-block__list">
      {rewiews.map((rewiew) => (
        <li className="review-card" key={rewiew.id}>
          <div className="review-card__head">
            <p className="title title--h4">{rewiew.userName}</p>
            <time className="review-card__data" dateTime={rewiew.createAt}>
              {/* dateFormatter - разобраться */}
              {FormattedDate(rewiew.createAt)}
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
      ))}
    </ul>
  );
}

export { RewiewList };
