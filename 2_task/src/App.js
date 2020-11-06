import React, { Component } from "react";
import Animal from "./Components/Animal/Animal";
import "./App.css";

class App extends Component {
  state = {
    animals: [
      { name: "Fox", img: "https://source.unsplash.com/AjZjBEjQ5Cw/" },
      { name: "Rabbit", img: "https://source.unsplash.com/hS41iEO300E/" },
      { name: "Wolf", img: "https://source.unsplash.com/WFPWB7Vum1E/" },
    ],
  };

  render() {
    const animalsList = this.state.animals.map((e) => {
      return <Animal key={e.name} name={e.name} img={e.img} />;
    });
    return <div className="cards"> {animalsList} </div>;
  }
}

export default App;
