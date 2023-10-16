import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    -ms-overflow-style: none;
 }
 
::-webkit-scrollbar {
  display: none;

}
html, body, h1, input, select {font-family: 'Fira Sans', sans-serif, arial, sans-serif}
body, h1 {font-size:14px; }
h1 {font-weight:normal;margin:0;padding:0}
h3 {font-weight:normal;margin:0;padding:0;font-size:20px;line-height:1.3}
body {margin:0;background:#fff;color:#202124;}
a {color:#1a0dab;text-decoration:none;-webkit-tap-highlight-color:rgba(0, 0, 0, .10)}
a:visited {color:#609}
a:hover {text-decoration:underline}
cite, cite a:link, cite a:visited {color:#202124;font-style:normal}
button {margin:0}
ol, ul, li {list-style:none}
ol, ul, li {margin:0;padding:0}
input {font-size:14px}
em {font-weight:bold;font-style:normal}
.swiper-button-next,
.swiper-button-prev {
  background-color: white;
  border: 1px solid #ccc;
  color: white;
  width: 30px;
  height: 50px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  color: black;
  font-weight: bold;
  font-size: 30px;
}
`;

export default GlobalStyles;
