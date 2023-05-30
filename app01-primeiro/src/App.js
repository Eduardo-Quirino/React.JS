import React from "react";
import "./index.css"

export default function App() {
  {/*Função */ }
  const canal = () => {
    return ('CFB Cursos')
  }

  const curso = 'React.JS'
  return (
    <main>
      <header>
        <h1>Desenvolvedor Eduardo Quirino</h1>
        <p>Programação de futuro.</p>
        <h4>{'Curso: ' + curso}</h4>
        <p>{canal()}</p> {/* chama função*/}
      </header>
      <section>
        <img src="./_img/40 Workstation Setups That We Really Like.jpeg" />
        <img src="./_img/Armário de Escritório_ +56 Ideias para Organizar seu Home Office.jpeg" />
      </section>

      {/* <img src={Escritorio2} /> */}

    </main>
  )
}
