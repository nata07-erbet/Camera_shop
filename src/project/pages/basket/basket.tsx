import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { BreadCrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { BasketList } from '../../components/basket-list/basket-list';
import { PopupRemove } from '../../components/pop-up/popup-remove-item';
import { useState } from 'react';

function Basket() {
  const activeBasketPage = true;

  const [ isModalPopupRemoveShow, setIsModalPopupRemoveShow ] = useState(false);

  const handleButtonDeleteProduct = () => {
    // логика удаления карточки  товара
  };

  const handleModalPopupRemoveShowClose = () => {
    setIsModalPopupRemoveShow((prevState) => !prevState);
  }
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
              <div className="basket__summary">
                <div className="basket__promo">
                  <p className="title title--h4">
                    Если у вас есть промокод на скидку, примените его в этом
                    поле
                  </p>
                  <div className="basket-form">
                    <form action="#">
                      <div className="custom-input">
                        <label>
                          <span className="custom-input__label">Промокод</span>
                          <input
                            type="text"
                            name="promo"
                            placeholder="Введите промокод"
                          />
                        </label>
                        <p className="custom-input__error">Промокод неверный</p>
                        <p className="custom-input__success">
                          Промокод принят!
                        </p>
                      </div>
                      <button className="btn" type="submit">
                        Применить
                      </button>
                    </form>
                  </div>
                </div>
                <div className="basket__summary-order">
                  <p className="basket__summary-item">
                    <span className="basket__summary-text">Всего:</span>
                    <span className="basket__summary-value">111 390₽</span>
                  </p>
                  <p className="basket__summary-item">
                    <span className="basket__summary-text">Скидка:</span>
                    <span className="basket__summary-value basket__summary-value--bonus">
                      0₽
                    </span>
                  </p>
                  <p className="basket__summary-item">
                    <span className="basket__summary-text basket__summary-text--total">
                      К оплате:
                    </span>
                    <span className="basket__summary-value basket__summary-value--total">
                      111 390₽
                    </span>
                  </p>
                  <button className="btn btn--purple" type="submit">
                    Оформить заказ
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <PopupRemove
        opened={isModalPopupRemoveShow}
        onClose={handleModalPopupRemoveShowClose}
       />
      <Footer />
    </>
  );
}

export { Basket };
