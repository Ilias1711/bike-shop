import React, { useState } from "react";
import Header from "./components/Header/Header";
import Bag from "./components/Bag/Bag";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";
import CatalogListElement from "./components/CatalogListElement/CatalogListElement";
import CatalogListNew from "./components/CatalogListNew/CatalogListNew";
// import catalogImg from "./img/catalog_img_1.jpeg";
import catalogImg2 from "./img/catalog_img_2.jpeg";
import catalogImg3 from "./img/catalog_img_3.jpeg";
import catalogImg4 from "./img/catalog_img_4.jpeg";
import catalogImg5 from "./img/catalog-img5.jpg";
import catalogImg6 from "./img/catalog-img-6.jpg";
import contentImg from "./img/content_picture.png";

const catalogArray = [
  {
    name: "Велосипед BMXTech Team Goof 20",
    price: 12830,
    imageUrl: "./img/catalog_img_1.jpeg",
    listNumber: "element1",
  },
  {
    name: 'Горный велосипед29" TRINX',
    price: 13884,
    imageUrl: catalogImg2,
    listNumber: "element2",
  },
  {
    name: "Шлем велосипедный VSH 25 full lime",
    price: 1244,
    imageUrl: catalogImg5,
    listNumber: "element5",
  },
  {
    name: "Велосипед RUSH HOUR XS 925",
    price: 12830,
    imageUrl: catalogImg6,
    listNumber: "element6",
  },
];

const catalogArrayNew = [
  {
    name: " Велосипед BMX Tech Team Goof 20",
    price: 12830,
    imageUrl: catalogImg3,
    listNumber: "element3",
  },
  {
    name: "Велосипед BMX Tech Team Goof 30",
    price: 14700,
    imageUrl: catalogImg4,
    listNumber: "element4",
  },
];

function App() {
  const [opened, setOpened] = React.useState(false);
  return (
    <div className="bike-shop">
      {opened ? <Bag onCloseBag={() => setOpened(false)} /> : null}
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
              <img src={contentImg}></img>
            </div>
          </div>
        </div>
        <Feedback />
        <div className="catalog">
          <div className="catalog_container">
            <div className="catalog_header">
              <h2 className="catalog_title">Каталог</h2>
              <input
                className="catalog_search"
                type="text"
                placeholder="Поиск"
              ></input>
            </div>
            <div className="catalog_list">
              {catalogArray.map(function (item) {
                return (
                  <CatalogListElement
                    title={item.name}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    listNumber={item.listNumber}
                    onClickBag={() => {
                      console.log("ClickPlus");
                    }}
                  />
                );
              })}
              {catalogArrayNew.map((item) => {
                return (
                  <CatalogListNew
                    title={item.name}
                    price={item.price}
                    image={item.imageUrl}
                    listNumber={item.listNumber}
                    onClickBag={() => {
                      console.log("ClickButton");
                    }}
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
