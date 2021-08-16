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

    if(response.status === 200) return {...response.data, error: false};
    else throw new Error(response.data?.error);
  } catch (err) {
    alert(err);
    return { error: true };
  } 
}

export const getInventory = async (userId) => {
  try {
    const header = {
      'Content-Type': 'application/json'
    }
    const response = await axios.get(`${backendUrl}/inventory?userId=${userId}`, { headers: header }).catch(err => err.response);
    return response.data;
  } catch (err) {
    alert(err)
  }
};

export const editUser = (email,name,username,password) =>{
    
}

export const getPokemons = async (numberOfPokemons) => {

  try {
    const response = await axios.get(`${backendUrl}/pokemon?numberOfPokemons=${numberOfPokemons}`).catch(err => err.response);

    if(response.status === 200) return response.data;
    else throw new Error(response.data?.error);
  } catch (err) {
    alert(err);
    return { error: true };
  } 
}

export const addPokemonToInventory = async ( userId, pokemonId) => {

try {
    const response = await axios.post(`${backendUrl}/inventory`, { userId, pokemonId }).catch(err => err.response);

    if(response.status === 200) return {...response.data, error: false};
    else throw new Error(response.data?.error);
  } catch (err) {
    alert(err);
    return { error: true };
  } 
}
