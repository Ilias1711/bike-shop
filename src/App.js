import Header from "./components/Header";
import Bag from "./components/Bag";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";
import CatalogListElement from "./components/CatalogListElement";
import catalogImg from "./img/catalog_img_1.jpeg";
import catalogImg2 from "./img/catalog_img_2.jpeg";
import catalogImg5 from "./img/catalog-img5.jpg";
import catalogImg6 from "./img/catalog-img-6.jpg";
import contentImg from "./img/content_picture.png";

const catalogArray = [
  { name: "Велосипед BMXTech Team Goof 20", price: 12830 },
  { name: 'Горный велосипед29" TRINX', price: 13884 },
  { name: "Шлем велосипедный VSH 25 full lime", price: 1244 },
  { name: "Велосипед RUSH HOUR XS 925", price: 12830 },
];

function App() {
  return (
    <div className="bike-shop">
      <Bag />
      <Header />
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
              <CatalogListElement
                className="element-1"
                title="Велосипед BMXTech Team Goof 20"
                price="12830"
                imageUrl={catalogImg}
              />
              {/* {catalogArray.map(function (item) {
                  return <CatalogListElement />;
                })} */}
              <CatalogListElement
                className="element-2"
                title='Горный велосипед29"TRINX'
                price="13884"
                imageUrl={catalogImg2}
              />
              <div className="catalog_list_element element-3">
                <div className="element_description">
                  <h5 className="element_description_title">
                    Велосипед BMX Tech Team Goof 20
                  </h5>
                  <span className="element_description_price">12 830 руб</span>
                  <button className="button catalog_button">Купить</button>
                </div>
              </div>
              <div className="catalog_list_element element-4">
                <div className="element_description">
                  <h5 className="element_description_title">
                    Велосипед BMX Tech Team Goof 20
                  </h5>
                  <span className="element_description_price">12 830 руб</span>
                  <button className="button catalog_button">Купить</button>
                </div>
              </div>
              <CatalogListElement
                className="element-1"
                title="Шлем велосипедный VSH 25 full lime"
                price="1244"
                imageUrl={catalogImg5}
              />
              <CatalogListElement
                className="element-5"
                title="Велосипед BMXTech Team Goof 20"
                price="12830"
                imageUrl={catalogImg6}
              />
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
