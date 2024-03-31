import { ProductCard } from '../../components/product-card/product-card';
import { TProduct } from '../../types/index';

type ProductCardListProps = {
  products: TProduct[];
  onClickButton: (id: TProduct['id']) => void;
  onChangeDisabled: () => void;

  isAddedBasket: boolean;
  isDisabled: boolean;
}

function ProductCardList ({ products, onClickButton, onChangeDisabled, isAddedBasket, isDisabled }: ProductCardListProps) {
  return (
    <div className="cards catalog__cards" data-testid="product-container">
      {products
        .map((product) =>(
          <ProductCard
            key={product.id}
            product={product}
            onClickButton={onClickButton}
            onChangeDisabled={onChangeDisabled}
            isAddedBasket={isAddedBasket}
            isDisabled={isDisabled}
          />))}
    </div>
  );

}

export { ProductCardList };
