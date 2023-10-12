import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global.ts';
import Routes from './Routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
);