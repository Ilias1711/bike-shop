function Feedback() {
  return (
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
  );
}

export default Feedback;
