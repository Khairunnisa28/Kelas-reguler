import React, { useState } from 'react';
import Cart from '../component/cart';
import Headling from '../image/head.jpg';
import Imgcart from '../image/cart.png';
import Ramen from '../image/ramen.jpg';
import Sushi from '../image/sushi.jpg';
import Kare from '../image/kare.jpg';
import Udon from '../image/Udon.jpg';
import Takoyaki from '../image/Takoyaki.jpg';
import Sashimi from '../image/Sashimi.jpg';
import Tempura from '../image/Tempura.jpg';
import Dorayaki from '../image/dorayaki.jpeg';
import Modal from 'react-bootstrap/Modal';

import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const initialProducts = [
    { id: 1, name: 'Ramen', price: 35000, quantity: 0, image: Ramen },
    { id: 2, name: 'Sushi', price: 60000, quantity: 0, image: Sushi },
    { id: 3, name: 'Kare', price: 45000, quantity: 0, image: Kare },
    { id: 4, name: 'Udon', price: 50000, quantity: 0, image: Udon },
    { id: 5, name: 'Takoyaki', price: 35000, quantity: 0, image: Takoyaki },
    { id: 6, name: 'Sashimi', price: 70000, quantity: 0, image: Sashimi },
    { id: 7, name: 'Tempura', price: 35000, quantity: 0, image: Tempura },
    { id: 8, name: 'Dorayaki', price: 30000, quantity: 0, image: Dorayaki },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cart, setCart] = useState([]);

  function openCartModal() {
    setIsCartModalOpen(true);
  }

  function closeCartModal() {
    setIsCartModalOpen(false);
  }

  function increaseOrderCount(id) {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  }

  function decreaseOrderCount(id) {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  }

  function addToCart(product) {
    if (product.quantity > 0) {
      setCart((prevCart) => [...prevCart, product]);
    }
  }

  return (
    <div className='contant'>
      <img src={Headling} className='img-head' alt='Header' />
      <h1>Mau makan apa hari ini?</h1>
      <button onClick={openCartModal}>
        <img src={Imgcart} alt='Keranjang Belanja' />
      </button>
      <Cart isOpen={isCartModalOpen} closeModal={closeCartModal} cart={cart} />
      <div className='card-container'>
        {products.map((product) => (
          <div className='card' key={product.id}>
            <img src={product.image} className='card-img-top' alt={product.name} />
            <div className='card-body'>
              <h5 className='card-title'>{product.name}</h5>
              <h6>Rp. {product.price}</h6>
              <div className='count-btn'>
                <button
                  type='button'
                  onClick={() => decreaseOrderCount(product.id)}
                  className='btn btn-light'
                >
                  -
                </button>
                {product.quantity}
                <button
                  type='button'
                  onClick={() => increaseOrderCount(product.id)}
                  className='btn btn-light'
                >
                  +
                </button>
              </div>
              <button className='btn btn-primary' onClick={() => addToCart(product)}>
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
