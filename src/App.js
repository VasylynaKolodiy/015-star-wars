import React from "react";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routers/AppRouter/AppRouter";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <AppRouter/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
