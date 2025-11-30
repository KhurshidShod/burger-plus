import Categories from "../../components/categories";
import Layout from "../../components/layout";
import styles from "./HomePage.module.scss";
import Aksiya1 from "../../assets/images/aksiya/1.png";
import Aksiya2 from "../../assets/images/aksiya/2.png";
import { useTranslation } from "react-i18next";
import Button from "../../components/button";
import { Element } from "react-scroll";
import Category from "../../components/category";
import { categories } from "../../assets/data/categories";
import CategoryWrapper from "../../components/categoryWrapper";
import CategoryCards from "../../components/categoryCards";
import { products } from "../../assets/data/products";
import Card from "../../components/card";
import NoProd from "../../assets/images/no-product.webp";
import { TbSend } from "react-icons/tb";
import Cart from "../../components/cart";
import CartModal from "../../components/cartModal";
import { useState } from "react";

const HomePage = () => {
  const [t] = useTranslation();
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  return (
    <Layout>
      <Categories />
      {/* Cart opener */}
      <Cart openModal={setIsCartModalOpen} />
      {/* Cart modal */}
      <CartModal
        isOpen={isCartModalOpen}
        setOpened={setIsCartModalOpen}
      />

      <Element name="aksiya">
        <section className={styles.discounts}>
          <div className="container">
            <div className={styles.discounts__wrapper}>
              <div className={styles.discounts__wrapper_inner}>
                <div className={styles.discount}>
                  <img src={Aksiya1} alt="" />
                  <h1>{t("Aksiyalar.1")}</h1>
                </div>
                <div className={styles.discount}>
                  <img src={Aksiya2} alt="" />
                  <h1>{t("Aksiyalar.2")}</h1>
                </div>
                <div className={styles.discount}>
                  <img src={Aksiya1} alt="" />
                  <h1>{t("Aksiyalar.1")}</h1>
                </div>
                <div className={styles.discount}>
                  <img src={Aksiya2} alt="" />
                  <h1>{t("Aksiyalar.2")}</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      <section className={styles.addressSearch}>
        <div className="container">
          <div className={styles.addressSearch__wrapper}>
            <p>{t("checkAdd")}</p>
            <div>
              <div>
                <input type="text" placeholder={t("Address")} />
              </div>
              <Button br="6px" padding="12px 32px" fontSize="16px">
                <p>{t("Check")}</p>
                <span>
                  <TbSend size={25} />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {categories.map((cat) => (
        <Element name={cat.name} key={cat.name}>
          <CategoryWrapper>
            <Category category={cat.name} />
            <CategoryCards>
              {products.filter((p) => p.category === cat.name).length ? (
                products
                  .filter((p) => p.category === cat.name)
                  .map((p) => <Card prod={p} key={p.id} />)
              ) : (
                <div
                  style={{
                    width: "100%",
                    maxHeight: "500px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      maxWidth: "750px",
                      height: "100%",
                      maxHeight: "300px",
                    }}
                    src={NoProd}
                    alt=""
                  />
                </div>
              )}
            </CategoryCards>
          </CategoryWrapper>
        </Element>
      ))}
    </Layout>
  );
};

export default HomePage;
