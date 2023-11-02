import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
import DetailUser from "./components/Users/DetailUser";
import Youtobe from "./components/Youtobe_Search/Youtobe";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/users" element={<Users></Users>}></Route>
        <Route index element={<Home></Home>}></Route>
        <Route path="/users/:id" element={<DetailUser></DetailUser>}></Route>
        <Route path="/youtobe" element={<Youtobe></Youtobe>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
