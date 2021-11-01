import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-action";

let isInitial = true;
//밖에 선언했으므로, 바뀌지 않는다.

function App() {
  const dispatch = useDispatch();
  const toggleShow = useSelector((state) => state.toggle.toggleShow);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.toggle.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  //현재, dispatch(fetchCartData());가 실행되면,
  //cart가 변경되고, 밑에 있는 로직이 실행된다.

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {toggleShow && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
