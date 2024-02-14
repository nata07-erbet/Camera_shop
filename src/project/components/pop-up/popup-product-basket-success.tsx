import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { useNavigate } from 'react-router-dom';
import { PopUp, PopUpProps } from './pop-up';

type PopupBasketSuccessProps = PopUpProps;

function PopupBasketSuccess ({...props}: PopupBasketSuccessProps) {
  const navigation = useNavigate();

  const handleClickButton = () => {
    navigation(AppRoute.Basket);
  };

  return (
    <PopUp {...props}>
      <p className="title title--h4">Товар успешно добавлен в корзину</p>
      <svg className="modal__icon" width={86} height={80} aria-hidden="true">
        <use xlinkHref="#icon-success" />
      </svg>
      <div className="modal__buttons">
        <Link className="btn btn--transparent modal__btn" to={AppRoute.Main} autoFocus>
              Продолжить покупки
        </Link>
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          onClick={handleClickButton}
        >
              Перейти в корзину
        </button>
      </div>
    </PopUp>
  );
}

export { PopupBasketSuccess };
