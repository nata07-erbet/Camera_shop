import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { DEFAULT_NULL } from '../../const/const';

function BasketButton () {

  const countProducts = 0;
  return (
    <Link className="header__basket-link" to={AppRoute.Basket}>
      <svg width={16} height={16} aria-hidden="true" data-testid='button-basket'>
        <use xlinkHref="#icon-basket"></use>
        <span className="header__basket-count">{countProducts}</span>
      </svg>
    </Link>
  );
}

export { BasketButton };
