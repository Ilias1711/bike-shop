import React from "react";
import BagComponent from "../BagComponent/BagComponent";
import styles from "./bag.module.scss";

function Bag({ bagRemove, onCloseBag, bagElements = [] }) {
  return (
    <div className={styles.bag_outside}>
      <div className={styles.bag}>
        <div className={styles.bag_header}>
          <h2 className={styles.bag_title}>Корзина</h2>
          <svg
            onClick={onCloseBag}
            style={{ cursor: "pointer" }}
            width="20"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              transform="scale(.97098 1.0282) rotate(-45 24.51 7.237)"
              stroke="#000"
              stroke-width="1.5"
              d="M0-.75h24.758"
            />
            <path
              transform="matrix(.68659 .72705 -.68659 .72705 1 2)"
              stroke="#000"
              stroke-width="1.5"
              d="M0-.75h24.758"
            />
          </svg>
        </div>
        <div className={styles.bag_list}>
          {bagElements.map(function (item) {
            return (
              <BagComponent
                name={item.name}
                price={item.price}
                image={item.imageUrl}
                bagRemove={bagRemove}
              />
            );
          })}
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
