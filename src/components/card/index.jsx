import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "./Card.module.scss";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import { products } from "../../assets/data/products";

const Card = ({ prod }) => {
  const { t, i18n } = useTranslation();
  const { cart, setCart } = useContext(CartContext);
  const addToCart = (id) => {
    const prod = products.find((prod) => prod.id === id);
    let newProds = [];
    if (cart.find((el) => el.id === id)) {
      newProds = cart.map((el) => {
        if (el.id === id) {
          el.qty++;
        }
        return el;
      });
    } else {
      newProds = [...cart, { ...prod, qty: 1 }];
    }
    // setTimeout(() => {
      setCart(newProds);
    // }, 1250);
    localStorage.setItem("cart", JSON.stringify(newProds));
  };
  // const addToCartAnimation = (e) => {
  //   const span = document.createElement('span')
  //   span.classList.add('animatingIcon')
  //   const parent = e.parentNode.parentNode.parentNode;
  //   let img = parent.querySelector('img');
  //   let flyingImg = img.cloneNode()
  //   flyingImg.classList.add('flyingImage')
  //   parent.appendChild(flyingImg)
  //   parent.style.position = 'relative'
  //   parent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.overflow = 'hidden'
    
  //   const flyingImgPos = flyingImg.getBoundingClientRect()
  //   const cartBtnPos = document.querySelector('.cartBtn').getBoundingClientRect()
  //   document.querySelector('.cartBtn').parentNode.style.width = '150px !important'
  //   let data = {
  //     left: cartBtnPos.left - (cartBtnPos.width / 2 + flyingImgPos.left + flyingImgPos.width / 2) - 50,
  //     top: cartBtnPos.bottom - flyingImgPos.bottom + 150
  //   }
  //   flyingImg.style.cssText = `
  //   --left: ${data.left.toFixed(2)}px;
  //   --top: ${data.top.toFixed(2)}px;`
  //   console.log(data.top)
  //   setTimeout(() => {
  //     flyingImg.style.display = 'none'
  //   }, 1490);
  // }
  return (
    <div className={styles.category__wrapper_cards_card}>
      <div className={styles.category__wrapper_cards_card_img}>
        {prod.filter === "" ? null : <p>{prod.filter}</p>}
        <LazyLoadImage src={prod.image} effect="blur" alt="" />
      </div>
      <div className={styles.text}>
        <h3>{prod.name}</h3>
        {/* <p>{prod.description}</p> */}
        <div>
          <button onClick={() => {
            addToCart(prod.id)
            // addToCartAnimation(e.target)
          }}>
            <p>{t("Tanla")}</p>
            <span>{prod.price} ₽</span>
          </button>
          <p>{prod.price} ₽</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  prod: PropTypes.object,
};

export default Card;
