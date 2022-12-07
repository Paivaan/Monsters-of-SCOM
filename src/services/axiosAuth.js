import axios from './axiosTabela'

const userAuth = {
   postLogIn: async function postLogIn(body) {
      const loginData = await axios.post('/users/login', body)
      if (loginData)
         return loginData.data
   }
} 
export default userAuth