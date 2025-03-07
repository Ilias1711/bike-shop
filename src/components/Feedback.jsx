function Feedback() {
  return (
    <div className="feedback">
      <div
        className="feedback_bike"
        style={{ backgroundImage: `url("/img/feedback_img.jpeg")` }}
      ></div>
      <div
        className="feedback_container"
        style={{ backgroundImage: `URL("/img/feedback_img.jpeg")` }}
      >
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
  );
}

export default Feedback;
