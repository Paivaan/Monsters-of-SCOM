import axios from "axios";

const apiCEP = axios.create({
   baseURL: "https://monsters-of-scom.herokuapp.com"
})
export default apiCEP;