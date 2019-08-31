import React,  { useState } from 'react';
import { async } from 'q'; 


function App() {

  const [ respuesta, setRespuesta ] = useState("");
  const urlAPISecret = 'http://localhost:3000/setsecret/';
  const urlAPIGuess = 'http://localhost:3000/guess/';
  const [ secret, setS ] = useState("");

  const handleEdit = (event) => {
    const eventValue = event.target.value;
    if (eventValue !== null) {
        setS(eventValue);
    }
  }

  const setSecret = async () => {
    const resp = await fetch(urlAPISecret + secret);
    const data = await resp.json();
    setRespuesta(data.message);
    console.log(data);
  }

  const guessNumber = async () => {
    const resp = await fetch(urlAPIGuess + secret);
    const data = await resp.json();
    console.log(data);
    setRespuesta(data.result);
  }

  return (
    <div>
        <input type="secret" id="secret" placeholder="Number" onChange={handleEdit} />
        <button id = "setsecret" onClick={setSecret}>Set Secret</button>
        <button id = "guess" onClick={guessNumber}>Guess</button>

        <div> {respuesta}</div>
    </div>
  );
}

export default App;
