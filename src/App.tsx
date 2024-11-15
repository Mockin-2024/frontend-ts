import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import SignInPage from "./pages/signin/SignInPage";
import SignUpPage from "./pages/signup/SignUpPage";
import MainPage from "./pages/main/MainPage";
import StockSpecPage from "./pages/stockSpec/StockSpecPage";

const App: React.FC = () => (
      <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/stock" element={<StockSpecPage />} />
      </Routes>
);

export default App;
