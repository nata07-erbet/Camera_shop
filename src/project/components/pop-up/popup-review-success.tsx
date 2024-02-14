import { AppRoute } from '../../const/const';
import { useNavigate } from 'react-router-dom';
import { Popup, PopupProps } from './pop-up';

function PopupReviewSuccess ({...props }: PopupProps) {
  const navigation = useNavigate();

  const handleClickButton = () => {
    navigation(AppRoute.Main);
  };

  return (
    <Popup {...props}>
      <p className="title title--h4">Спасибо за отзыв</p>
      <svg className="modal__icon" width={80} height={78} aria-hidden="true">
        <use xlinkHref="#icon-review-success" />
      </svg>
      <div className="modal__buttons">
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
          onClick={handleClickButton}
        >
          Вернуться к покупкам
        </button>
      </div>
    </Popup>
  );
}

export { PopupReviewSuccess };
