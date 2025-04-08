import React, { useState } from "react";
import blogApi from "../api/blogApi";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    var request = {
      Email: email,
      Password: password,
    };
    const fetchData = async () => {
      try {
        const response = await blogApi.post("/Login",request);

        if (response.data.isSuccess) {
          localStorage.setItem('StoreUserId', response.data.logins[0].userId);          
          alert("Login Successful");
          onLogin();
          navigate("/AllBlogs");
        } else {
          alert(`${response.data.message}`);
        }
      } catch (err) {
        console.log(err);
        alert("An error occurred while logging");
      }
    };
    fetchData();
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <div className="p-4 border rounded shadow">
          <h3 className="text-center mb-4">Login</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-4">
              Login
            </button>
          </form>

          <div className="text-center mt-3">
            <span>
              Don't have an account? <a href="/signup">Create Account</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
