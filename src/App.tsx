import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import SignInPage from "./pages/signin/page/SignInPage";
import SignUpPage from "./pages/signup/page/SignUpPage";

const App: React.FC = () => (
      <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
      </Routes>
);

export default App;
