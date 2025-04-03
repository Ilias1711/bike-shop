import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header/Header";
import Bag from "./components/Bag/Bag";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Catalog from "./components/pages/Catalog";
import Favorites from "./components/pages/Favorites";

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
  const [favorites, setFavorites] = useState([]); // избранное
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
    try {
      await axios.post(urlBag, obj);
      // setBagItems((prev) => [...prev, obj]);
      axios.get(urlBag).then((result) => {
        setBagItems(result.data);
      });
    } catch {
      alert("Не удалось добавить в корзину");
    }
  };

  //сделать по id
  const onClickRemove = (id) => {
    axios.delete(`${urlBag}/${id}`);
    setBagItems(function (prevItems) {
      return prevItems.filter((item) => item.id !== id);
    });
  };
  //метод удаления из избранного
  const onAddToFavorite = (obj) => {
    // Проверяем, есть ли элемент уже в избранном
    if (favorites.find((item) => item.name === obj.name)) {
      // Если да, то удаляем его из избранного
      setFavorites((prev) => prev.filter((elem) => elem.name !== obj.name));
    } else {
      // Если нет, то добавляем его в избранное
      setFavorites((prev) => [...prev, obj]);
    }
  };

  //метод поиска в каталоге
  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
  };
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
        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeInput={onChangeInput}
                onAddToBag={onAddToBag}
                clickFavorite={onAddToFavorite}
              />
            }
          />
          <Route
            path="/Catalog"
            element={
              <Catalog
                items={items}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeInput={onChangeInput}
                onAddToBag={onAddToBag}
                onAddToFavorite={onAddToFavorite}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favoriteElements={favorites}
                onAddToBag={onAddToBag}
                onAddToFavorite={onAddToFavorite}
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
