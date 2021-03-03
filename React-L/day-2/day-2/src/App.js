import React from "react";
import './App.css';

//components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SidePenel from "./components/SidePenel";

 const App =() => {
  return (
    <div className="App">
      <NavBar />
      <SidePenel />
      <Footer />
    </div>
   )
 };

export default App;
