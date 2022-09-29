import './Cart.css';

export default function Index({ showCart, showCartHandler }) {
  return (
    <div className={`${showCart ? 'cart show-cart' : 'cart'}`} id="cart">
      <i
        onClick={showCartHandler}
        className="bx bx-x cart__close"
        id="cart-close"></i>

      <h2 className="cart__title-center">My Cart</h2>

      <div className="cart__container">
        <article className="cart__card">
          <div className="cart__box">
            <img src="/img/featured1.png" alt="" className="cart__img" />
          </div>

          <div className="cart__details">
            <h3 className="cart__title">Jazzmaster</h3>
            <span className="cart__price">$1050</span>

            <div className="cart__amount">
              <div className="cart__amount-content">
                <span className="cart__amount-box">
                  <i className="bx bx-minus"></i>
                </span>

                <span className="cart__amount-number">1</span>

                <span className="cart__amount-box">
                  <i className="bx bx-plus"></i>
                </span>
              </div>

              <i className="bx bx-trash-alt cart__amount-trash"></i>
            </div>
          </div>
        </article>

        <article className="cart__card">
          <div className="cart__box">
            <img src="/img/featured3.png" alt="" className="cart__img" />
          </div>

          <div className="cart__details">
            <h3 className="cart__title">Rose Gold</h3>
            <span className="cart__price">$850</span>

            <div className="cart__amount">
              <div className="cart__amount-content">
                <span className="cart__amount-box">
                  <i className="bx bx-minus"></i>
                </span>

                <span className="cart__amount-number">1</span>

                <span className="cart__amount-box">
                  <i className="bx bx-plus"></i>
                </span>
              </div>

              <i className="bx bx-trash-alt cart__amount-trash"></i>
            </div>
          </div>
        </article>

        <article className="cart__card">
          <div className="cart__box">
            <img src="/img/new1.png" alt="" className="cart__img" />
          </div>

          <div className="cart__details">
            <h3 className="cart__title">Longines Rose</h3>
            <span className="cart__price">$980</span>

            <div className="cart__amount">
              <div className="cart__amount-content">
                <span className="cart__amount-box">
                  <i className="bx bx-minus"></i>
                </span>

                <span className="cart__amount-number">1</span>

                <span className="cart__amount-box">
                  <i className="bx bx-plus"></i>
                </span>
              </div>

              <i className="bx bx-trash-alt cart__amount-trash"></i>
            </div>
          </div>
        </article>
      </div>

      <div className="cart__prices">
        <span className="cart__prices-item">3 items</span>
        <span className="cart__prices-total">$2880</span>
      </div>

      <a href="#" className="cart__btn button">
        Proceed to checkout
      </a>
    </div>
  );
}
