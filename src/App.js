import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Landingpage from "./Pages/Landingpage";
import Home from "./Pages/Home";
import Demos from "./Pages/Demos";
import Properties from "./Pages/Properties";
import Owners from "./Pages/Owners";
import Features from "./Pages/Features";
import Pages from "./Pages/Pages";
import Login from "./Pages/Login";
import Signup from"./Pages/Signup";
import Submitpropertys from"./Pages/Submitpropertys";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/demos"element={<Demos/>}/>
        <Route path="/properties"element={<Properties/>}/>
        <Route path="/owners"element={<Owners/>}/>
        <Route path="/features"element={<Features/>}/>
        <Route path="/pages"element={<Pages/>}/>
        <Route path="/login"element={<Login/>}/>
        <Route path="/signup"element={<Signup/>}/>
        <Route path="/submitpropertys"element={<Submitpropertys/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
