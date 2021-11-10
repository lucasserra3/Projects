import Input from "./Input"
import React from "react"

function CrearJugador() {
  const [nombre, setNombre] = React.useState ();
  const [edad, setEdad] = React.useState ();
  const cambiarNombre = (evento) => {
    setNombre(evento.target.value)
  }
  const cambiarEdad = (evento) => {
    setEdad(evento.target.value)
  }
  return (
    <div className="CrearJugador">
      <header className="CrearJugador-header">
       <Input label="nombre" onChange={cambiarNombre}/>
       <Input label="edad" onChange={cambiarEdad}/>
       {nombre + edad}
      </header>
    </div>
  );
}

export default CrearJugador;