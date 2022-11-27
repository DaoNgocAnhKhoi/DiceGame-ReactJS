import React from 'react';
import './App.css';
import DiceGame from './component/DiceGame/DiceGame';
// export NODE_OPTIONS=--openssl-legacy-provider 
function App() {


  return (
    <div className="App">
      <div style={{background: 'url(../images/bgGame.png)', width: '100vw', height: '100vh'}}>
      <DiceGame></DiceGame>
      </div>
      
    </div>
    
  );
}

export default App;
  