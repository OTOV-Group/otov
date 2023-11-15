import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import ContextProvider from "./ContextProvider/ContextProvider"
import { Toaster } from 'react-hot-toast'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
      <Toaster reverseOrder={true}/>
      <ContextProvider>
          <App />
      </ContextProvider>
  </BrowserRouter>
);