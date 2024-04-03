import { AppRoute } from '../../const/const';
import { useNavigate } from 'react-router-dom';
import { PopUpMain, PopUpMainProps } from './popup-main';


function PopupRewiewSuccess ({...props}: PopUpMainProps) {
  const navigation = useNavigate();

  const handleButtonClick = () => {
    navigation(AppRoute.Main);
  };

  return (

    <PopUpMain {...props}>
      <p className="title title--h4">Спасибо за отзыв</p>
      <svg className="modal__icon" width={80} height={78} aria-hidden="true">
        <use xlinkHref="#icon-review-success" />
      </svg>
      <div className="modal__buttons">
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
          onClick={handleButtonClick}
        >
            Вернуться к покупкам
        </button>
      </div>
    </PopUpMain>

  );
}

export { PopupRewiewSuccess };
