import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [h1, setH1] = useState("Marco");
  const [btn, setBtn] = useState("Polo");

  const handleClick = () => {
      setH1(btn);
      setBtn(h1);
  }

  return (
    <div id="main">
      <h1 id="marco-polo">{h1}</h1>
      <button id="marco-polo-toggler" onClick={handleClick}>{btn}</button>
    </div>
  )
}


export default App;
