import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Product from './Product';

function Products() {
      const [showWelcomeMessage, setShowWelcomeMessage] = useState(false); // État pour afficher le message de bienvenue
    
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('src/data/products.json') // Chemin relatif depuis le dossier public
          .then((response) => {
            if (!response.ok) {
              throw new Error('Réponse réseau non OK');
            }
            return response.json();
          })
          .then((data) => setProducts(data))
          .catch((error) => console.error('Erreur lors de la récupération des événements :', error));
      }, []);
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
            {showWelcomeMessage && (
        <Alert variant="success" onClose={() => setShowWelcomeMessage(false)} dismissible className="welcome-alert">
          Hey, welcome to Esprit Events!
        </Alert>
      )}
          <h1>Products</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {products.map((product) => (
              <Product
                key={product.id}
                name={product.name}
                price={product.price}
                img={product.img}
                quantity={product.quantity}
                description={product.description}
                onBookEvent={() => console.log(`Booking ${product.name}`)} // Ajouter un event handler
              />
            ))}
          </div>
        </div>
      );
      


}
export default Products;