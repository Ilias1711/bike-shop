import { Link, Route } from "react-router";
import CatalogListElement from "../CatalogListElement/CatalogListElement";

function Favorites({ favoriteElements = [], onAddToBag, onAddToFavorite }) {
  return (
    <div className="catalog">
      <div className="catalog_container">
        <div className="catalog_header">
          <h2 className="catalog_title">Избранное</h2>
        </div>
        {favoriteElements.length === 0 ? (
          <div className="catalog_empty">
            <h2 className="catalog_empty_title">
              У вас пока нет актуальных покупок
            </h2>
            <p className="catalog_empty_info">
              Как появятся, будут отображаться здесь
            </p>
            <Link to={"/Catalog"}>
              <button className="button">К покупкам</button>
            </Link>
          </div>
        ) : (
          <div className="catalog_list">
            {favoriteElements.map(function (item) {
              return (
                <CatalogListElement
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  clickFavorite={onAddToFavorite}
                  onClickBag={onAddToBag}
                  favorited={true}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
