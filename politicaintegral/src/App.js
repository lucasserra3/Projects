import "./App.css";
import React from "react";

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit={(evento)=>{
//evento.preventDefault();
console.log(evento)}
      }
        >

<div>
  <label htmlFor="userNameInput">Nombre</label>
  <input id="userNameInput" type="text"></input>
  <button type="submit">Sumbit</button>
</div>
</form>
        
      </header>
    </div>
  );
}

export default App;
