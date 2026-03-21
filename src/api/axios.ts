import axios from "axios";

const api = axios.create({
  baseURL: "http://98.130.136.82:3000/api",
  withCredentials: true, // send session cookies on every request
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
