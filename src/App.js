import React from 'react';
import './App.css';
import PlayersList from './PlayersList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cartes des Joueurs FIFA</h1>
        <PlayersList />
      </header>
    </div>
  );
}

export default App;
