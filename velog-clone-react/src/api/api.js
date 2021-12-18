import axios from "axios";

const fetcher = axios.create({ baseURL: "http://localhost:5005/api/article" });
export default fetcher;
