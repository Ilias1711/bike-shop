import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header/Header";
import Bag from "./components/Bag/Bag";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";
import Catalog from "./components/pages/Catallog";

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
    axios.delete(`${urlBag}/${id}`);
    setBagItems(function (prevItems) {
      return prevItems.filter((item) => item.id !== id);
    });
  };
  //метод поиска в каталоге
  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
  };
  //Роут
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
        <Routes>
          <Route
            path="/"
            element={
              <Catalog
                items={items}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeInput={onChangeInput}
                onAddToBag={onAddToBag}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
