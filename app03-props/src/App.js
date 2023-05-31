import React from "react";
import "./index.css"
import Header from "./components/Header";
import Corpo from "./components/Corpo";
import Dados from "./components/Dados";

export default function App() {
  return (
    <div>
      <Header />
      <Corpo />
      <Dados 
      github = 'https://github.com/Eduardo-Quirino'
      portifolio = 'https://portifolioeduardoquirino.netlify.app/'
      />
    </div>
  )
}