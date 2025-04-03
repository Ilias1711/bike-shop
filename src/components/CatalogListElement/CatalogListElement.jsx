import React from "react";
import styles from "./catalog.module.scss";
function CatalogListElement({
  onClickBag,
  imageUrl,
  name,
  price,
  listNumber,
  clickFavorite,
  favorited = false,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const onClickButton = function () {
    setIsAdded(true);
    onClickBag({ name, imageUrl, price });
  };

  const onClickFavorite = function () {
    setIsFavorite(!isFavorite);
    clickFavorite({ name, imageUrl, price });
  };

  return (
    <div className={`${styles.catalog_list_element} ${listNumber}`}>
      <svg
        onClick={onClickFavorite}
        className={styles.catalog_list_favorite}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m12 18.324 7.416 4.476-1.968-8.436L24 8.688l-8.628-.744L12 0 8.628 7.944 0 8.688l6.54 5.676L4.584 22.8 12 18.324Z"
          // fill="#828B8D"
        />
      </svg>
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
