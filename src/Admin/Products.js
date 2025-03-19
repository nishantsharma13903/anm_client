import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import pc1 from "../assets/pc1.png";
import pc2 from "../assets/pc2.png";
import pc3 from "../assets/pc3.png";
import pc4 from "../assets/pc4.png";

const Products = () => {
  const productsData = [
    { id: 101, name: "Cups", category: "Cups", color: "#3498db", description: "High-end gaming laptop", price: "$1200", images: [pc1, pc2] },
    { id: 102, name: "T-Shirt", category: "T-Shirt", color: "#e74c3c", description: "Latest smartphone", price: "$800", images: [pc3, pc4] },
    { id: 101, name: "Cups", category: "Cups", color: "#3498db", description: "High-end gaming laptop", price: "$1200", images: [pc1, pc2] },
    { id: 102, name: "T-Shirt", category: "T-Shirt", color: "#e74c3c", description: "Latest smartphone", price: "$800", images: [pc3, pc4] },
    { id: 101, name: "Cups", category: "Cups", color: "#3498db", description: "High-end gaming laptop", price: "$1200", images: [pc1, pc2] },
    { id: 102, name: "T-Shirt", category: "T-Shirt", color: "#e74c3c", description: "Latest smartphone", price: "$800", images: [pc3, pc4] },
    { id: 101, name: "Cups", category: "Cups", color: "#3498db", description: "High-end gaming laptop", price: "$1200", images: [pc1, pc2] },
    { id: 102, name: "T-Shirt", category: "T-Shirt", color: "#e74c3c", description: "Latest smartphone", price: "$800", images: [pc3, pc4] },
    { id: 101, name: "Cups", category: "Cups", color: "#3498db", description: "High-end gaming laptop", price: "$1200", images: [pc1, pc2] },
    { id: 102, name: "T-Shirt", category: "T-Shirt", color: "#e74c3c", description: "Latest smartphone", price: "$800", images: [pc3, pc4] },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = productsData.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid mt-4">
      <div className="d-flex justify-content-between align-items-center col-11 mx-auto">
        <h2 className="fw-bold mt-4">Products Dashboard</h2>
      </div>

      <div className="col-md-11 mx-auto mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row mt-4 col-12 mx-auto">
        <div className="col-md-11 mx-auto">
          <div className="bg-white shadow-sm rounded p-3">
            <h5 className="fw-bold mb-3">Product List</h5>
            <table className="table">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Color</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Images</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>
                        <div
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: product.color,
                          }}
                        ></div>
                      </td>
                      <td>{product.description}</td>
                      <td>{product.price}</td>
                      <td>
                        {product.images.slice(0, 2).map((img, index) => (
                          <img
                            key={index}
                            src={img}
                            alt="product"
                            className="me-2"
                            style={{ width: "100px", height: "100px" }}
                          />
                        ))}
                      </td>
                      <td>
                        <button className="btn btn-primary btn-sm me-2">Edit</button>
                        <button className="btn btn-warning btn-sm me-2">Update</button>
                        <button className="btn btn-danger btn-sm">Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center">
                      No products found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;