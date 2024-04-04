import { TProduct } from '../../types';
import { BasketComponent } from '../../components/basket-component/basket-component';

type BasketListProps = {
  products: TProduct[];
};

const MAX_BASKET = 3;

function BasketList ({products}: BasketListProps) {

  return (
    <ul className="basket__list" data-testid="basket-list">
      {products
        .slice(0, MAX_BASKET)
        .map((product) =>(
        <BasketComponent
          product={product}
          key={product.id}
        />
        ))}
    </ul>
  );
}

export { BasketList };
