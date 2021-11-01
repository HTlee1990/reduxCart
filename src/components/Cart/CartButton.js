import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const quantity = useSelector((state) => state.cart);

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity.totalQuantity}</span>
    </button>
  );
};

export default CartButton;
