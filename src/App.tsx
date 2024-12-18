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
import MyAssetPage from "./pages/myasset/MyAssetPage";
import HistoryPage from "./pages/history/HistoryPage";
import TokenPage from "./pages/token/TokenPage";
import NewsPage from "./pages/news/NewsPage";
import FavoritePage from "./pages/favorite/FavoritePage";
import {FavoriteProvider} from "./context/FavoriteContext";

const App: React.FC = () => (
      <Routes>
          <Route path={AppRoutes.SIGN_IN} element={<SignInPage />} />
          <Route path={AppRoutes.SIGN_UP} element={<SignUpPage />} />
          <Route path={AppRoutes.MAIN} element={<MainPage />} />
          <Route path={AppRoutes.STOCK} element={<FavoriteProvider><StockSpecPage /></FavoriteProvider>} />
          <Route path={AppRoutes.ORDER} element={<OrderPage />} />
          <Route path={AppRoutes.SEARCH} element={<SearchPage />} />
          <Route path={AppRoutes.MY_ASSET} element={<MyAssetPage />} />
          <Route path={AppRoutes.HISTORY} element={<HistoryPage />} />
          <Route path={AppRoutes.TOKEN} element={<TokenPage />} />
          <Route path={AppRoutes.NEWS} element={<NewsPage />} />
          <Route path={AppRoutes.FAVORITE} element={<FavoriteProvider><FavoritePage /></FavoriteProvider>} />
      </Routes>
);

export default App;
