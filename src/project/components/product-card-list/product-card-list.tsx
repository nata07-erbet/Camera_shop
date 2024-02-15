import { ProductCard } from '../../components/product-card/product-card';
import { TProduct } from '../../types/index';

type ProductCardListProps = {
  products: TProduct[];
  first: number;
  last: number;
  onClickButton: (id: TProduct['id']) => void;
}

function ProductCardList ({products, onClickButton, first, last}: ProductCardListProps) {
  return (
    <div className="cards catalog__cards">
      {products
        .slice(first, last)
        .map((product) =>(
          <ProductCard
            key={product.id}
            product={product}
            onClickButton={onClickButton}
          />))}
    </div>
  );

}

export { ProductCardList };
