import { useState } from 'react';

import { TGetRewiew } from '../../types';
import { RewiewList } from '../rewiew-list/rewiew-list';
import { REWIEWS_COUNT } from '../../const/const';

type RewiewsProps ={
  rewiews: TGetRewiew[];
}

function Rewiews ({rewiews}: RewiewsProps) {
  const [ rewiewCount, setRewiewCount ] = useState(3);

  const handleButtonClick = () => {
    setRewiewCount((prevState) => prevState + REWIEWS_COUNT);
  };

  return (
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
          <button className="btn" type="button">
            Оставить свой отзыв
          </button>
        </div>
        <RewiewList rewiews={rewiews} rewiewCount={rewiewCount}/>
        <div className="review-block__buttons">
          {(rewiewCount !== rewiews.length) ? (
            <button
              className="btn btn--purple"
              type="button"
              onClick={handleButtonClick}
            >
            Показать больше отзывов
            </button>
          ) : '' }

        </div>
      </div>
    </section>
  );
}

export { Rewiews };
