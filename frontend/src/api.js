import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const getCars = () => API.get("/cars");
export const askAI = (query) => API.post("/ai", { query });