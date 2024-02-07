import { TGetRewiew } from '../../types/index';
import { FormattedDate } from '../../utils/utils';
import { Rating } from '../rating/rating';

type RewiewListProps ={
  rewiews: TGetRewiew[];
  rewiewCount: number;
}

const compare = (a: TGetRewiew, b: TGetRewiew) => {
  const dateA = new Date(a.createAt);
  const dateB = new Date(b.createAt);

  return (dateA - dateB);
};


function RewiewList ({rewiews, rewiewCount}: RewiewListProps) {

  return (
    <ul className="review-block__list">
      {rewiews
        .sort(compare)
        .reverse()
        .slice(0, rewiewCount)
        .map((rewiew) => (
          <li className="review-card" key={rewiew.id}>
            <div className="review-card__head">
              <p className="title title--h4">{rewiew.userName}</p>
              <time className="review-card__data" dateTime={rewiew.createAt}>
                {FormattedDate(rewiew.createAt)}
              </time>
            </div>
            <Rating rating={rewiew.rating}/>
            <ul className="review-card__list">
              <li className="item-list">
                <span className="item-list__title">Достоинства:</span>
                <p className="item-list__text">
                  {rewiew.advantage}
                </p>
              </li>
              <li className="item-list">
                <span className="item-list__title">Недостатки:</span>
                <p className="item-list__text">
                  {rewiew.disadvantage}
                </p>
              </li>
              <li className="item-list">
                <span className="item-list__title">Комментарий:</span>
                <p className="item-list__text">
                  {rewiew.review}
                </p>
              </li>
            </ul>
          </li>
        ))}
    </ul>
  );
}

export { RewiewList };
