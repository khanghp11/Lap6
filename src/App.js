import "./App.css";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import CSS bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
