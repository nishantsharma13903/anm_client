// import React, { useState, useCallback } from "react";
// import Cropper from "react-easy-crop";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaUpload } from "react-icons/fa";

// import { FaUndo, FaRedo } from "react-icons/fa";

// const Process = () => {
 
// };

// export default Process;



"use client"

import { useState, useRef, useCallback } from "react"
import Cropper from "react-easy-crop"
import "bootstrap/dist/css/bootstrap.min.css"
import { FaUpload, FaUndo, FaRedo } from "react-icons/fa"
import tshirtImage from "../assets/tshirt.png";
import hoodieImage from "../assets/hoodies.png";
import mugImage from "../assets/mugs.png";
import { useNavigate } from "react-router-dom";


const Process = () => {
  const navigate = useNavigate();
  // Product selection state
  const [selectedProduct, setSelectedProduct] = useState("tshirt")

  // Image upload and manipulation states
  const [image, setImage] = useState(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  // Customization options
  const [size, setSize] = useState("")
  const [color, setColor] = useState("white")
  const [quantity, setQuantity] = useState(1)

  const fileInputRef = useRef(null)

  // Product images
  const products = {
    tshirt: tshirtImage,
    hoodie: hoodieImage,
    mug: mugImage,
  };
  
  const productDisplayImages = {
    tshirt: tshirtImage,
    hoodie: hoodieImage,
    mug: mugImage,
  };
  // Handle product selection
  const handleProductSelect = (product) => {
    setSelectedProduct(product)
  }

  // Handle image upload
  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener("load", () => {
        setImage(reader.result)
        // Add to history
        const newHistory = history.slice(0, historyIndex + 1)
        newHistory.push({ crop: { x: 0, y: 0 }, zoom: 1, image: reader.result })
        setHistory(newHistory)
        setHistoryIndex(newHistory.length - 1)
      })
      reader.readAsDataURL(e.target.files[0])
    }
  }

  // Trigger file input click
  const handleUploadClick = () => {
    fileInputRef.current.click()
  }

  // Handle crop complete
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  // Handle crop change
  const onCropChange = (newCrop) => {
    setCrop(newCrop)
  }

  // Handle zoom change
  const onZoomChange = (newZoom) => {
    setZoom(newZoom)
  }

  // Save crop state to history
  const saveCropToHistory = () => {
    const newHistory = history.slice(0, historyIndex + 1)
    newHistory.push({ crop, zoom, image })
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
  }

  // Undo action
  const handleUndo = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1
      const { crop, zoom, image } = history[newIndex]
      setCrop(crop)
      setZoom(zoom)
      setImage(image)
      setHistoryIndex(newIndex)
    }
  }

  // Redo action
  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1
      const { crop, zoom, image } = history[newIndex]
      setCrop(crop)
      setZoom(zoom)
      setImage(image)
      setHistoryIndex(newIndex)
    }
  }

  // Handle quantity change
  const handleQuantityChange = (value) => {
    const newQuantity = Number.parseInt(value)
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity)
    }
  }

  // Increment quantity
  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  // Decrement quantity
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  // Add to cart
  const handleAddToCart = () => {
    alert("Product added to cart!")
  }

  return (
    <div className="container py-4">
      <div className="row">
        {/* Left Column - Product Selection */}
        <div className="col-md-3">
          <h4 className="mb-4">Select Product</h4>

          <div className="card mb-3 product-card" onClick={() => handleProductSelect("tshirt")}>
            <div className="card-body text-center">
              <img
                src={products.tshirt || "/placeholder.svg"}
                alt="T-Shirt"
                className="img-fluid mb-2"
                style={{ maxHeight: "120px" }}
              />
              <p className="mb-0 text-dark">T-Shirt</p>
            </div>
          </div>

          <div className="card mb-3 product-card" onClick={() => handleProductSelect("hoodie")}>
            <div className="card-body text-center">
              <img
                src={products.hoodie || "/placeholder.svg"}
                alt="Hoodie"
                className="img-fluid mb-2"
                style={{ maxHeight: "120px" }}
              />
              <p className="mb-0 text-dark">Hoodie</p>
            </div>
          </div>

          <div className="card mb-3 product-card" onClick={() => handleProductSelect("mug")}>
            <div className="card-body text-center">
              <img
                src={products.mug || "/placeholder.svg"}
                alt="Mug"
                className="img-fluid mb-2"
                style={{ maxHeight: "120px" }}
              />
              <p className="mb-0 text-dark">Mug</p>
            </div>
          </div>
        </div>

        {/* Middle Column - Product Preview */}
        <div className="col-md-6">
          <div className="card p-4 bg-light">
            <div className="product-preview-container position-relative">
              <img
                src={productDisplayImages[selectedProduct] || "/placeholder.svg"}
                alt={selectedProduct}
                className="img-fluid d-block mx-auto"
                style={{ maxHeight: "400px" }}
              />

              {image ? (
                <div
                  className="design-area position-absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100px",
                    height: "100px",
                    overflow: "hidden",
                  }}
                >
                  <Cropper
                    image={image}
                    crop={crop}
                    zoom={zoom}
                    aspect={1}
                    onCropChange={onCropChange}
                    onCropComplete={onCropComplete}
                    onZoomChange={onZoomChange}
                    onInteractionEnd={saveCropToHistory}
                  />
                </div>
              ) : (
                <div
                  className="design-placeholder position-absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100px",
                    height: "100px",
                    border: "2px dashed #ccc",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    fontSize: "12px",
                    color: "#777",
                    cursor: "pointer",
                  }}
                  onClick={handleUploadClick}
                >
                  <div className="upload-icon mb-2">
                    <FaUpload />
                  </div>
                  <div>
                    Drop your design here
                    <br />
                    or click to upload
                  </div>
                </div>
              )}
            </div>

            <div className="d-flex justify-content-center mt-4">
              <button className="btn btn-light me-2" onClick={handleUndo} disabled={historyIndex <= 0}>
                <FaUndo /> Undo
              </button>
              <button className="btn btn-light me-2" onClick={handleRedo} disabled={historyIndex >= history.length - 1}>
                <FaRedo /> Redo
              </button>
              <button
                className="btn btn-primary"
                style={{ backgroundColor: "#c17a41", borderColor: "#c17a41" }}
                onClick={handleUploadClick}
              >
                Upload Design
              </button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
          </div>
        </div>

        {/* Right Column - Customization Options */}
        <div className="col-md-3">
          <h4 className="mb-4">Customize Options</h4>

          <div className="mb-3">
            <label className="form-label">Size</label>
            <select className="form-select" value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="">Select size</option>
              <option value="s">Small</option>
              <option value="m">Medium</option>
              <option value="l">Large</option>
              <option value="xl">X-Large</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Color</label>
            <div className="d-flex">
              {["white", "navy", "red", "blue", "green", "gold"].map((colorOption) => (
                <div
                  key={colorOption}
                  className="color-option me-2"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: colorOption,
                    border: color === colorOption ? "2px solid #000" : "1px solid #ddd",
                    cursor: "pointer",
                  }}
                  onClick={() => setColor(colorOption)}
                />
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label">Quantity</label>
            <div className="input-group">
              <button className="btn btn-outline-secondary" type="button" onClick={decrementQuantity}>
                -
              </button>
              <input
                type="text"
                className="form-control text-center"
                value={quantity}
                onChange={(e) => handleQuantityChange(e.target.value)}
              />
              <button className="btn btn-outline-secondary" type="button" onClick={incrementQuantity}>
                +
              </button>
            </div>
          </div>
          <button
      className="btn btn-primary w-100"
      style={{ backgroundColor: "#c17a41", borderColor: "#c17a41" }}
      onClick={() => navigate("/cart")} // Navigate to /cart
    >
      Add to Cart
    </button>
        </div>
      </div>
    </div>
  )
}

export default Process;
