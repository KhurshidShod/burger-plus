import styles from "./Header.module.scss";
import { CgDarkMode } from "react-icons/cg";
import Logo from "../../assets/images/cropped_circle_image.png";
import { FaShoppingCart } from "react-icons/fa";
import Button from "../button";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { CartContext } from "../../context/CartContextProvider";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Header = () => {
  const { cart, setCart } = useContext(CartContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const [navOpen, setNavOpen] = useState(false);
  const [cartFixed, setCartFixed] = useState(false);
  let allPrice = 0;
  cart.map((el) => (allPrice += +el.price * +el.qty));
  const changeLang = (e) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };
  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 115) {
        setCartFixed(true);
      } else {
        setCartFixed(false);
      }
    });
  });

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem(
      "theme",
      localStorage.getItem("theme") === "light" ? "dark" : "light"
    );
  };

  return (
    <header>
      <nav>
        <div className="container">
          <div className={styles.navTop}>
            <div className={styles.navTop__left}>
              <select
                name=""
                id=""
                defaultValue={localStorage.getItem("i18nextLng").slice(0, 2)}
                onChange={(e) => changeLang(e)}
              >
                <option value="uz">Uz</option>
                <option value="ru">Ru</option>
              </select>
              <p>{t("adresTek")}</p>
              <p>
                {t("yetVaqt")} <b>00:24:19</b>
              </p>
            </div>
            <div className={styles.navTop__right}>
              <p>
                {t("ishVaqti")}
                <b>: 11:00 до 23:00</b>
              </p>
              <button onClick={changeTheme}>
                {theme === "dark" ? (
                  <BsFillMoonStarsFill color="var(--color-orange)" />
                ) : (
                  <BsFillSunFill color="var(--color-orange)" />
                )}
              </button>
            </div>
          </div>
        </div>
        <span></span>
        <div className="container">
          <div
            className={`${styles.navBottom} ${
              cartFixed ? styles.cartBtm : null
            }`}
          >
            <NavLink href="" className={styles.logo}>
              <img width={75} src={Logo} alt="" />
              Burger <p>Plus</p>
            </NavLink>
          </div>
        </div>
        <span></span>
      </nav>
    </header>
  );
};

export default Header;
