import { Link, NavLink } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { Logo } from '../logo/logo';

function Header () {
  return (
    <header className="header" id="header">
      <div className="container">
        <Logo />
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <NavLink className="main-nav__link" to={AppRoute.Main}>
                  Каталог
              </NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink className="main-nav__link" to="#">
                  Гарантии
              </NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink className="main-nav__link" to="#">
                  Доставка
              </NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink className="main-nav__link" to="#">
                  О компании
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="form-search">
         //
        </div>
        <Link className="header__basket-link" to={AppRoute.Basket}>
          <svg width={16} height={16} aria-hidden="true">
            <use xlinkHref="#icon-basket" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
export { Header };
