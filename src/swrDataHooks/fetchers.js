import axios from "axios";

import { API_HOST } from "./urls";


axios.defaults.baseURL = API_HOST;


export const defaultFetcher = (url) => axios.get(url)
  .then(response => response.data);