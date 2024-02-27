import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
function CartScreen() {
  const productId = useParams().id;

  // Use useLocation to get the search string from the URL
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // // Get the qty parameter from the URL
  // const qty = searchParams.get("qty");

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      console.log(productId);

      dispatch(addToCart(productId));
    }
  }, [dispatch, productId]);

  const removeHandler = (id) => {
    console.log(id);

    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <h2>Cart Screen</h2>
      {cartItems &&
        cartItems.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} - ${item.price}{" "}
              <button onClick={() => removeHandler(item.id)}>reomve</button>
            </p>
          </div>
        ))}
    </div>
  );
}

export default CartScreen;
