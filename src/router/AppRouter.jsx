import React, { useState } from "react";

import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "../pages/home";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";
import { GlobalStyle } from "../style/GlobalStyle";
import PrivateRouter from "./PrivateRouter";
import Register from "../pages/register/Register";
const AppRouter = () => {
  const [islogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
      <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={<Login setIsLogin={setIsLogin} />}
        />
        <Route
          path="/"
          element={<PrivateRouter islogin={islogin} setIsLogin={setIsLogin} />}
        >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
