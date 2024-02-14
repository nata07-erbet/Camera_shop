import classNames from 'classnames';
import { PropsWithChildren, useCallback, useEffect } from 'react';

type PopUpProps = PropsWithChildren<{
  onClose: () => void;
  opened: boolean;
  narrow: boolean;
}>

function PopUp({ children, onClose, opened, narrow }: PopUpProps) {

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

  return (
    <div
      className={classNames('modal',
        {'is-active': opened,
          'modal-narrow': narrow
        })}
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

  );
}

export type { PopUpProps};
export { PopUp };
