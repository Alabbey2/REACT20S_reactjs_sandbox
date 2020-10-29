import React from "react";
import Animal from "./Components/Animal/Animal";
import "./App.css";

const App = () => {
  return (
    <div className="cards">
      <Animal name="Fox" img="https://source.unsplash.com/AjZjBEjQ5Cw/" />
      <Animal name="Rabbit" img="https://source.unsplash.com/hS41iEO300E/" />
      <Animal name="Wolf" img="https://source.unsplash.com/WFPWB7Vum1E/" />
    </div>
  );
};

export default App;
