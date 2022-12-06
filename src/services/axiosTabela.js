import axios from "axios";

const apiCEP = axios.create({
   baseURL: "https://monsters-of-scom-back.onrender.com"
})
export default apiCEP;