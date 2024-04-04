import { ProductCard } from '../../components/product-card/product-card';
import { TProduct } from '../../types/index';

type ProductCardListProps = {
  products: TProduct[];
  onClickButton: (id: TProduct['id']) => void;
  isAddedBasket: boolean;
};

function ProductCardList ({ products, onClickButton, isAddedBasket }: ProductCardListProps) {
  return (
    <div className="cards catalog__cards" data-testid="product-container">
      {products.length ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClickButton={onClickButton}
            isAddedBasket={isAddedBasket}
          />
        ))
      ) : (
        <div>по вашему запросу ничего не найдено</div>
      )}
    </div>
  );
}

export { ProductCardList };
