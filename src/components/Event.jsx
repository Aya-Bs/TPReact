import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function Event({ 
  name, 
  description, 
  img, 
  price, 
  nbTickets, 
  nbParticipants, 
  onBookEvent // Fonction pour gérer la réservation
}) {
  const [like, setLike] = useState(false); // État pour gérer Like/Dislike

  // Fonction pour basculer entre Like et Dislike
  const toggleLike = () => {
    setLike((prevLike) => !prevLike);
  };

  return (
    <Card style={{ width: '18rem', margin: '10px', height: '100%' }}>
      <Card.Img variant="top" src={img} alt={name} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Prix : {price} </Card.Text>
          <Card.Text>Billets disponibles : {nbTickets}</Card.Text>
          <Card.Text>Participants : {nbParticipants}</Card.Text>
        </div>
        <div>
          <Button
            variant={like ? 'success' : 'danger'} // Change la couleur du bouton
            onClick={toggleLike} // Appelle la fonction pour basculer Like/Dislike
            style={{ marginRight: '10px' }}
          >
            {like ? 'Like' : 'Dislike'}
          </Button>
          <Button
            variant="primary"
            onClick={onBookEvent}
            disabled={nbTickets === 0} // Désactive le bouton si plus de billets disponibles
          >
            {nbTickets === 0 ? 'Sold Out' : 'Book an event'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Event;