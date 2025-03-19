import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "./Style/feature.css"; // Custom styles

import tshirt from "../assets/tshirt.png";
import { useNavigate } from "react-router-dom";

const FeaturedThemes_2 = () => {

  const navigate = useNavigate("");

  const products = [
    { img: tshirt, title: "Geometric Pattern Tee", reviews: 124, price: "$29.99" },
    { img: tshirt, title: "Geometric Pattern Tee", reviews: 124, price: "$29.99" },
    { img: tshirt, title: "Geometric Pattern Tee", reviews: 124, price: "$29.99" },
  ];

  return (
    <div className="container text-center featured mt-4">
      <h2 className="fw-bold ">Featured Designs</h2>
      <div className="row mt-4">
        {products.map((product, index) => (
          <div key={index} className="col-md-4" onClick={() => {
            navigate('/products')
          }}>
            <Card className="border-0 shadow-sm">
              <Card.Img variant="top" src={product.img} alt={product.title} />
              <Card.Body className="bg-light">
                <Card.Title className="fw-bold">{product.title}</Card.Title>
                <p className="text-warning mb-1">
                  {"\u2605\u2605\u2605\u2605\u2605"} <span className="text-muted">({product.reviews} reviews)</span>
                </p>
                <h5 className="text-danger fw-bold">{product.price}</h5>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedThemes_2;
