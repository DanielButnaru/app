import { useState } from "react";
import "./App.css";
import "./assets/scss/style.scss";
import { HomePage } from "./pages/HomePage";
import { PagesTop } from "./components/PagesTop/PagesTop";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
     <AboutPage/>
    </>
  );
}

export default App;
