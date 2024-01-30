import { TGetRewiew } from '../../types';
import { RewiewList } from '../rewiew-list/rewiew-list';

type RewiewsProps ={
  rewiews: TGetRewiew[];
}

function Rewiews ({rewiews}: RewiewsProps) {
  return (
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
          <button className="btn" type="button">
            Оставить свой отзыв
          </button>
        </div>
        <RewiewList rewiews={rewiews}/>
        <div className="review-block__buttons">
          <button className="btn btn--purple" type="button">
                Показать больше отзывов
          </button>
        </div>
      </div>
    </section>
  );
}

export { Rewiews };
