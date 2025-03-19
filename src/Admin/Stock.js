import React, { useState } from "react";

const Stock = () => {
  const [formData, setFormData] = useState({
    description: "",
    category: "",
    images: [],
    price: "",
    color: "#000000", // Default color
    quantity: "",
  });

  const categories = ["Mugs", "T-Shirt", "Hoodies", "Phone Case"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 2) {
      alert("You can only upload up to 2 images.");
      return;
    }
    setFormData({ ...formData, images: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Stock data added successfully!");
  };

  return (
    <div className="container-fluid mt-4 col-11 mx-auto">
      <div className="card p-4 shadow border">
        <h2 className="fw-bold text-center text-primary mb-4">Add Stock</h2>
        <form onSubmit={handleSubmit}>
          {/* Product Description */}
          <div className="mb-3">
            <label className="form-label fw-bold text-primary">Product Description</label>
            <textarea
              name="description"
              className="form-control"
              rows="3"
              placeholder="Enter product description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Product Category */}
          <div className="mb-3">
            <label className="form-label fw-bold text-primary">Product Category</label>
            <select
              name="category"
              className="form-select"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Image Upload */}
          <div className="mb-3">
            <label className="form-label fw-bold text-primary">Upload Images (Max: 2)</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
          </div>

          {/* Price */}
          <div className="mb-3">
            <label className="form-label fw-bold text-primary">Price ($)</label>
            <input
              type="number"
              name="price"
              className="form-control"
              placeholder="Enter product price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Circular Color Picker */}
          <div className="mb-3">
            <label className="form-label fw-bold text-primary">Select Color</label>
            <div className="d-flex align-items-center">
              <input
                type="color"
                name="color"
                className="color-picker"
                value={formData.color}
                onChange={handleInputChange}
                title="Choose your color"
              />
              <span className="fw-bold ms-3">{formData.color}</span>
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-3">
            <label className="form-label fw-bold text-primary">Quantity</label>
            <input
              type="number"
              name="quantity"
              className="form-control"
              placeholder="Enter product quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Add Stock
          </button>
        </form>
      </div>

      {/* CSS Styles */}
      <style>
        {`
          .color-picker {
            width: 50px;
            height: 50px;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            overflow: hidden;
            padding: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Stock;
