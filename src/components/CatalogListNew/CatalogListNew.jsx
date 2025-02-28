import React from "react";
import styles from "./catalog.module.scss";

function CatalogListNew(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickButton = function () {
    setIsAdded(!isAdded);
  };
  return (
    <div
      className={`${styles.catalog_list_element} ${props.listNumber}`}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className={styles.element_description}>
        <h5 className={styles.element_description_title}>{props.title}</h5>
        <span className={styles.element_description_price}>{props.price}</span>
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
