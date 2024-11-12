import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Page1 from "./pages/example/page/Page1";

const App: React.FC = () => (
      <Routes>
        <Route path="/" element={<Page1 />} />
      </Routes>
);

export default App;
