import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./scss/global.scss";
import "./index.css";
import "./scss/content.scss";
import "./scss/feedback.scss";
import "./scss/catalog.scss";
import "./scss/footer.scss";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
