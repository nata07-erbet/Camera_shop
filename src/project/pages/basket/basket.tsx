import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { BreadCrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { BasketList } from '../../components/basket-list/basket-list';
import { PopupRemove } from '../../components/pop-up/popup-remove-item';
import { Order } from '../../components/order/order';

import { useState } from 'react';


function Basket() {
  const activeBasketPage = true;

  const [ isModalPopupRemoveShow, setIsModalPopupRemoveShow ] = useState(false);
  const handleButtonDeleteProduct = () => {
    setIsModalPopupRemoveShow(true);
  };

  const handleClickDeleteFromBasket = () => {
    //логика удаления продукта
  };

  const handleModalPopupRemoveShowClose = () => {
    setIsModalPopupRemoveShow(false);
  };



  return (
    <>
      <Header/>
      <main data-testid="basket-page">
        <div className="page-content">
          <BreadCrumbs isActiveBasketPage={activeBasketPage} />
          <section className="basket">
            <div className="container">
              <h1 className="title title--h2">Корзина</h1>
              <BasketList
                onButtonDeleteProduct={handleButtonDeleteProduct}
              />
              <Order />
            </div>
          </section>
        </div>
      </main>
      <PopupRemove
        opened={isModalPopupRemoveShow}
        onClose={handleModalPopupRemoveShowClose}
        onClickDeleteFromBasket={handleClickDeleteFromBasket}
      />
      <Footer />
    </>
  );
}

export { Basket };
