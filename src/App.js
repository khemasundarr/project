import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Demos from "./Pages/Demos";
import Properties from "./Pages/Properties";
import Owners from "./Pages/Owners";
import Features from "./Pages/Features";
import Pages from "./Pages/Pages";
import Login from "./Pages/Login";
import Signup from"./Pages/Signup";
import submitproperty from"./Pages/submitproperty";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/'home={<Home/>}/>
        <Route path="/"demos={<Demos/>}/>
        <Route path="/"properties={<Properties/>}/>
        <Route path="/"owners={<Owners/>}/>
        <Route path="/"features={<Features/>}/>
        <Route path="/"pages={<Pages/>}/>
        <Route path="/"login={<Login/>}/>
        <Route path="/"signup={<Signup/>}/>
        <Route path="/"submitproperty={<Submitproperty/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
