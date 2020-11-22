import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { HashRouter, BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Route component={App} />
    </HashRouter>
  </React.StrictMode>, 
  document.getElementById("root")
);
