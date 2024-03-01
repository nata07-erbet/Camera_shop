import { useNavigate } from 'react-router';
import { PopUpMain, PopUpMainProps } from './popup-main';
import { AppRoute } from '../../const/const';

function PopupThanksForProductBuy ({...props}: PopUpMainProps) {
  const navigate = useNavigate();

  const handleclickButton = () => {
    navigate(AppRoute.Main);
  };

  return (
    <PopUpMain { ...props}>
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
    </PopUpMain>


  );
}

export { PopupThanksForProductBuy };
