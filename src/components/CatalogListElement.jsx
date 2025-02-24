function CatalogListElement(props) {
  return (
    <div className="catalog_list_element">
      <img
        className="catalog_element_img "
        src={props.imageUrl}
        alt="Товар-1"
        width="140"
        height="91"
      ></img>
      <h3 className="catalog_element_title">{props.title}</h3>
      <span className="catalog_element_price">{`${props.price} руб`}</span>
      <button className="button catalog_button">Купить</button>
    </div>
  );
}

export default CatalogListElement;
