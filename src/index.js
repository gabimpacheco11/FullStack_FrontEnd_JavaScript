//Index.js é onde o projeto começa, a parte mais crua do projeto!

import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './rotas/Home';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
// importação de componentes responsaveis pela rota da pagina front, onde o usuario irá clicar e ser direcionado
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './componentes/Header';
import Favoritos from './rotas/Favoritos';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;
  }

`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Pagina Home */}
      <Route path="/" element={<Home/>}/> 
      <Route path="/favoritos" element={<Favoritos/>}/>
      </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
