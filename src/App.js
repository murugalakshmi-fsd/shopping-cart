import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH82ZswpzOZsTsgf7z5-rHZgYcnJsPTPw-1w&usqp=CAU', name: 'Saree', price:'$40-$80', inCart: false },
    { id: 2, url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9pW8Yo9APdaRUS6ODF_V9RNaNliyqzOE7IA&usqp=CAU' ,name: 'chudithar', price:'$20-$40', inCart: false },
    { id: 3, url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Pr8xo4g4BnWWv5lAP_WJX8CWLSad5S4fEQ&usqp=CAU', name: 'Men-Shirt', price:'$30-$60', inCart: false },
    { id: 4, url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5o-3E_wYVMkuQHnopW1hYJA-csCzzFqMvQ&usqp=CAU', name: 'Men-Pant', price:'$40-$80',inCart: false },
    { id: 5, url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVo8Vj4wZ6OzgUtRij9h5pnB_lo5HO8oo5w&usqp=CAU', name: 'Kids Wear', price:'$30-$50', inCart: false },
    { id: 6, url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Xob4WqpZ3N2UUuT4KW0dMLe3MO8mfpoeVQ&usqp=CAU',name: 'Western', price:'$20-$40', inCart: false },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === product.id ? { ...p, inCart: true } : p
      )
    );
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (product) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === product.id ? { ...p, inCart: false } : p
      )
    );
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  return (
    <div>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!">Start Your Purchase</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#!">All Products</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a class="dropdown-item" href="#!">New Arrivals</a></li>


                            </ul>
                        </li>
                    </ul>
                    <Cart cart={cart} />
                </div>
            </div>
        </nav>
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Galaxy</h1>
                    <p class="lead fw-normal text-white-50 mb-0">With this shop purchase the star products</p>
                </div>
            </div>
        </header>
      <div>
      <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
                </div>
            </div>
        </section>
       
      </div>
      <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright © Your Website 2023</p></div>
        </footer>
    </div>
  );
};

export default App;