import styles from "./CategoryWrapper.module.scss";

const CategoryWrapper = ({ children }) => {
  return (
    <section className={styles.category}>
      <div className="container">
        <div className={styles.category__wrapper}>{children}</div>
      </div>
    </section>
  );
};

export default CategoryWrapper;
