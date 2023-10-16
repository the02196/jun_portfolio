import React from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import GlobalStyles from "./GlobalStyles";
import Main from "./pages/Main";
import Developer from "./pages/Developer";
import Director from "./pages/Director";
import Photographer from "./pages/Photographer";
import "./fonts.css";
import Navigator from "./components/Navigator";
import DeveloperMode from "./components/DeveloperMode";

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        {/* <Navigator/> */}
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/developer" element={<Developer />}></Route>
          <Route path="/director" element={<Director />}></Route>
          <Route path="/photographer" element={<Photographer />}></Route>
        </Routes>
        <DeveloperMode />
      </Provider>
    </>
  );
}

export default App;
