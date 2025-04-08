import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import blogApi from "../api/blogApi";
import { useNavigate } from "react-router-dom";


export const BlogDetail = () => {
  const location = useLocation();
  const { post } = location.state || {};
  const isEditMode = !!post?.postId;
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    title: post?.title || "",
    description: post?.description || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const updateblog = async () => {
    var request = {
    UserId: 1,
    PostId: post.postId,
    Title: formData.title,
    Description: formData.description
    }

    try {
        const response = await blogApi.put("/UpdateBlog", request);
        if (response.data.isSuccess) {
            alert("Post updated successfully!");
            navigate("/AllBlogs");
          } else {
            alert(`${response.data.message}`);
          }
      } catch (err) {
        alert("An error occurred while updating the post.");
      }
  }

  const createblog = async () => {
    var request = {
    UserId: 1,
    PostId: 0,
    Title: formData.title,
    Description: formData.description
    }

    try {
        const response = await blogApi.post("/CreateBlog", request);
        console.log(response)
        if (response.data.isSuccess) {
          alert("Post created successfully!");
          navigate("/AllBlogs");
        } else {
          alert(`${response.data.message}`);
        }
      } catch (err) {
        console.log(err);
        alert("An error occurred while creating the post.");
      }
  }

  const deleteblog = async () => {
    var request = {
    PostId: post.postId,
    }

    try {
        const response = await blogApi.delete("/DeleteBlog", { data: request });
        if (response.data.isSuccess) {
          alert("Post deleted successfully!");
          navigate("/AllBlogs");
        } else {
          alert(`${response.data.message}`);
        }
      } catch (err) {
        console.log(err);
        alert("An error occurred while deleting the post.");
      }
  
  }

  const handleSave = () => {
    if (isEditMode) {
        updateblog()
    } else {
        createblog()
    }
  };

  const handleDelete = () => {
    if (isEditMode) {
        deleteblog()
    }
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title bg-info text-white p-3 text-center">
            {isEditMode ? "Edit Post" : "Create Post"}
          </h5>
          <div className="d-flex flex-column" style={{ height: "70vh" }}>
            <div className="flex-grow-1 overflow-auto bg-light p-3">
              <div className="mb-3">
                <label className="form-label text-dark">Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-dark">Description</label>
                <textarea
                  name="description"
                  className="form-control"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-success mx-2" onClick={handleSave}>
          Save
        </button>
        {isEditMode && (
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};