import styles from "./catalog.module.scss";
function CatalogListElement(props) {
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
      <button className="button catalog_button" onClick={props.onClick}>
        Купить
      </button>
    </div>
  );
}

export default CatalogListElement;
