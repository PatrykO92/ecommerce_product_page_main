import { useEffect, useState } from "react";
import "../css/cart.css";
import { deleteIcon } from "../icons";

const Cart = ({ cartStatus }) => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    setCartList(cartStatus);
  }, [cartStatus]);

  return (
    <div className="cart">
      <div
        className="cart-title-box"
        onClick={() => {
          console.log(cartList);
        }}
      >
        Cart
      </div>
      <div className="cart-product-list">
        {cartList.length < 1 ? (
          <p>Your cart is empty</p>
        ) : (
          cartList.map((item, index) => {
            console.log(item);

            const itemPrice =
              item.product.price -
              (item.product.discount * item.product.price) / 100;

            const totalPrice = itemPrice * item.quantity;

            return (
              <div key={index}>
                <img src={item.product.images[0][1]} />
                <p>
                  <span>
                    {item.product.name.length > 29
                      ? `${item.product.name.slice(0, 27)}...`
                      : item.product.name}
                  </span>
                  <br />${itemPrice.toFixed(2)} x {item.quantity}{" "}
                  <span>${totalPrice.toFixed(2)}</span>
                </p>
                <button>
                  <img src={deleteIcon} alt="remove" />
                </button>
              </div>
            );
          })
        )}
      </div>
      <div className="cart-checkout-button">
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
