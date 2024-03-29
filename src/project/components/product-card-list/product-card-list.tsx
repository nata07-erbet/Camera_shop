import { ProductCard } from '../../components/product-card/product-card';
import { TProduct } from '../../types/index';

type ProductCardListProps = {
  products: TProduct[];
  onClickButton: (id: TProduct['id']) => void;
  onChangeDisabled: () => void;
  disabledState: boolean;
}

function ProductCardList ({ products, onClickButton, onChangeDisabled, disabledState }: ProductCardListProps) {
  return (
    <div className="cards catalog__cards" data-testid="product-container">
      {products
        .map((product) =>(
          <ProductCard
            key={product.id}
            product={product}
            onClickButton={onClickButton}
            onChangeDisabled={onChangeDisabled}
            disabledState={disabledState}
          />))}
    </div>
  );

}

export { ProductCardList };
