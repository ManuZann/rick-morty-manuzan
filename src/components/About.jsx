import React from "react";
import { Link } from "react-router-dom";


export default function About(){
    return(
        <div>
            <h1>About</h1>
            <h2>Manuel Zanon</h2>
            <h3>La Rick And Morty App es una aplicacion que permite al usuario ingresar un ID para importar un personaje, o utilizar el boton random para generar uno aleatoriamente</h3>
            <h3>Clickeando en el nombre del personaje podras acceder a su informacion.</h3>
            <h3>Ademas, podras seleccionar tus personajes favoritos para poder acceder a ellos desde la pestaña favoritos.</h3>
            <Link to="/home"><button>Volver</button></Link>
        </div>
    )
}