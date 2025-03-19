// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

// const Categories = () => {
//   return (
//     <div className="container-fluid mt-4">
//       <div className="col-11 mx-auto card p-4">
//         {/* Header */}
//         <div className="d-flex justify-content-between align-items-center">
//           <h2 className="fw-bold">Categories</h2>
//           <button
//             className="btn btn-primary"
//             data-bs-toggle="modal"
//             data-bs-target="#categoryModal"
//           >
//             <FaPlus className="me-1" /> Add Category
//           </button>
//         </div>

//         {/* Table */}
//         <div className="table-responsive mt-3">
//           <table className="table table-bordered table-hover">
//             <thead className="table-light">
//               <tr>
//                 <th>ID</th>
//                 <th>Category Name</th>
//                 <th>Description</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>Mug</td>
//                 <td>Custom printed mugs</td>
//                 <td>
//                   <button className="btn btn-sm btn-warning me-2" data-bs-toggle="modal" data-bs-target="#categoryModal">
//                     <FaEdit />
//                   </button>
//                   <button className="btn btn-sm btn-danger">
//                     <FaTrash />
//                   </button>
//                 </td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>Hoodie</td>
//                 <td>Warm hoodies with designs</td>
//                 <td>
//                   <button className="btn btn-sm btn-warning me-2" data-bs-toggle="modal" data-bs-target="#categoryModal">
//                     <FaEdit />
//                   </button>
//                   <button className="btn btn-sm btn-danger">
//                     <FaTrash />
//                   </button>
//                 </td>
//               </tr>
//               <tr>
//                 <td>3</td>
//                 <td>T-Shirt</td>
//                 <td>Casual T-shirts with prints</td>
//                 <td>
//                   <button className="btn btn-sm btn-warning me-2" data-bs-toggle="modal" data-bs-target="#categoryModal">
//                     <FaEdit />
//                   </button>
//                   <button className="btn btn-sm btn-danger">
//                     <FaTrash />
//                   </button>
//                 </td>
//               </tr>
//               <tr>
//                 <td>4</td>
//                 <td>Phone Case</td>
//                 <td>Stylish phone covers</td>
//                 <td>
//                   <button className="btn btn-sm btn-warning me-2" data-bs-toggle="modal" data-bs-target="#categoryModal">
//                     <FaEdit />
//                   </button>
//                   <button className="btn btn-sm btn-danger">
//                     <FaTrash />
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Modal */}
//       <div className="modal fade" id="categoryModal" tabIndex="-1" aria-labelledby="categoryModalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="categoryModalLabel">Add/Edit Category</h5>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <form>
//                 <div className="mb-3">
//                   <label className="form-label">Category Name</label>
//                   <input type="text" className="form-control" placeholder="Enter category name" />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Description</label>
//                   <textarea className="form-control" rows="3" placeholder="Enter category description"></textarea>
//                 </div>
//               </form>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               <button type="button" className="btn btn-primary">Save Category</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categories;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { Modal } from "bootstrap";

const API_URL = "https://anm-backend.onrender.com"; // Replace with your actual API URL

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [modalData, setModalData] = useState({
    name: "",
    description: "",
    image: null,
    imagePreview: "",
    id: null,
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/categories`);
      setCategories(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const resetModal = () => {
    setModalData({ name: "", description: "", image: null, imagePreview: "", id: null });
  };

  // ✅ Function to Show Modal
  const handleShowModal = () => {
    resetModal();
    const modalElement = document.getElementById("categoryModal");
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();
    }
  };

  // ✅ Function to Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setModalData((prevData) => ({ ...prevData, [name]: value }));
  };

  // ✅ Function to Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (modalData.id) {
        // Update category
        await axios.put(`${API_URL}/api/categories/${modalData.id}`, modalData);
      } else {
        // Create new category
        await axios.post(`${API_URL}/api/categories`, modalData);
      }
      fetchCategories();
      document.getElementById("closeModal").click(); // Close modal after submission
    } catch (error) {
      console.error("Error saving category:", error);
    }
  };

  return (
    <div className="container-fluid mt-4">
      <div className="col-11 mx-auto card p-4">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="fw-bold">Categories</h2>
          {/* ✅ Button to Open Modal */}
          <button className="btn btn-primary" onClick={handleShowModal}>
            <FaPlus className="me-1" /> Add Category
          </button>
        </div>

        {/* ✅ Categories Table */}
        <table className="table mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category.id}>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Modal for Adding/Editing Category */}
      <div className="modal fade" id="categoryModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{modalData.id ? "Edit Category" : "Add Category"}</h5>
              <button type="button" id="closeModal" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  className="form-control mb-3"
                  placeholder="Category Name"
                  value={modalData.name}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="description"
                  className="form-control mb-3"
                  placeholder="Description"
                  value={modalData.description}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="btn btn-primary">
                  {modalData.id ? "Update" : "Save"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
