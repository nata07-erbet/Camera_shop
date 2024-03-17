import { TProduct } from '../../types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { useState } from 'react';

type SearchComponentProps = {
  product: TProduct;
  productId: TProduct['id'];
}
function SearchComponent ({ product, productId }: SearchComponentProps) {
  const [ isInFocus, setIsInFocus ] = useState(false);

  const handleOnFocus = () => {
    setIsInFocus((prevState) => !prevState);
  };

  const handleOnBlur = () => {
    setIsInFocus((prevState) => !prevState);
  };

  return (
    <li
      className="form-search__select-item"
    >
      <Link
        to={`${AppRoute.AnyProduct}/${productId}`}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        style={{
          outline: isInFocus
            ? '2px solid #7575e2'
            : 'none',
        }}
      >
        {product.name}
      </Link>
    </li>
  );
}

export { SearchComponent };
