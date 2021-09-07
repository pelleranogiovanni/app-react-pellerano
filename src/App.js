import * as React from "react";
import './App.css';
import "@material-tailwind/react/tailwind.css";
import Desafio from "./components/Desafio";
import MenuHeader from "./components/MenuHeader";




const App = () => {

  return (
    <div className="App">
        <MenuHeader />
        <Desafio />
        
    </div>
  );
}

export default App;
