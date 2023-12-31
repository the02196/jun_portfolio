import React from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import store, { stopAnimation } from "./store";
import { Provider, useDispatch, useSelector } from "react-redux";
import GlobalStyles from "./GlobalStyles";
import Main from "./pages/Main";
import Developer from "./pages/Developer";
import Director from "./pages/Director";
import Photographer from "./pages/Photographer";
import "./fonts.css";
import Navigator from "./components/Navigator";
import DeveloperMode from "./components/DeveloperMode";
import About from "./pages/About";
import Footer from "./components/Footer";
import UpDown from "./components/UpDown";
import Comments from "./pages/Comments";



function App() {

  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        {/* <Navigator/>  */}
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/developer" element={<Developer />}></Route>
          <Route path="/director" element={<Director />}></Route>
          <Route path="/photographer" element={<Photographer />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/comments" element={<Comments />}></Route>
        </Routes>
        <DeveloperMode />
        <Footer />
        <UpDown />
      </Provider>
    </>
  );
}

export default App;
