import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Bag from "./components/Bag/Bag";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";
import CatalogListElement from "./components/CatalogListElement/CatalogListElement";
import CatalogListNew from "./components/CatalogListNew/CatalogListNew";

// const catalogArray = [
//   [
//     {
//       "name": "Велосипед BMXTech Team Goof 20",
//       "price": 12830,
//       "imageUrl": "/img/catalog_img_1.jpeg",
//       "listNumber": "element1"
//     },
//     {
//       "name": "Горный велосипед29 TRINX",
//       "price": 13884,
//       "imageUrl": "/img/catalog_img_2.jpeg",
//       "listNumber": "element2"
//     },
//     {
//       "name": "Шлем велосипедный VSH 25 full lime",
//       "price": 1244,
//       "imageUrl": "/img/catalog-img5.jpg",
//       "listNumber": "element5"
//     },
//     {
//       "name": "Велосипед RUSH HOUR XS 925",
//       "price": 12830,
//       "imageUrl": "/img/catalog-img-6.jpg",
//       "listNumber": "element6"
//     }
//   ]

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

function App() {
  const [opened, setOpened] = useState(false); //открытие корзины
  const [items, setItems] = useState([]); //состояние каталога
  const [searchValue, setSearchValue] = useState(""); //инпут каталога
  const [bagItems, setBagItems] = useState([]); //массив для отправки в корзину
  const url = "https://67c1b76c61d8935867e404c4.mockapi.io/items"; //товары
  const urlBag = "https://67c1b76c61d8935867e404c4.mockapi.io/itemsBag"; //товары в корзине
  useEffect(() => {
    axios.get(url).then((result) => {
      setItems(result.data);
    });
    axios.get(urlBag).then((result) => {
      setBagItems(result.data);
    });
  }, []);
  //метод добавления в корзину
  const onAddToBag = async (obj) => {
    await axios.post(urlBag, obj);
    // setBagItems((prev) => [...prev, obj]);
    axios.get(urlBag).then((result) => {
      setBagItems(result.data);
    });
  };
  //метод удаления из корзины
  //сделать по id
  const onClickRemove = (id) => {
    console.log(id);
    axios.delete(`${urlBag}/${id}`);
    setBagItems(function (prevItems) {
      return prevItems.filter((item) => item.id !== id);
    });
  };
  //метод поиска в каталоге
  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
  };
  // console.log("items", items);
  // console.log("bagItems", bagItems);

  return (
    <div className="bike-shop">
      {opened ? (
        <Bag
          bagElements={bagItems}
          onCloseBag={() => setOpened(false)}
          bagRemove={onClickRemove}
        />
      ) : null}
      <Header onClickBag={() => setOpened(true)} />
      <main className="content">
        <div className="content_container">
          <div className="content_wrapper">
            <h1 className="content_title">
              Магазин велосипедов с самой быстрой доставкой
            </h1>
            <p className="content_slogan">
              Закажите велосипед прямо сейчас и мы подарим вам отличную каску.
            </p>
            <button className="button content_button">Выбрать велосипед</button>
            <div className="content_picture">
              <img src="/img/content_picture.png" alt="man"></img>
            </div>
          </div>
        </div>
        <Feedback />
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
              <button className="button catalog_more_button">
                Показать еще
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
