import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter basename='/2024-wishlist'>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BrowserRouter>
  </React.StrictMode>
);
