import React from 'react';
import './App.css';

import {Routes, Route} from "react-router-dom";
import {AppRoutes} from "./enums/AppRoutes";

import SignInPage from "./pages/signin/SignInPage";
import SignUpPage from "./pages/signup/SignUpPage";
import MainPage from "./pages/main/MainPage";
import StockSpecPage from "./pages/stockSpec/StockSpecPage";
import OrderPage from "./pages/order/OrderPage";
import SearchPage from "./pages/search/SearchPage";

const App: React.FC = () => (
      <Routes>
          <Route path={AppRoutes.SIGN_IN} element={<SignInPage />} />
          <Route path={AppRoutes.SIGN_UP} element={<SignUpPage />} />
          <Route path={AppRoutes.MAIN} element={<MainPage />} />
          <Route path={AppRoutes.STOCK} element={<StockSpecPage />} />
          <Route path={AppRoutes.ORDER} element={<OrderPage />} />
          <Route path={AppRoutes.SEARCH} element={<SearchPage />} />
      </Routes>
);

export default App;
