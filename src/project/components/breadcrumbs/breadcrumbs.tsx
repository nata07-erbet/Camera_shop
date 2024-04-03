import { TProduct } from '../../types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { PagesMap } from '../../const/const';

type BreadCrumbsProps = {
  isActiveMainPage?: boolean;
  isActiveBasketPage?: boolean;
  currentProduct?: TProduct | undefined;
}

function BreadCrumbs ({isActiveMainPage, isActiveBasketPage, currentProduct}: BreadCrumbsProps) {

  return (
    <div className="breadcrumbs" data-testid="breadcrumbs-list">
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={AppRoute.Main}>
              {PagesMap.Main}
              <svg width={5} height={8} aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini" />
              </svg>
            </Link>
          </li>
          <li className="breadcrumbs__item">
            {!isActiveMainPage ? (
              <Link className= "breadcrumbs__link" to={AppRoute.Main}>
                {PagesMap.Catalog}
                <svg width={5} height={8} aria-hidden="true">
                  <use xlinkHref="#icon-arrow-mini" />
                </svg>
              </Link>
            ) : (
              <span className="breadcrumbs__link breadcrumbs__link--active">
                {PagesMap.Catalog}
              </span>
            )}
          </li>
          {currentProduct && (
            <li className="breadcrumbs__item">
              <span className="breadcrumbs__link breadcrumbs__link--active">
                {currentProduct.name}
              </span>
            </li>
          )}
          {isActiveBasketPage && !isActiveMainPage && (
            <li className="breadcrumbs__item">
              <span className="breadcrumbs__link breadcrumbs__link--active">
                {PagesMap.Basket}
              </span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export { BreadCrumbs };
