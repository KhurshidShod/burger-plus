import styles from "./Category.module.scss";

const Category = ({ category }) => {
  return (
    <div className={styles.category__wrapper_header}>
      <span></span>
      <h1>{category}</h1>
      <span></span>
    </div>
  );
};

export default Category;
