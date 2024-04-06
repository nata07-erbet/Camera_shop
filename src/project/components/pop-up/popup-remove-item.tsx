import { PopUpMain } from '../pop-up/popup-main';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';

type PopupRemoveProps = {
  onClickDeleteFromBasket: () => void;
};

function PopupRemove ({onClickDeleteFromBasket, ...props}: PopupRemoveProps) {

  const handleClickDeleteFromBasket = () => {
    onClickDeleteFromBasket();
  };

  return (
    <PopUpMain {...props}>
      <p className="title title--h4">Удалить этот товар?</p>
      <div className="basket-item basket-item--short">
        <div className="basket-item__img">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/orlenok.webp, img/content/orlenok@2x.webp 2x"
            />
            <img
              src="img/content/orlenok.jpg"
              srcSet="img/content/orlenok@2x.jpg 2x"
              width={140}
              height={120}
              alt="Фотоаппарат «Орлёнок»"
            />
          </picture>
        </div>
        <div className="basket-item__description">
          <p className="basket-item__title">Орлёнок</p>
          <ul className="basket-item__list">
            <li className="basket-item__list-item">
              <span className="basket-item__article">Артикул:</span>{' '}
              <span className="basket-item__number">O78DFGSD832</span>
            </li>
            <li className="basket-item__list-item">Плёночная фотокамера</li>
            <li className="basket-item__list-item">Любительский уровень</li>
          </ul>
        </div>
      </div>
      <div className="modal__buttons">
        <button
          className="btn btn--purple modal__btn modal__btn--half-width"
          type="button"
          onClick={handleClickDeleteFromBasket}
        >
          Удалить
        </button>
        <Link
          className="btn btn--transparent modal__btn modal__btn--half-width"
          to={AppRoute.Main}
        >
          Продолжить покупки
        </Link>
      </div>
      <button className="cross-btn" type="button" aria-label="Закрыть попап">
        <svg width={10} height={10} aria-hidden="true">
          <use xlinkHref="#icon-close" />
        </svg>
      </button>
    </PopUpMain>
  );
}

export { PopupRemove };
