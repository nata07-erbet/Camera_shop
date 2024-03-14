import { TProduct } from '../../types';

type SearchComponentProps = {
  product: TProduct;
}
function SearchComponent ({ product }: SearchComponentProps) {

  return (
    <li
      className="form-search__select-item"
      tabIndex={0}
    >
      {product.name}
    </li>
  );
}

export { SearchComponent };
