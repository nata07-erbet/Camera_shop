import classNames from 'classnames';
import { PropsWithChildren, useCallback, useEffect } from 'react';

type PopupProps = PropsWithChildren<{
  opened?: boolean;
  narrow?: boolean;
  onClose?: () => void;
}>;

function Popup({ opened, narrow, onClose, children }: PopupProps) {

  const handleButtonCloseClick = () => {
    onClose?.();
  };

  const handleOverlayClick = () => {
    onClose?.();
  };

  const handleEscapeKeydown = useCallback((evt: KeyboardEvent) => {
    if(evt.key === 'Escape') {
      onClose?.();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKeydown);

    return () => document.removeEventListener('keydown', handleEscapeKeydown);
  }, [handleEscapeKeydown]);

  useEffect(() => {
    if(opened) {
      document.body.style.position = 'fixed';
    } else {
      document.body.style.position = '';
    }
  }, [opened]);

  return(
    <div className={classNames('modal', { 'modal--narrow': narrow, 'is-active': opened })}>
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

export type { PopupProps };
export { Popup };
