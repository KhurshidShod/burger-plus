import styles from "./Cart.module.scss";
import { useTranslation } from "react-i18next";


const Cart = () => {
    const [t, i18n] = useTranslation();

  return (
    <div className={styles.cart}>
        <button>Min. buyurtma: 15000 {t("uzs")}</button>
    </div>
  )
}

export default Cart
