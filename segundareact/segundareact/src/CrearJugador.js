import Input from "./Input";
import React from "react";
import Select from "./Select";
import Button from "./Button";

const lista = [
  { value: "arquero", label: "Arquero" },
  { value: "defensor", label: "Defensor" },
  { value: "mediocampista", label: "Mediocampista" },
  { value: "delantero", label: "Delantero" },
];

function CrearJugador({agregarJugador}) {
  const [nombre, setNombre] = React.useState("pepe");
  const [edad, setEdad] = React.useState("18");
  const [puesto, setPuesto] = React.useState("arquero");
  const cambiarNombre = (evento) => {
    setNombre(evento.target.value);
  };
  const cambiarEdad = (evento) => {
    setEdad(evento.target.value);
  };
  const cambiarPuesto = (evento) => {
    setPuesto(evento.target.value);
  };
  const crearJugador = ()=>{
    agregarJugador(nombre, edad, puesto)
  } 
  return (
    <div className="CrearJugador">
      <header className="CrearJugador-header">
        <Input label="nombre" onChange={cambiarNombre} value={nombre}/> 
        <Input label="edad" onChange={cambiarEdad} value={edad}/>
        <Select lista={lista} onChange={cambiarPuesto}/>
        <Button onClick={crearJugador} texto="agregarJugador"/>
        
      </header>
    </div>
  );
}

export default CrearJugador;
