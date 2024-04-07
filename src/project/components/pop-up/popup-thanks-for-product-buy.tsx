import { useNavigate } from 'react-router';
import { PopUpMain } from './popup-main';
import { AppRoute } from '../../const/const';

type PopupThanksForProductBuyProps = {
  sendingStatus: boolean;
};

function PopupThanksForProductBuy ({ sendingStatus, ...props}: PopupThanksForProductBuyProps) {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate(AppRoute.Main);
  };

  return (
    <PopUpMain { ...props}>
      {sendingStatus ? (
        <>
          <p className="title title--h4">Спасибо за покупку</p>
          <svg className="modal__icon" width={80} height={78} aria-hidden="true">
            <use xlinkHref="#icon-review-success" />
          </svg>
        </>
      ) : (
        <p className="title title--h4 is-invalid">НЕСпасибо за покупку</p>
      )}

      <div className="modal__buttons">
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
          onClick={handleClickButton}
        >
          Вернуться к покупкам
        </button>
      </div>
    </PopUpMain>


  );
}

export { PopupThanksForProductBuy };
