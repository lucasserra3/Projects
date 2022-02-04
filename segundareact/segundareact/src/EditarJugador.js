import Input from "./Input";
import React from "react";
import Select from "./Select";
import react from "react";

const lista = [
  { value: "arquero", label: "Arquero" },
  { value: "defensor", label: "Defensor" },
  { value: "mediocampista", label: "Mediocampista" },
  { value: "delantero", label: "Delantero" },
];

function EditarJugador({ editarJugador, jugador }) {
  const [nombre, setNombre] = React.useState();
  const [edad, setEdad] = React.useState();
  const [puesto, setPuesto] = React.useState();
  React.useEffect(() => {
    if (jugador) {
      setNombre(jugador.nombre);
      setEdad(jugador.edad);
      setPuesto(jugador.puesto);
    }
  }, [jugador]);
  const cambiarNombre = (evento) => {
    setNombre(evento.target.value);
    const newJugador = {nombre:evento.target.value,puesto,edad}
    editarJugador(newJugador)
  };
  const cambiarEdad = (evento) => {
    setEdad(evento.target.value);
    const newJugador = {edad:evento.target.value,puesto,nombre}
    editarJugador(newJugador)
  };
  const cambiarPuesto = (evento) => {
    setPuesto(evento.target.value);
    const newJugador = {puesto:evento.target.value,nombre,edad}
    editarJugador(newJugador)
  };

  return (
    <div className="EditarJugador">
      <header className="EditarJugador-header">
        <h2>Editar Jugador</h2>
        <Input label="nombre" onChange={cambiarNombre} value={nombre} />
        <Input label="edad" onChange={cambiarEdad} value={edad} />
        <Select lista={lista} onChange={cambiarPuesto} value={puesto} />
      </header>
    </div>
  );
}

export default EditarJugador;
