import React from "react";

import styles from "./catalog.module.scss";
function CatalogListElement(props) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickButton = function () {
    setIsAdded(!isAdded);
  };
  return (
    <div className={`${styles.catalog_list_element} ${props.listNumber}`}>
      <img
        className={styles.catalog_element_img}
        src={props.imageUrl}
        alt="Товар-1"
        width="140"
        height="91"
      ></img>
      <h3 className={styles.catalog_element_title}>{props.title}</h3>
      <span
        className={styles.catalog_element_price}
      >{`${props.price} руб`}</span>
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
  );
}

export default CatalogListElement;
