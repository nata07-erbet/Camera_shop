import { useNavigate } from 'react-router';
import { PopUp, PopUpProps } from './pop-up';
import { AppRoute } from '../../const/const';

function PopupThanksForProductBuy ({...props}: PopUpProps) {
  const navigate = useNavigate();

  const handleclickButton = () => {
    navigate(AppRoute.Main);
  };

  return (
    <PopUp { ...props}>
      <p className="title title--h4">Спасибо за покупку</p>
      <svg className="modal__icon" width={80} height={78} aria-hidden="true">
        <use xlinkHref="#icon-review-success" />
      </svg>
      <div className="modal__buttons">
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
          onClick={handleclickButton}
        >
          Вернуться к покупкам
        </button>
      </div>
    </PopUp>


  );
}

export { PopupThanksForProductBuy };
