import React, { useState, useEffect } from 'react';
import products from './products.json';


function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('./products.json');
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div>
      <nav>
        <div>
          <a href="/">Store</a>
        </div>
        <div>
          <a href="/cart">Cart ({cart.length})</a>
        </div>
      </nav>
      <main>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
