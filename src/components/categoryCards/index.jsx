import styles from "./CategoryCards.module.scss";

const CategoryCards = ({ children }) => {
  return <div className={styles.category__wrapper_cards}>{children}</div>;
};

export default CategoryCards;
