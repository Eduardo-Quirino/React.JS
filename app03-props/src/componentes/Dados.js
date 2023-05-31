import React from "react";

export default function Dados(props) {
    return (
        <section>
            <p>Git Hub: {props.github}</p>
            <p>Portifólio: {props.portifolio}</p>
        </section>
    )
}