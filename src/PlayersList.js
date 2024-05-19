import React from 'react';
import Player from './Player';
import joueurs from './joueurs';

const PlayersList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {joueurs.map((joueur, index) => (
        <Player key={index} {...joueur} />
      ))}
    </div>
  );
};

export default PlayersList;
