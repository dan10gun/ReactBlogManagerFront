import axios from "axios"


const blogApi =  axios.create({
  baseURL: "https://localhost:7285/api/v1/BlogActions",
});

export default blogApi;