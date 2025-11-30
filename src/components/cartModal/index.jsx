import styles from "./CartModal.module.scss";
import { IoChevronBack } from "react-icons/io5";
import { GoTrash } from "react-icons/go";
import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import { formatCustomNumber } from "../../utils/numberUtils";
import { IoAddOutline, IoRemove } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import emptyCartImage from "../../assets/images/emptyCart.png"

const CartModal = ({ isOpen, setOpened }) => {
  const { cart, setCart } = useContext(CartContext);
  const { t } = useTranslation();

  const handleClearCart = () => setCart([]);

  const increaseCart = (id) => {
    const prod = cart.find((el) => el.id === id);
    let newProds = [];
    newProds = cart.map((el) => {
      if (el.id === prod.id) {
        el.qty++;
      }
      return el;
    });
    setCart(newProds);
    localStorage.setItem("cart", JSON.stringify(newProds));
  };
  const decreaseCart = (id) => {
    const prod = cart.find((el) => el.id === id);
    let newProds = [];
    if (cart.find((el) => el.id === prod.id).qty == 1) {
      newProds = cart.filter((el) => el.id !== prod.id);
    } else {
      newProds = cart.map((el) => {
        if (el.id === prod.id) {
          el.qty--;
        }
        return el;
      });
    }
    setCart(newProds);
    localStorage.setItem("cart", JSON.stringify(newProds));
  };

  return (
    <div className={`${styles.cartModal} ${isOpen ? styles.opened : ""}`}>
      <div className={styles.cartModal_header}>
        <button onClick={() => setOpened(false)}>
          <IoChevronBack />
        </button>
        <h3>Savatcha</h3>
        <span onClick={handleClearCart}>
          <GoTrash size={25} color="#D83331" />
        </span>
      </div>
      {cart.length === 0 ? (
        <div className={styles.cartModal_empty}>
            <img src={emptyCartImage} alt="" />
            <p>Savatingiz bo'sh. Xaridlarni boshlang!</p>
        </div>
      ) : (
        <>
          <div className={styles.cartModal_orders}>
            {cart.map((el) => (
              <div key={el.id} className={styles.cartModal_orders__order}>
                <img width={50} height={50} src={el.image} alt={el.name} />
                <div className={styles.cartModal_orders__order_info}>
                  <h3>{el.name}</h3>
                  <p>{formatCustomNumber(el.price)}</p>
                </div>
                <div className={styles.cartModal_orders__order_change}>
                  <button onClick={() => decreaseCart(el.id)}>
                    <IoRemove size={25} />
                  </button>
                  <span>{el.qty}</span>
                  <button>
                    <IoAddOutline
                      onClick={() => increaseCart(el.id)}
                      size={25}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cartModal_all}>
            <div>
              <h4>
                {formatCustomNumber(
                  cart.reduce((acc, el) => acc + el.price * el.qty, 0)
                )}{" "}
                {t("uzs")}
              </h4>
              <p>Umumiy</p>
            </div>
            <button>Buyurtma berish</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
