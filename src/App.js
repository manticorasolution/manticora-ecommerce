import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './contexts/cart';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <CartProvider>
          <Routes />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
