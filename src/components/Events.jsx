import React, { useState, useEffect } from 'react';
import Event from './Event'; // Assurez-vous que le chemin est correct
import Alert from 'react-bootstrap/Alert';

function Events() {
  const [events, setEvents] = useState([]);
  const [showAlert, setShowAlert] = useState(false); // Pour afficher le message de réservation
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false); // État pour afficher le message de bienvenue


  useEffect(() => {
    fetch('src/data/events.json') // Chemin relatif depuis le dossier public
      .then((response) => {
        if (!response.ok) {
          throw new Error('Réponse réseau non OK');
        }
        return response.json();
      })
      .then((data) => setEvents(data))
      .catch((error) => console.error('Erreur lors de la récupération des événements :', error));
  }, []);
  useEffect(() => {
    // Afficher le message de bienvenue après le montage
    setShowWelcomeMessage(true);

    // Faire disparaître le message après 3 secondes
    const timer = setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 3000);

    // Nettoyer le timer lors du démontage du composant
    return () => clearTimeout(timer);
  }, []);

  // Fonction pour gérer la réservation d'un événement
  const handleBookEvent = (eventId) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId
          ? {
              ...event,
              nbParticipants: event.nbParticipants + 1,
              nbTickets: event.nbTickets - 1,
            }
          : event
      )
    );
    
    // Afficher le message de réservation
    setShowAlert(true);

    // Faire disparaître le message après 2 secondes
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  useEffect(() => {
    // Afficher le message de bienvenue après le montage
    setShowWelcomeMessage(true);

    // Faire disparaître le message après 3 secondes
    const timer = setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 3000);
    return () => clearTimeout(timer);
}, []);


  return (
    <div>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          You have booked an event!
        </Alert>
      )}
      {showWelcomeMessage && (
        <Alert variant="success" onClose={() => setShowWelcomeMessage(false)} dismissible className="welcome-alert">
          Hey, welcome to Esprit Events!
        </Alert>
      )}
<div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {events.map((event) => (
        <Event
          key={event.id} // Utilisez l'ID de l'événement comme clé
          name={event.name}
          description={event.description}
          img={event.img}
          price={event.price}
          nbTickets={event.nbTickets}
          nbParticipants={event.nbParticipants}
          like={event.like}
          onBookEvent={() => handleBookEvent(event.id)} // Passe la fonction de réservation
        />
      ))}
          </div>

    </div>
  );
}

export default Events;