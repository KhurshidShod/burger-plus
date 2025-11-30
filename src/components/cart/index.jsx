import { useContext } from "react";
import styles from "./Cart.module.scss";
import { useTranslation } from "react-i18next";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../../context/CartContextProvider";
import { formatCustomNumber } from "../../utils/numberUtils";

const Cart = () => {
  const [t, i18n] = useTranslation();
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className={styles.cart}>
      {cart.length > 0 ? (
        <button className={styles.cart__order}>
          <FaCartShopping />{" "}
          <p>
            {formatCustomNumber(cart?.reduce((acc, el) => acc + el.price * el.qty, 0))} {t("uzs")}
          </p>
        </button>
      ) : (
        <button className={styles.cart__empty}>
          Min. buyurtma: 15000 {t("uzs")}
        </button>
      )}
    </div>
  );
};

export default Cart;
