import React from "react";

export default function Dados(props) {
    return (
        <section className="dados">
            <p>Rede Social: {props.github}</p>
            <p>Portifólio: {props.portifolio}</p>
        </section>
    )
}