import { ProductCard } from '../../components/product-card/product-card';
import { TProduct } from '../../types/index';

type ProductCardListProps = {
  products: TProduct[];
  onClickButton: (id: TProduct['id']) => void;
}

function ProductCardList ({ products, onClickButton }: ProductCardListProps) {
  return (
    <div className="cards catalog__cards" data-testid="product-container">
      {products
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
