import { useState } from "react";
import "./App.css";
import "./assets/scss/style.scss";
import AppRouter from "./router/AppRouter";
import { BrowserRouter} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
       
      </BrowserRouter>
    </>
  );
}

export default App;
