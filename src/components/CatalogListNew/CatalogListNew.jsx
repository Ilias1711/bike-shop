import React from "react";
import styles from "./catalog.module.scss";

function CatalogListNew({ name, listNumber, imageUrl, price, onClickBag }) {
  const [isAdded, setIsAdded] = React.useState(false); //компонент товара добавление/удаление из корзины

  const onClickButton = function () {
    onClickBag({ name, imageUrl, price });
    setIsAdded(!isAdded);
  };
  return (
    <div
      className={`${styles.catalog_list_element} ${listNumber}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={styles.element_description}>
        <h5 className={styles.element_description_title}>{name}</h5>
        <span className={styles.element_description_price}>{price}</span>
        <button
          className="button catalog_button"
          onClick={onClickButton}
          style={
            isAdded
              ? { backgroundColor: "#D9FF56" }
              : { backgroundColor: "#baef00" }
          }
        >
          {isAdded ? "В корзине" : "Купить"}
        </button>
      </div>
    </div>
  );
}
export default CatalogListNew;
