import { MouseEvent } from 'react';

type UpBtnProps ={
  onScrollTop : () => void;
}

function UpBtn({onScrollTop}: UpBtnProps) {

  const handleScrollTop = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    onScrollTop();
  };

  return (
    <a
      className="up-btn"
      href="#header"
      onClick={handleScrollTop}
    >
      <svg width={12} height={18} aria-hidden="true">
        <use xlinkHref="#icon-arrow2" />
      </svg>
    </a>
  );
}

export { UpBtn };
