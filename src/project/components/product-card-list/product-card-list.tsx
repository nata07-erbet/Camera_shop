import { ProductCard } from '../../components/product-card/product-card';
import { TProducts } from '../../types/index';

const VIEW_COUNT = 9;

type ProductCardListProps = {
  products: TProducts;
}
function ProductCardList ({products}: ProductCardListProps) {
  return (
    <div className="cards catalog__cards">
      {products
        .slice(0, VIEW_COUNT)
        .map((product) =>(
          <ProductCard
            key={product.id}
            product={product}
          />))}
    </div>
  );

}

export { ProductCardList };
