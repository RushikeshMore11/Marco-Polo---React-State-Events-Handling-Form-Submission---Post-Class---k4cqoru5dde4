import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [alter,setAlter] = useState(false);

  const handleClick = () =>{
    if(alter == false)
    setAlter(true);
    else
    setAlter(false);
  }

  return (
    <div id="main">
      <h1 id="marco-polo">{alter?"Marco":"Polo"}</h1>
      <button id="marco-polo-toggler" onClick={handleClick}>{alter?"Polo":"Marco"}</button>
    </div>
  )
}


export default App;
