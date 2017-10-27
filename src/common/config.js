import Axios from "axios";

export const API_URL = "/api/feeds";
export const DOMAIN_URL = "https://inloop-webproject.herokuapp.com";
export const BASE_URL = DOMAIN_URL + API_URL;

export const feedsApi = Axios.create({ baseURL: BASE_URL,
   headers: { "Content-Type": "application/json" }});
