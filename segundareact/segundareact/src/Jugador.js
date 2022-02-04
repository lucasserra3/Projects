import React from "react";
import Etiqueta from "./Badge";
import Button from "./Button";
import Card from "./Card";

const Jugador = ({nombre, edad, puesto,borrarJugador, onClick, selected}) => {
   return ( <Card selected={selected} onClick={onClick}>
        <h2>{nombre}</h2> 
        <h3>{edad}</h3>
        <Etiqueta texto={puesto}/>
        <Button onClick={borrarJugador} texto="delete"/>
    </Card>
    )
}

export default Jugador