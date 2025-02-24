import catalogImg from "../img/catalog_img_1.jpeg";
import catalogImg5 from "../img/catalog-img5.jpg";

function Bag() {
  return (
    <div style={{ display: "none" }} className="bag_outside">
      <div className="bag">
        <h2 className="bag_title">Корзина</h2>
        <div className="bag_list">
          <div className="bag_item">
            <img
              className="bag_item_img"
              src={catalogImg}
              alt="Товар-1"
              width="120"
              height="80"
            ></img>
            <div className="bag_item_descriotion_container">
              <p className="bag_description">Велосипед BMX Tech Team Goof 20</p>
              <span className="bag_price">12 830 руб</span>
            </div>
            <div className="bag_close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 16 16"
              >
                <path d="M 2.75 2.042969 L 2.042969 2.75 L 2.398438 3.101563 L 7.292969 8 L 2.042969 13.25 L 2.75 13.957031 L 8 8.707031 L 12.894531 13.605469 L 13.25 13.957031 L 13.957031 13.25 L 13.605469 12.894531 L 8.707031 8 L 13.957031 2.75 L 13.25 2.042969 L 8 7.292969 L 3.101563 2.398438 Z"></path>
              </svg>
            </div>
          </div>
          <div className="bag_item">
            <img
              className="bag_item_img"
              src={catalogImg5}
              alt="Товар-1"
              width="120"
              height="80"
            ></img>
            <div className="bag_item_descriotion_container">
              <p className="bag_description">
                Шлем велосипедный VSH 25 full lime
              </p>
              <span className="bag_price">1244 руб</span>
            </div>
            <div className="bag_close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 16 16"
              >
                <path d="M 2.75 2.042969 L 2.042969 2.75 L 2.398438 3.101563 L 7.292969 8 L 2.042969 13.25 L 2.75 13.957031 L 8 8.707031 L 12.894531 13.605469 L 13.25 13.957031 L 13.957031 13.25 L 13.605469 12.894531 L 8.707031 8 L 13.957031 2.75 L 13.25 2.042969 L 8 7.292969 L 3.101563 2.398438 Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="bag_result">
          <div className="bag_result_sum">
            <span className="bag_result_all">Итого:</span>
            <div className="bag_result_line"></div>
            <span className="bag_result_money">14744 руб.</span>
          </div>
          <button className="button">Заказать</button>
        </div>
      </div>
    </div>
  );
}

export default Bag;
