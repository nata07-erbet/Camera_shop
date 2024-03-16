import classNames from 'classnames';
import { PropsWithChildren, useCallback, useEffect } from 'react';
import FocusLock from 'react-focus-lock';
import './popup-main.css';

type PopUpMainProps = PropsWithChildren<{
  onClose?: () => void;
  opened?: boolean;
  narrow?: boolean;
}>

function PopUpMain({ children, onClose, opened, narrow }: PopUpMainProps) {

  const handleOverlayClick = () => {
    onClose?.();
  };

  const handleButtonCloseClick = () => {
    onClose?.();
  };


  const handleEscapeKeyDown = useCallback(
    (evt: KeyboardEvent) => {
      if(evt.key === 'Escape') {
        onClose?.();
      }
    },[onClose]);

  useEffect(() =>{
    document.addEventListener('keydown', handleEscapeKeyDown);

    return () => document.removeEventListener('keydown', handleEscapeKeyDown);
  }, [handleEscapeKeyDown]);

  useEffect(() => {
    let isMounted = true;

    if(isMounted && opened) {
      document.body.classList.add('scroll-lock');
    }

    return () => {
      document.body.classList.remove('scroll-lock');
      isMounted = false;
    };
  }, [opened]);

  return (
    <FocusLock>
      <div
        className={classNames('modal',
          {'is-active': opened,
            'modal-narrow': narrow
          })}
        data-testid= 'modal-window'
      >
        <div className="modal__wrapper">
          <div
            className="modal__overlay"
            onClick={handleOverlayClick}
          >
          </div>
          <div className="modal__content">
            {children}
            <button className="cross-btn"
              type="button"
              aria-label="Закрыть попап"
              onClick={handleButtonCloseClick}
            >
              <svg width={10} height={10} aria-hidden="true">
                <use xlinkHref="#icon-close" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </FocusLock>
  );
}

export type { PopUpMainProps};
export { PopUpMain };
