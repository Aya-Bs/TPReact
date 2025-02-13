import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function Product({name, price, img,  quantity,description,onBookEvent}) {
    const [like, setLike] = useState(0); // 0 = Dislike, 1 = Like
    const [currentQuantity, setCurrentQuantity] = useState(quantity); // Track quantity in state
    const soldOutImage = 'public/images/sold_out.png'; // Replace with the path to your "sold out" image
  const productImage = currentQuantity === 0 ? soldOutImage : img;
  const handleLike = () => {
    setLike(1);  // Set to true for Like
  };

  const handleDislike = () => {
    setLike(0);  // Set to false for Dislike
  };
    const toggleLike = () => {
      setLike((prevLike) => (prevLike === 0 ? 1 : 0)); // Toggle between 0 and 1
    };
    const handleBuyClick = () => {
        if (currentQuantity > 0) {
          setCurrentQuantity(currentQuantity - 1); // Decrease quantity by 1
          onBookEvent(); // Optional: Call the parent event handler if needed
        }
      };
      return (
          <Card style={{ width: '18rem', margin: '10px', height: '100%' }}>
            <Card.Img variant="top" src={productImage} alt={name} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>Prix : {price} </Card.Text>
                <Card.Text>Quantié dispo : {currentQuantity} </Card.Text>
                <Card.Text>Likes : {like} </Card.Text>
                
              </div>
              <div>
              <Button
            variant={like ? 'success' : 'secondary'} // Highlight "Like" button
            onClick={handleLike}
            disabled={like} // Disable if already liked
            style={{ marginRight: '10px' }}
          >
            Like
          </Button>
          <Button
            variant={!like ? 'danger' : 'secondary'} // Highlight "Dislike" button
            onClick={handleDislike}
            disabled={!like} // Disable if already disliked
          >
            Dislike
          </Button>
          
          <Button
            variant="primary"
            onClick={handleBuyClick}
            disabled={currentQuantity === 0} // Disable button when quantity is 0
          >
            {currentQuantity === 0 ? 'Sold Out' : 'Buy'}
          </Button>
          
              </div>
            </Card.Body>
          </Card>
        );


}
export default Product;