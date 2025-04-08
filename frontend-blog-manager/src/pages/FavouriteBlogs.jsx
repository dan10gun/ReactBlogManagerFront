import React, { useState, useEffect, useContext } from "react";
import blogApi from "../api/blogApi";
import { RequestContext } from "../components/RequestContext";
import { Search } from "../components/Search";
import { PostCard } from "../components/PostCard";

export const FavouriteBlogs = () => {
  const [posts, setPosts] = useState([]);
  const { request, setRequest } = useContext(RequestContext);

  useEffect(() => {
    setRequest((prevRequest) => ({
      ...prevRequest,
      Title: "",
      Description: "",
      Favourite: true,
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
        console.log("request:", request);
        console.log(response);
        setPosts(response.data.posts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    console.log("request at the end:", request);
  }, [request]);

    return (
      <div className="container">
        <div className="d-flex align-items-center mb-4">
          <Search />
        </div>
        <div className="row">
          <PostCard posts={posts} />
        </div>
      </div>
    );
};
