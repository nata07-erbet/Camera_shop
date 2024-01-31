import { Link, NavLink } from 'react-router-dom';
import { AppRoute } from '../../const/const';

function Footer () {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__info">
          <Link
            className="footer__logo"
            to={AppRoute.Main}
            aria-label="Переход на главную"
          >
            <svg width={100} height={36} aria-hidden="true">
              <use xlinkHref="#icon-logo-mono" />
            </svg>
          </Link>
          <p className="footer__description">
              Интернет-магазин фото- и видеотехники
          </p>
          <ul className="social">
            <li className="social__item">
              <Link
                className="link"
                to="#"
                aria-label="Переход на страницу вконтатке"
              >
                <svg width={20} height={20} aria-hidden="true">
                  <use xlinkHref="#icon-vk" />
                </svg>
              </Link>
            </li>
            <li className="social__item">
              <Link
                className="link"
                to="#"
                aria-label="Переход на страницу pinterest"
              >
                <svg width={20} height={20} aria-hidden="true">
                  <use xlinkHref="#icon-pinterest" />
                </svg>
              </Link>
            </li>
            <li className="social__item">
              <Link
                className="link"
                to="#"
                aria-label="Переход на страницу reddit"
              >
                <svg width={20} height={20} aria-hidden="true">
                  <use xlinkHref="#icon-reddit" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
        <ul className="footer__nav">
          <li className="footer__nav-item">
            <p className="footer__title">Навигация</p>
            <ul className="footer__list">
              <li className="footer__item">
                <NavLink className="link" to={AppRoute.Main}>
                    Каталог
                </NavLink>
              </li>
              <li className="footer__item">
                <NavLink className="link" to="#">
                    Гарантии
                </NavLink>
              </li>
              <li className="footer__item">
                <NavLink className="link" to="#">
                    Доставка
                </NavLink>
              </li>
              <li className="footer__item">
                <NavLink className="link" to="#">
                    О компании
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="footer__nav-item">
            <p className="footer__title">Ресурсы</p>
            <ul className="footer__list">
              <li className="footer__item">
                <NavLink className="link" to="#">
                    Курсы операторов
                </NavLink>
              </li>
              <li className="footer__item">
                <a className="link" href="#">
                    Блог
                </a>
              </li>
              <li className="footer__item">
                <NavLink className="link" to="#">
                    Сообщество
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="footer__nav-item">
            <p className="footer__title">Поддержка</p>
            <ul className="footer__list">
              <li className="footer__item">
                <NavLink className="link" to="#">
                    FAQ
                </NavLink>
              </li>
              <li className="footer__item">
                <NavLink className="link" to="#">
                    Задать вопрос
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export { Footer };
