import React from "react";
import Logo from './_img/logo.jpeg'

export default function Header() {
    return (
        <header>
            <img src={Logo}  />
            <h1>Trabalhando com componentes</h1>
        </header>
    )
}