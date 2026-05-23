import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // send session cookies on every request
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
