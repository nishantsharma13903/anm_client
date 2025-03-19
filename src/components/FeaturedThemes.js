import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";

import "./Style/feature.css";
import { useNavigate } from "react-router-dom";

const themes = [
  { img: f1, name: "Artistic", color: "border-gradient-purple" },
  { img: f2, name: "Nature", color: "border-gradient-green" },
  { img: f3, name: "Retro", color: "border-gradient-orange" },
  { img: f4, name: "Tech", color: "border-gradient-blue" },
  { img: f5, name: "Pop Culture", color: "border-gradient-red" },
  { img: f5, name: "Pop Culture", color: "border-gradient-red" },
  
];

const FeaturedThemes = () => {

  const navigate = useNavigate("");

  return (
    <div className="container text-center pt-5">
      <h2 className="fw-bold pb-5 featured">Featured Themes</h2>
      <div className="row justify-content-between g-5 mx-0">
        {themes.map((theme, index) => (
          <div key={index} className="col-auto" onClick={() => {
            navigate('/products')
          }}>
            <div className={`theme-circle ${theme.color}`}>
              <img src={theme.img} alt={theme.name} className="img-fluid" />
            </div>
            <p className="mt-2 fw-semibold theme-name">{theme.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedThemes;
