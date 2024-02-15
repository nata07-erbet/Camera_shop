import { useState } from 'react';
import { Link, generatePath} from 'react-router-dom';
import classNames from 'classnames';
import { PanginationStep, PanginationsMap, PanginationButton, AppRoute} from '../../const/const';


type TPag = typeof PanginationsMap[keyof typeof PanginationsMap];

const PAG:TPag[] = [PanginationButton.Prev, PanginationButton.Next];

function PanginationComponent () {
  const INITAL_STEP = 1;
  const [isStepActive, setIsStepActive] = useState(INITAL_STEP);

  const [currentPag, setCurrentPag] = useState('');

  const handleStepChange = (step: number) => {
    setIsStepActive(step + 1);
  };

  return(
    <div className="pagination">
      <ul className="pagination__list">
        {PAG.map((pag) => (
          <li className={
            classNames('pagination__item', {'is-active': pag === currentPag})
          }
          key={pag}
          >
            <Link
              className="pagination__link pagination__link--text"
              to="#"
            >
              {PanginationsMap[pag]}
            </Link>
          </li>))}
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
                to={generatePath(AppRoute.Main, {page: step.toString()})}
                onClick ={() =>handleStepChange(step)}
              >
                {step}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export { PanginationComponent };
