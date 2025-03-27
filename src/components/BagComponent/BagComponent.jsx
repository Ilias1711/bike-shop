import React from "react";
import styles from "./bagComponent.module.scss";
function BagComponent({ name, image, price, bagRemove, id }) {
  // const bagButtonRemove = () => {
  //   bagRemove({ name, image, price, id });
  // };
  return (
    <div className={styles.bag_item}>
      <img className={styles.bag_item_img} alt="товар" src={image} />
      <p className={styles.bag_item_description}>{name}</p>
      <div className={styles.bag_price_container}>
        <span className="bag_item_price_title">Цена:</span>
        <div className={styles.bag_item_price_row}></div>
        <span className={styles.bag_item_price}>{price}руб</span>
      </div>
      <button
        onClick={() => {
          bagRemove(id);
        }}
        className={`${styles.bag_button}`}
      >
        Убрать из корзины
      </button>
    </div>
  );
}
export default BagComponent;
