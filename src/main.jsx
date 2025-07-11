import React from "react";
import ReactDOM from "react-dom/client" ;
import {HashRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css" ;
import "bootstrap-icons/font/bootstrap-icons.css" ;
import "./index.css" ;

import App from "./App" ;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App/>
  </HashRouter>
);