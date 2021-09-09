import * as React from "react";
import './App.css';
import "@material-tailwind/react/tailwind.css";
import NavBar from "./components/NavBar";
import Desafio from "./components/Desafio";

const App = () => {

  return (
    <div className="App">
        <NavBar />      
        {/* <Desafio /> */}
    </div>
  );
}

export default App;
