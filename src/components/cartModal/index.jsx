import styles from "./CartModal.module.scss";
import { IoChevronBack } from "react-icons/io5";
import { GoTrash } from "react-icons/go";

const CartModal = () => {
  return (
    <div className={styles.cartModal}>
        <div className={styles.cartModal_header}>
            <button><IoChevronBack /></button>
            <h3>Savatcha</h3>
            <span><GoTrash size={25} color="#D83331" /></span>
        </div>
    </div>
  )
}

export default CartModal
