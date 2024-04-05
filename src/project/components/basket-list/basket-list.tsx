import { BasketComponent } from '../../components/basket-component/basket-component';
import { basketProductsMock } from '../../mocks/basket-mock';


const MAX_BASKET = 3;

function BasketList () {

  return (

    <ul className="basket__list" data-testid="basket-list">
      {basketProductsMock.length > 0
        ? (
          basketProductsMock
            .slice(0, MAX_BASKET)
            .map((product) =>(
              <BasketComponent
                product={product}
                key={product.id}
              />
            ))
        ) : (
          <div><strong>Корзина пуcта. Выберите товар для оформления заказа.</strong></div>
        )}

    </ul>
  );
}

export { BasketList };
