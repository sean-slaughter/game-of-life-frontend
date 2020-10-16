import React from 'react';
import './App.css';
import Logo from './components/Logo';
import GameContainer from './containers/GameContainer'


function App() {
  return (
    <div className="App">
      <Logo/>
      <GameContainer/>
    </div>
  );
}

export default App;
