import React from "react";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routers/AppRouter/AppRouter";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
