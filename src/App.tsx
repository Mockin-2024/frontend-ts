import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import SignInPage from "./pages/signin/page/SignInPage";

const App: React.FC = () => (
      <Routes>
        <Route path="/" element={<SignInPage />} />
      </Routes>
);

export default App;
