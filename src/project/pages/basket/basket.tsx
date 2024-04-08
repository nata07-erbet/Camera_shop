import { useState } from 'react';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { BreadCrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { BasketList } from '../../components/basket-list/basket-list';
import { PopupRemove } from '../../components/pop-up/popup-remove-item';
import { Order } from '../../components/order/order';
import { PopupThanksForProductBuy } from '../../components/pop-up/popup-thanks-for-product-buy';


function Basket() {
  const activeBasketPage = true;

  const [ isModalPopupRemoveShow, setIsModalPopupRemoveShow ] = useState(false);
  const [ isPopupThanksForBuyShow, setIsPopupThanksForBuyShow ] = useState(false);
  const [ sendingStatus, setSendingStatus] = useState(false);

  const handleButtonDeleteProduct = () => {
    setIsModalPopupRemoveShow(true);
  };

  const handleClickDeleteFromBasket = () => {
    //логика удаления продукта
  };

  // const handleClickAllDeleteFromBasket = () => {
  //   //логика очистки корзины
  // };

  const handleModalPopupRemoveShowClose = () => {
    setIsModalPopupRemoveShow(false);
  };

  const handlePopupThanksForBuyShowClose = () => {
    setIsPopupThanksForBuyShow(false);
  };

  // просто для проверки работы попапа
  if(sendingStatus) {
    setSendingStatus((prevState) => !prevState);
    setIsPopupThanksForBuyShow(true);
  };
  // useEffect(() => {
  //   if(sendingStatus = RequestStatus.Success) {
  //     setIsPopupThanksForBuyShow(true);
  //   }
  // }, []);


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
      <PopupThanksForProductBuy
        opened={isPopupThanksForBuyShow}
        onClose={handlePopupThanksForBuyShowClose}
        sendingStatus={sendingStatus}
      />
      <Footer />
    </>
  );
}

export { Basket };
