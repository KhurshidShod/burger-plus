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

const HomePage = () => {
  const [t, i18n] = useTranslation();
  // const [location, setLocation] = useState(null);
  // const [error, setError] = useState(null);

  // const API_KEY = "pk.8364bb182b60c3885d0cd46aec9ad1af"; // ← PUT YOUR KEY HERE

  // const getAddress = async (lat, lon) => {
  //   try {
  //     const res = await fetch(
  //       `https://us1.locationiq.com/v1/reverse?key=${API_KEY}&lat=${lat}&lon=${lon}&format=json`
  //     );

  //     const data = await res.json();
  //     return data;
  //   } catch (err) {
  //     console.error(err);
  //     return null;
  //   }
  // };

  // useEffect(() => {
  //   if (!navigator.geolocation) {
  //     setError("Geolocation is not supported");
  //     return;
  //   }

  //   navigator.geolocation.getCurrentPosition(
  //     async (pos) => {
  //       const { latitude, longitude } = pos.coords;
  //       const result = await getAddress(latitude, longitude);

  //       if (!result) {
  //         setError("Unable to fetch address");
  //         return;
  //       }

  //       setLocation({
  //         latitude,
  //         longitude,
  //         fullAddress: result.display_name || "N/A",
  //         street: result.address?.road || "N/A",
  //         city:
  //           result.address?.city ||
  //           result.address?.town ||
  //           result.address?.village ||
  //           "N/A",
  //         region: result.address?.state || "N/A",
  //         country: result.address?.country || "N/A",
  //       });
  //     },
  //     (err) => setError(err.message)
  //   );
  // }, []);

  return (
    <Layout>
      {/* <div>
        <h2>Your Location</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <p>Latitude: {location?.latitude || "Searching..."}</p>
        <p>Longitude: {location?.longitude || "Searching..."}</p>
        <p>Street: {location?.street || "Searching..."}</p>
        <p>City: {location?.city || "Searching..."}</p>
        <p>Region: {location?.region || "Searching..."}</p>
        <p>Country: {location?.country || "Searching..."}</p>
        <p>Full Address: {location?.fullAddress || "Searching..."}</p>
      </div> */}

      <Categories />
      <Cart />
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
              <Button br={"6px"} padding={"12px 32px"} fontSize={"16px"}>
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
