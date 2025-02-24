import Header from "./components/Header";
import Bag from "./components/Bag";
import Footer from "./components/Footer";
import catalogImg from "./img/catalog_img_1.jpeg";
import catalogImg2 from "./img/catalog_img_2.jpeg";
import catalogImg5 from "./img/catalog-img5.jpg";
import catalogImg6 from "./img/catalog-img-6.jpg";
import contentImg from "./img/content_picture.png";

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
        <div className="feedback">
          <div className="feedback_bike"></div>
          <div className="feedback_container">
            <p className="feedback_info">
              Укажите номер телефона и мы с вам свяжемся для обсуждения заказа.
            </p>
            <div className="feedback_request">
              <input
                className="feedback_phone"
                id="phone"
                placeholder="Телефон"
              ></input>
              <button className="button feedback_button">Отправить</button>
            </div>
          </div>
        </div>
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
              <div className="catalog_list_element element-1">
                <img
                  className="catalog_element_img "
                  src={catalogImg}
                  alt="Товар-1"
                  width="140"
                  height="91"
                ></img>
                <h3 className="catalog_element_title">
                  Велосипед BMX Tech Team Goof 20
                </h3>
                <span className="catalog_element_price">12 830 руб</span>
                <button className="button catalog_button">Купить</button>
              </div>
              <div className="catalog_list_element element-2">
                <img
                  className="catalog_element_img"
                  src={catalogImg2}
                  alt="Товар-2"
                  width="140"
                  height="91"
                ></img>
                <h3 className="catalog_element_title">
                  Горный велосипед 29" TRINX
                </h3>
                <span className="catalog_element_price">13 884 руб</span>
                <button className="button catalog_button">Купить</button>
              </div>
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
              <div className="catalog_list_element element-5">
                <img
                  className="catalog_element_img"
                  src={catalogImg5}
                  alt="Товар-3"
                  width="140"
                  height="91"
                ></img>
                <h3 className="catalog_element_title">
                  Шлем велосипедный VSH 25 full lime
                </h3>
                <span className="catalog_element_price">1244 руб</span>
                <button className="button catalog_button">Купить</button>
              </div>
              <div className="catalog_list_element element-6">
                <img
                  className="catalog_element_img"
                  width="140"
                  height="91"
                  src={catalogImg6}
                  alt="Товар-4"
                ></img>
                <h3 className="catalog_element_title">
                  Велосипед RUSH HOUR XS 925
                </h3>
                <span className="catalog_element_price">12 830 руб</span>
                <button className="button catalog_button">Купить</button>
              </div>
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
