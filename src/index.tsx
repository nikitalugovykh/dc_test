import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { App } from './components'
import './styles/app.global.scss'
import { store } from './store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


