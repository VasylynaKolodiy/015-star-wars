import React, {useState} from "react";
import './App.css';
import {BrowserRouter, Link} from "react-router-dom";
import AppRouter from "./routers/AppRouter/AppRouter";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import logo from './assets/img/HomePage/logo.jpg'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Link className="logoWrapper" to='/'>
          <img className='logo' src={logo} alt='logo'/>
        </Link>
        <Navigation/>
        <AppRouter />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
