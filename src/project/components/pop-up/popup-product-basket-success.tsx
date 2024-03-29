import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { useNavigate } from 'react-router-dom';
import { PopUpMain, PopUpMainProps } from './popup-main';

type PopupBasketSuccessProps = PopUpMainProps & {
  onClickButtonClose: () => void;
};

function PopupBasketSuccess ({ onClickButtonClose, ...props }: PopupBasketSuccessProps) {
  const navigation = useNavigate();

  const handleClickButton = () => {
    navigation(AppRoute.Basket);
  };

  const handleClickButtonClose = () => {
    onClickButtonClose();
  };

  return (
    <PopUpMain {...props}>
      <p className="title title--h4">Товар успешно добавлен в корзину</p>
      <svg className="modal__icon" width={86} height={80} aria-hidden="true">
        <use xlinkHref="#icon-success" />
      </svg>
      <div className="modal__buttons">
        <Link className="btn btn--transparent modal__btn"
          to={AppRoute.Main}
          autoFocus
          onClick={handleClickButtonClose}
          >
              Продолжить покупки
        </Link>
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          onClick={handleClickButton}
        >
              Перейти в корзину
        </button>
      </div>
    </PopUpMain>
  );
}

export { PopupBasketSuccess };
