import React from "react";
import "./App.css";
import Box from "./Components/Box/Box";

function App() {
  return (
    <div className="App">
      <Box name="Maria" title="CEO" age="39" />
      <Box name="Kati" title="Developer" age="20" />
      <Box name="Karin" title="Desinger" age="42" />
    </div>
  );
}

export default App;
