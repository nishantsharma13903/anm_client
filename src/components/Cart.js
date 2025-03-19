import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/Cart.css"; // Custom styles
import tshirt from "../assets/tshirts.png";
import { FaTrash } from "react-icons/fa"; 

const Cart = () => {
  return (
    <div className="container bg-light py-4">
      <div className="bg-white rounded p-4 shadow">
        <div className="col-12">
          <p className="text-dark review fw-bold">Review Your Order</p>
          <hr />

          <div className="row align-items-center">
            {/* Product Image */}
            <div className="col-4 d-flex">
              <img src={tshirt} alt="Product" className="img-fluid rounded" />
              <div className="px-4 ">
              <p className="text-dark">Basic T-Shirt</p>
              <p className="text-dark">White • Size: M</p>
              <p className="text-dark">- 1 +</p>

              </div>
            </div>
<div className="col-8 d-flex  justify-content-end">
<div className="d-flex flex-column justify-content-end">
              <p className="text-dark">$29.99</p>
              <p className="text-dark">
                <FaTrash style={{ color: "orange", cursor: "pointer" }} />
              </p>
             
            </div>
</div>



          </div>
        </div>
        <div className="col-12 pt-4">
         

          <div className="row align-items-center">
            {/* Product Image */}
            <div className="col-4 d-flex">
              <div className="px-2 ">
              <p className="text-dark">Subtotal</p>
              <p className="text-dark">Shipping and taxes calculated at checkout.</p>

              </div>
            </div>
<div className="col-8 d-flex  justify-content-end">
<div className="d-flex flex-column justify-content-end">
<p className="text-dark">$29.99</p>
  
            </div>
</div>
<div className="col-12 mt-4">
          <button className="btn btn-warning w-100 py-2 fw-bold">Proceed to Checkout</button>
          <div className="text-center mt-3">
            <a href="#" className="text-decoration-none">
              or <span className="text-warning">Continue Shopping</span>
            </a>
          </div>
        </div>



          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
