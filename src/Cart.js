// Cart.js
import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div>
      <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            {"Cart"}
                            <span class="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span>
                        </button>
                    </form>

    </div>
  );
};

export default Cart;
