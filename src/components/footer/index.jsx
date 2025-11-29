import styles from "./Footer.module.scss";
import Logo from "../../assets/images/logo.svg";
import { useTranslation } from "react-i18next";
import { BsTelephone, BsFacebook, BsInstagram } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer>
      <div className="container">
        <div className={styles.footer}>
          <div className={styles.footer__sec}>
            <div className={styles.footer__sec_logo}>
              <img src={Logo} alt="" />
              <p>Куда пицца</p>
            </div>
          </div>
          <div className={styles.footer__sec}>
            <ul>
              <li>
                  <b>Куда пицца</b>
              </li>
              <li>
                <a href="">{t("Haqida")}</a>
              </li>
              <li>
                <a href="">{t("PolSog")}</a>
              </li>
              <li>
                <a href="">{t("Garantiya")}</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer__sec}>
            <ul>
              <li>
                  <b>{t("Yordam")}</b>
              </li>
              <li>
                <a href="">{t("Restoran")}</a>
              </li>
              <li>
                <a href="">{t("Kontakt")}</a>
              </li>
              <li>
                <a href="">{t("Paderjka")}</a>
              </li>
              <li>
                <a href="">{t("Otsledit")}</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer__sec}>
    <ul>
        <li><b>{t("Kontakt")}</b></li>
        <li><BsTelephone size={20} /><a href="tel:+79262231011">+7 (926) 223-10-11</a></li>
        <li><IoLocationOutline size={20} />Москва, ул. Юных Ленинцев, д.99</li>
        <li><p><BsFacebook /> Facebook</p> <p><BsInstagram /> Instagram</p></li>
    </ul>
          </div>
          <div className={styles.footer__sec}>

          <p>© Copyright 2021 — Куда Пицца</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
