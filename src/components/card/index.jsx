import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "./Card.module.scss";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import { products } from "../../assets/data/products";
import { IoAddOutline, IoRemove } from "react-icons/io5";

const Card = ({ prod }) => {
  const { t, i18n } = useTranslation();
  const { cart, setCart } = useContext(CartContext);
  const addToCart = (id) => {
    const prod = products.find((prod) => prod.id === id);
    console.log(prod);
    let newProds = [];
    newProds = [...cart, { ...prod, qty: 1 }];
    setCart(newProds);
    localStorage.setItem("cart", JSON.stringify(newProds));
  };
  const increaseCart = () => {
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
  const decreaseCart = () => {
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
    <div className={styles.category__wrapper_cards_card}>
      <div className={styles.category__wrapper_cards_card_img}>
        {prod.filter === "" ? null : <p>{prod.filter}</p>}
        <LazyLoadImage src={prod.image} effect="blur" alt="" />
      </div>
      <div className={styles.text}>
        <h3>{prod.name}</h3>
        <div className={styles.text__purchase}>
          {JSON.parse(localStorage.getItem("cart"))?.find(
            (el) => el.id === prod.id
          ) ? (
            <div className={styles.text__purchase_change}>
              <button onClick={() => decreaseCart()}>
                <IoRemove />
              </button>
              <b>
                {
                  JSON.parse(localStorage.getItem("cart"))?.find(
                    (el) => el.id === prod.id
                  ).qty
                }
              </b>
              <button onClick={() => increaseCart()}>
                <IoAddOutline />
              </button>
            </div>
          ) : (
            <button
              className={styles.text__purchase_add}
              onClick={() => {
                addToCart(prod.id);
              }}
            >
              <p>
                <b>{prod.price}00</b> {t("uzs")}
              </p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  prod: PropTypes.object,
};

export default Card;
