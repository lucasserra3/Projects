import "./App.css";
import React from "react";
import CrearJugador from "./CrearJugador";
import Jugador from "./Jugador";
import EditarJugador from "./EditarJugador";

const jugadores = [
  { nombre: "lucas", edad: "17", puesto: "defensor" },
  {
    nombre: "nico",
    edad: "17",
    puesto: "delantero",
  },
  {
    nombre: "pepe",
    edad: "30",
    puesto: "arquero",
  },
  {
    nombre: "jose",
    edad: "100",
    puesto: "mediocampista",
  },
];

function App() {
  const [listaDeJugadores, setlistaDeJugadores] = React.useState(jugadores);
  const [selectedIndex, setSelectedIndex] = React.useState();
  function borrarJugador(index) {
    const newLista = [...listaDeJugadores];
    newLista.splice(index, 1);
    setlistaDeJugadores(newLista);
  }
  function agregarJugador(nombre, edad, puesto) {
    const newLista = [...listaDeJugadores];
    newLista.push({ nombre, edad, puesto });
    setlistaDeJugadores(newLista);
  }
  function seleccionarJugador(index) {
    setSelectedIndex(index);
  }
  function editarJugador(jugador) {
    const newLista = [...listaDeJugadores];
    newLista[selectedIndex] = jugador;
    setlistaDeJugadores(newLista);
  }
  return (
    <>
      <CrearJugador agregarJugador={agregarJugador} />
      {listaDeJugadores.map(({ nombre, edad, puesto }, index) => (
        <Jugador
          index={index}
          selected={selectedIndex === index}
          onClick={() => seleccionarJugador(index)}
          nombre={nombre}
          edad={edad}
          puesto={puesto}
          borrarJugador={() => borrarJugador(index)}
        />
      ))}
      <EditarJugador
        jugador={listaDeJugadores.find(
          (item, index) => index === selectedIndex
        )}
        editarJugador={editarJugador}
      />
      {listaDeJugadores.find((index) => index === selectedIndex)}
    </>
  );
}

export default App;
