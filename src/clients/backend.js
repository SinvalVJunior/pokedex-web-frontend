const axios = require('axios');
const backendUrl = "http://localhost:8080/api";


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

export const postLogin = async (email, password) => {
  try {
    const response = await axios.post(`${backendUrl}/login`, { email: email, password: password }).catch(err => err.response);

    if(response.status === 200) return response.data;
    else throw new Error("Somthing went wrong when trying to login.");
  } catch (err) {
    alert(err)
  }
}
