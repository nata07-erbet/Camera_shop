function Pangination () {
  return(
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          <a
            className="pagination__link pagination__link--active"

          >
          1
          </a>
        </li>
        <li className="pagination__item">
          <a className="pagination__link">
          2
          </a>
        </li>
        <li className="pagination__item">
          <a className="pagination__link">
          3
          </a>
        </li>
        <li className="pagination__item">
          <a
            className="pagination__link pagination__link--text"
          >
          Далее
          </a>
        </li>
      </ul>
    </div>
  );
}

export { Pangination };
