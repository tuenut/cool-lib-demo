import axios from "axios";


export const API_HOST = "http://localhost:8000"
axios.defaults.baseURL = API_HOST;


export const defaultFetcher = (url) => axios.get(url)
  .then(response => response.data);