import Layout from "../../components/layout";
import styles from './CartPage.module.scss'
const Cart = () => {
  return <Layout>
    <section>
      <div className="container">
        <div className={styles.cart}>
          <div className={styles.cart__products}>
            <h1>Cart is not ready yet. So sorry for this</h1>
          </div>
        </div>
      </div>
    </section>
  </Layout>;
};

export default Cart;
