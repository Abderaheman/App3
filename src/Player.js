import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ nom, equipe, nationalite, numero, age, image }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{nom}</Card.Title>
        <Card.Text>
          Équipe : {equipe}<br />
          Nationalité : {nationalite}<br />
          Numéro : {numero}<br />
          Âge : {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  nom: "Inconnu",
  equipe: "Inconnu",
  nationalite: "Inconnu",
  numero: 0,
  age: 0,
  image: "https://via.placeholder.com/150"
};

export default Player;
