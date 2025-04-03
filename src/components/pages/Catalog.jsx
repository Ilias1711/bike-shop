import CatalogListElement from "../CatalogListElement/CatalogListElement";
import CatalogListNew from "../CatalogListNew/CatalogListNew";

const catalogArrayNew = [
  {
    name: " Велосипед BMX Tech Team Goof 20",
    price: 12830,
    imageUrl: "/img/catalog_img_3.jpeg",
    listNumber: "element3",
  },
  {
    name: "Велосипед BMX Tech Team Goof 30",
    price: 14700,
    imageUrl: "/img/catalog_img_4.jpeg",
    listNumber: "element4",
  },
];

function Catalog({
  searchValue,
  setSearchValue,
  onChangeInput,
  items,
  onAddToBag,
  onAddToFavorite,
}) {
  return (
    <div className="catalog">
      <div className="catalog_container">
        <div className="catalog_header">
          <h2 className="catalog_title">
            {searchValue ? `Поиск по запросу ${searchValue}` : "Каталог"}
          </h2>
          {searchValue && (
            <svg
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSearchValue("");
              }}
              className="catalog_search_clear"
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
          )}
          <input
            className="catalog_search"
            type="text"
            placeholder="Поиск"
            value={searchValue}
            onChange={onChangeInput}
          ></input>
        </div>
        <div className="catalog_list">
          {items
            .filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map(function (item) {
              return (
                <CatalogListElement
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  listNumber={item.listNumber}
                  onClickBag={onAddToBag}
                  clickFavorite={onAddToFavorite}
                  favorited={true}
                />
              );
            })}
          {catalogArrayNew
            .filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => {
              return (
                <CatalogListNew
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  listNumber={item.listNumber}
                  isBasket={item.isAdded}
                  onClickBag={onAddToBag}
                />
              );
            })}
        </div>
        <div className="catalog_more">
          <button className="button catalog_more_button">Показать еще</button>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
