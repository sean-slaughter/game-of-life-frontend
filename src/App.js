import React from 'react';
import './App.css';
import GameContainer from './containers/GameContainer';
import Logo from './components/Logo'


function App() {
  return (
    <div className="App">
      <Logo/>
      <GameContainer/>
    </div>
  );
}

export default App;
