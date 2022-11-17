import React, {useState} from "react";
import './App.scss';
import {BrowserRouter, Link} from "react-router-dom";
import AppRouter from "./routers/AppRouter/AppRouter";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import logo from './assets/img/HomePage/logo.jpg'
import NavigationModal from "./components/NavigationModal/NavigationModal";

function App() {
  let [isOpen, setIsOpen] = useState(false)

  function openMenu() {
    document.getElementById('check').checked=!document.getElementById('check').checked;
    setIsOpen(!isOpen);
  }
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='menu__wrapper'>
          <Link className="logo__wrapper" to='/'>
            <img className='logo' src={logo} alt='logo'/>
          </Link>

          <label className='labelMenu' htmlFor="check" >
            <input className='inputMenu' type="checkbox" id="check" onClick={() => setIsOpen(!isOpen)}/>
            <span className='spanMenu'></span>
            <span className='spanMenu'></span>
            <span className='spanMenu'></span>
          </label>


        </div>

        <Navigation/>
        <NavigationModal
          isOpen={isOpen}
          openMenu={openMenu}
        />
        <AppRouter />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
