import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import { Variable } from "./dasar/Variable";
// import StateProps from "./dasar/StateProps";
// import Map from "./dasar/Map";
// import Lifecycle from "./dasar/Lifecycle";

import "bootstrap/dist/css/bootstrap.min.css";
import Crud from "./crud";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>
);
