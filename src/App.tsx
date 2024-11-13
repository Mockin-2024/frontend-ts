import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import LoginPage from "./pages/login/page/LoginPage";

const App: React.FC = () => (
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
);

export default App;
