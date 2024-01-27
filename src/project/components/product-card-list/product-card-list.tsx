import { ProductCard } from '../../components/product-card/product-card';
import { TProducts } from '../../types/index';

type ProductCardListProps = {
  products: TProducts;
}
function ProductCardList ({products}: ProductCardListProps) {
  return (
    <div className="cards catalog__cards">
      {products.map((product) =>(
        <ProductCard
          key={product.id}
          product={product}
        />))}
    </div>
  );

}

export { ProductCardList };
