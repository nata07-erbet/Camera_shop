import { useState } from 'react';
import { Link} from 'react-router-dom';
import classNames from 'classnames';
import { PanginationButton, PanginationStep } from '../../const/const';

type PanginationProps = {
  onPrevPageClick: () => void;
  onNextPageClick: () => void;
  disable: {
    left: boolean;
    right: boolean;
  };
};

// другая версия
function Pangination ({onPrevPageClick, onNextPageClick, disable }: PanginationProps) {
  const INITAL_STEP = 1;
  const [isStepActive, setIsStepActive] = useState(INITAL_STEP);

  const handleStepChange = (step: number) => {
    setIsStepActive(step + 1);
  };

  const handlePrevPageClick = () => {
    onPrevPageClick();
  };

  const handleNextPageClick = () => {
    onNextPageClick();
  };

  return(
    <div className="pagination">
      <ul className="pagination__list">
        <li
          className={classNames('pagination__item',
            {
              'visually-hidden': disable.left
            }
          )}
        >
          <Link
            className="pagination__link pagination__link--text"
            onClick={handlePrevPageClick}
            to="#"
          >
            {PanginationButton.Prev}
          </Link>
        </li>
        {Object.values(PanginationStep)
          .map((step) => (
            <li
              className="pagination__item"
              key={step}
            >
              <Link
                className= {classNames(
                  'pagination__link',
                  {
                    'pagination__link--active': step === isStepActive,
                  }
                )}
                to="#"
                onClick ={() =>handleStepChange(step)}
              >
                {step}
              </Link>
            </li>
          ))}

        <li
          className={classNames('pagination__item',
            {
              'visually-hidden': disable.left
            }
          )}
        >
          <Link
            className="pagination__link pagination__link--text"
            to="#"
            onClick={handleNextPageClick}
          >
            {PanginationButton.Next}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export { Pangination };
