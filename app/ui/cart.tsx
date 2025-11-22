'use client';

import {useCart} from "../providers/CartProvider";

export default function Cart() {
  const {isOpen, cartItems, setIsOpen, removeFromCart} = useCart();

  return (
    <div className="cart" style={{display: isOpen ? "flex" : "none"}}>
      <div className="cart-body">
        <div className="cart-title">Корзина</div>
        <div className="cart-total">Общая сумма: <span>
          {cartItems.reduce((sum, item) => sum + item.price * item.count, 0)}
        </span> руб</div>

        <div className="cart-wrapper">
          {cartItems.map(cartItem => (
            <div className="card" key={cartItem.id}>
              {cartItem.sale ? <div className="card-sale">🔥Hot Sale🔥</div> : ""}
              <div className="card-img-wrapper">
                <span className="card-img-top" style={{backgroundImage: `url(${cartItem.img})`}}></span>
              </div>
              <div className="card-body justify-content-between">
                <div className="card-price">{cartItem.price} ₽ x {cartItem.count} = {cartItem.price * cartItem.count} ₽</div>
                <h5 className="card-title">{cartItem.title}</h5>
                <button className="btn btn-primary" onClick={() => removeFromCart(cartItem)}>Удалить</button>
              </div>
            </div>
          ))}

          {!cartItems.length ? <div id="cart-empty">Ваша корзина пока пуста</div> : null}
        </div>
        <button className="btn btn-primary cart-confirm" onClick={() => setIsOpen(false)}>Оформить заказ</button>
        <div className="cart-close" onClick={() => setIsOpen(false)}></div>
      </div>
    </div>
  );
}