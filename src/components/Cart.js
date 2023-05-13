import React from 'react';
import { ListGroup } from 'react-bootstrap';

function Cart({ cart }) {
  return (
    <>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ListGroup>
          {cart.map((product) => (
            <ListGroup.Item key={product.id}>
              {product.name} - ${product.price}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
}

export default Cart;
