import * as React from "react";
import './App.css';
import "@material-tailwind/react/tailwind.css";
import NavBar from "./components/NavBar";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {

  return (
    <div className="App">
        <NavBar />      
        <ItemCount />
        <ItemListContainer />
    </div>
  );
}

export default App;
