import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import './index.css'
import Connexion from './page/Connexion.js';
import Welcome from "./page/Welcome.js";
import AccountPage from './page/AccountPage.js';
import ErrorType from './page/ErrorType.js';
import Error404 from './page/Error404.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

const AppRouter = () => {

  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/Connexion" element={<Connexion />} />
            <Route path="/AccountPage" element={ <AccountPage />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </Router>
      </Provider>
    </React.StrictMode>
  );
};

root.render(<AppRouter />);
