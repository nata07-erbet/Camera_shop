import { TProduct } from '../../types';

type SearchListProps = {
  products: TProduct[];
}
function SearchList ({ products }: SearchListProps) {
  const selectedProducts = products;

  return (
    <ul className="form-search__select-list">
      {selectedProducts. map((product) => (
        <li
          className="form-search__select-item"
          tabIndex={0}
          key={product.id}
        >
          {product.name}
        </li>
      ))}
    </ul>
  );
}

export { SearchList };
