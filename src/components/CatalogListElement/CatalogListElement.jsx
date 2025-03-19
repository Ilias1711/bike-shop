import React from "react";
import styles from "./catalog.module.scss";
function CatalogListElement({ onClickBag, imageUrl, name, price, listNumber }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickButton = function () {
    setIsAdded(!isAdded);
    console.log("onClickButton", { name, imageUrl, price });
    onClickBag({ name, imageUrl, price });
  };
  return (
    <div className={`${styles.catalog_list_element} ${listNumber}`}>
      <img
        className={styles.catalog_element_img}
        src={imageUrl}
        alt="Товар-1"
        width="140"
        height="91"
      ></img>
      <h3 className={styles.catalog_element_title}>{name}</h3>
      <span className={styles.catalog_element_price}>{`${price} руб`}</span>
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
