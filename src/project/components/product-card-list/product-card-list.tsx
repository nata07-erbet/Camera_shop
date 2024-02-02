import { ProductCard } from '../../components/product-card/product-card';
import { TProduct } from '../../types/index';
import { PRODUCT_VIEW_COUNT } from '../../const/const';


type ProductCardListProps = {
  products: TProduct[];
  onClickButton: (id: TProduct['id']) => void;
}

const START_POSITION = 0;

function ProductCardList ({products, onClickButton}: ProductCardListProps) {
  return (
    <div className="cards catalog__cards">
      {products
        .slice(START_POSITION, PRODUCT_VIEW_COUNT)
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
