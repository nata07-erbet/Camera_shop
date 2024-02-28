import { TProduct } from '../../types/index';
import { ProductCard } from '../product-card/product-card';

type SimilarListProps = {
  similarProducts: TProduct[];
};

function SimilarList ({similarProducts}: SimilarListProps) {
  return (
    <div className="product-similar__slider-list" data-testid="similar">
      {similarProducts
        .slice(0, 3)
        .map((product) => (
          <ProductCard key={product.id} product={product} onClickButton={()=> {}} />
        ))}
    </div>
  );
}

export { SimilarList };
