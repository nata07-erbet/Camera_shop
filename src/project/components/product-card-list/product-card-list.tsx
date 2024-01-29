import { ProductCard } from '../../components/product-card/product-card';
import { TProducts } from '../../types/index';
import { PRODUCT_VIEW_COUNT } from '../../const/const';


type ProductCardListProps = {
  products: TProducts;
}

const START_POSITION = 0;

function ProductCardList ({products}: ProductCardListProps) {
  return (
    <div className="cards catalog__cards">
      {products
        .slice(START_POSITION, PRODUCT_VIEW_COUNT)
        .map((product) =>(
          <ProductCard
            key={product.id}
            product={product}
          />))}
    </div>
  );

}

export { ProductCardList };
