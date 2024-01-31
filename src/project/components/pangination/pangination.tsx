import { useState } from 'react';
import { Link} from 'react-router-dom';
import classNames from 'classnames';

import { PanginationStep } from '../../const/const';

function Pangination () {
  const INITAL_STEP = 1;

  const [isStepActive, setIsStepActive] = useState(INITAL_STEP);
  return(
    <div className="pagination">
      <ul className="pagination__list">
        {Object.values(PanginationStep)
          .map((step) => (
            <li className="pagination__item" key={step}>
              <Link
                className= {classNames(
                  'pagination__link',
                  {
                    'pagination__link--active': step === isStepActive,
                  }
                )}
                to="#"
                onClick ={() =>setIsStepActive((prevState) => (prevState + 1))}
              >
                {step}
              </Link>
            </li>
          ))}

        <li className="pagination__item">
          <Link
            className="pagination__link pagination__link--text"
            to="#"
          >
          Далее
          </Link>
        </li>
      </ul>
    </div>
  );
}

export { Pangination };
