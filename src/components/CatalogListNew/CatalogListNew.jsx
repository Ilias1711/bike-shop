import styles from "./catalog.module.scss";

function CatalogListNew(props) {
  return (
    <div
      className={`${styles.catalog_list_element} ${props.listNumber}`}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className={styles.element_description}>
        <h5 className={styles.element_description_title}>{props.title}</h5>
        <span className={styles.element_description_price}>{props.price}</span>
        <button className="button catalog_button">Купить</button>
      </div>
    </div>
  );
}
export default CatalogListNew;
