import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GreetingCat from "./pages/GreetingCat";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cat/:greeting" element={<GreetingCat/>} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;