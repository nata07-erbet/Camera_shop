function BreadCrumbs () {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link" href="index.html">
        Главная
              <svg width={5} height={8} aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini" />
              </svg>
            </a>
          </li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link" href="catalog.html">
        Каталог
              <svg width={5} height={8} aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini" />
              </svg>
            </a>
          </li>
          <li className="breadcrumbs__item">
            <span className="breadcrumbs__link breadcrumbs__link--active">
        Ретрокамера Das Auge IV
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { BreadCrumbs };
