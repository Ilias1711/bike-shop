import CatalogListElement from "../CatalogListElement/CatalogListElement";
import styles from "./bag.module.scss";

function Bag() {
  return (
    <div className={styles.bag_outside}>
      <div className={styles.bag}>
        <h2 className={styles.bag_title}>Корзина</h2>
        <div className={styles.bag_list}>
          <CatalogListElement />
          <CatalogListElement />
        </div>
        <div className={styles.bag_result}>
          <div className={styles.bag_result_sum}>
            <span className={styles.bag_result_all}>Итого:</span>
            <div className={styles.bag_result_line}></div>
            <span className={styles.bag_result_money}>14744 руб.</span>
          </div>
          <button className="button">Заказать</button>
        </div>
      </div>
    </div>
  );
}

export default Bag;
