import React from "react";
import { useNavigate } from "react-router-dom";

export const PostCard = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <div className="row justify-content-start">
      {posts.map((post) => (
        <div className="col-lg-4 col-md-6 mb-4" key={post.postId}>
          <div
            className="card"
            onClick={() => navigate('/BlogDetail', { state: { post } })}
            style={{
              cursor: "pointer",
              height: "30vh",
            }}
          >
            <div className="card-body d-flex flex-column">
              <h5
                className="card-title p-2"
                style={{
                  backgroundColor: "#d1e7ff",
                  color: "#004085",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "100%",
                }}
              >
                {post.title}
              </h5>
              <p
                className="card-text p-2"
                style={{
                  backgroundColor: "#f8d7da",
                  color: "#721c24", 
                  flexGrow: 1, 
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3, 
                  marginBottom: 0,
                }}
              >
                {post.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
