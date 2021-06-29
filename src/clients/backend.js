const axios = require('axios');
const backendUrl = "http://localhost:8080";


export const getUserInfo = async () => {
    try {
      const header = {
        'Content-Type': 'application/json'
      }
      const response = await axios.get(`${backendUrl}/users`, { headers: header }).catch(err => err.response);
      return response.data;
    } catch (err) {
      alert(err)
    }
  }
