// Product.js
import React from 'react';

const Product = ({ product, addToCart, removeFromCart }) => {
  return (
    <div>
        <div class="col mb-5">
                        <div class="card h-100">
                            
                            <div class="badge bg-dark text-white position-absolute" style={{top:"0.5rem",right: "0.5rem"}}>{"Sale"}</div>
                            
                            <img class="card-img-top" src={product.url} alt="..." width="200" height="200"/>
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                
                                    <h5 class="fw-bolder">{product.name}</h5>
                                    <p>{product.description}</p>

                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    
                                    <span class="text-muted">{product.price}</span>
                                    
                                </div>
                            </div>
                            
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center">{product.inCart ? (
        <button class="btn btn-outline-dark mt-auto" onClick={() => removeFromCart(product)}>Remove from Cart</button>
      ) : (
        <button class="btn btn-outline-dark mt-auto" onClick={() => addToCart(product)}>Add to Cart</button>
      )}</div>
                            </div>
                        </div>
                    </div>
      
            
    </div>
  );
};

export default Product;
