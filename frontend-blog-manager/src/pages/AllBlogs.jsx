import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import blogApi from "../api/blogApi";
import { RequestContext } from "../components/RequestContext";
import { Search } from "../components/Search";
import { PostCard } from "../components/PostCard";

export const AllBlogs = () => {
  const [posts, setPosts] = useState([]);
  const { request, setRequest } = useContext(RequestContext);
  const navigate = useNavigate();

  useEffect(() => {
    setRequest((prevRequest) => ({
      ...prevRequest,
      Title: "",
      Description: "",
      Favourite: false,
      Personal: false,
    }));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await blogApi.get("/GetBlogs", {
            params: {
              ...request
            }
          });
        
        setPosts(response.data.posts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [request]);

  const handleCreatePost = () => {
    navigate("/BlogDetail", { state: { post: null } });
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center mb-4">
        <Search />
        <button className="btn btn-primary ms-auto" onClick={handleCreatePost}>
          Create Post
        </button>
      </div>
      <div className="row">
        <PostCard posts={posts} />
      </div>
    </div>
  );
};
