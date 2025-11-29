import React from "react";
import styles from "./Category.module.scss";
import { FiFilter } from "react-icons/fi";
import Button from "../button";
import img from "/images/products/pizzas/pizza-img-1.png";
import { products } from "../../assets/data/products";
import Card from "../card";

const Category = ({ category }) => {
  return (
    <div className={styles.category__wrapper_header}>
      <h1>{category}</h1>
      <button>
        <FiFilter color="var(--color-orange)" />
        Filter
      </button>
    </div>
  );
};

export default Category;
