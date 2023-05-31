import React from "react";
import Header from "./componentes/Header";
import Corpo from "./componentes/Corpo";
import Dados from "./componentes/Dados";
import "./index.css"

export default function App() {
  return (
    <div className="container">
      <Header />
      <Corpo />
      <Dados
        github='https://github.com/Eduardo-Quirino' portifolio='https://portifolioeduardoquirino.netlify.app/' />
    </div>
  )
}