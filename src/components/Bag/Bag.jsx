import React from "react";
import BagComponent from "../BagComponent/BagComponent";
import styles from "./bag.module.scss";

function Bag({ bagRemove, onCloseBag, bagElements = [] }) {
  //стоимость товаров в корзине
  let bagSum = bagElements.reduce((acum, item) => {
    return acum + item.price;
  }, 0);
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
              strokeWidth="1.5"
              d="M0-.75h24.758"
            />
            <path
              transform="matrix(.68659 .72705 -.68659 .72705 1 2)"
              stroke="#000"
              strokeWidth="1.5"
              d="M0-.75h24.758"
            />
          </svg>
        </div>
        {bagElements.length > 0 ? (
          <div className={styles.bag_list}>
            {bagElements.map(function (item) {
              return (
                <BagComponent
                  name={item.name}
                  image={item.imageUrl}
                  price={item.price}
                  bagRemove={bagRemove}
                  id={item.id}
                />
              );
            })}
          </div>
        ) : (
          <div className={styles.bag_empty}>
            <img
              className={styles.bag_picture}
              src="/img/bag.jpg"
              alt="Пустая корзина"
            ></img>
            <p className={styles.bag_info}>Ваша корзина пуста</p>
          </div>
        )}

        <div className={styles.bag_result}>
          <div className={styles.bag_result_sum}>
            <span className={styles.bag_result_all}>Итого:</span>
            <div className={styles.bag_result_line}></div>
            <span className={styles.bag_result_money}>{`${bagSum} руб`}</span>
          </div>
          <button className="button">Заказать</button>
        </div>
      </div>
    </div>
  );
}

export default Bag;
