import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/global.scss";
import "./index.css";
// import "./scss/header.scss";
import "./scss/content.scss";
import "./scss/feedback.scss";
import "./scss/catalog.scss";
import "./scss/footer.scss";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
