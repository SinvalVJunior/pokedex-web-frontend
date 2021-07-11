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

export const getInventory = async (userId) => {

  return [
    {
      name: 'bulbasaur',
      stats: {
        hp: 45,
        attack: 49,
        specialAttack: 65,
        defence: 49,
        specialDefence: 65,
        speed: 45
      },
      species: {
        curiosity: "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKÉMON.",
        color: "green",
        baseHappiness: 70,
        captureRate: 45,
        evolvesFrom: "",
        evolvesTo: "ivysaur",
        habitat: "grassland",
        hasGenderDifferences: false,
        isMythical: false,
        isLegendary: false,
        shape: 'quadruped',
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
      },
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif'
    },
    {
      name: 'ivysaur',
      stats: {
        hp: 60,
        attack: 62,
        specialAttack: 80,
        defence: 63,
        specialDefence: 80,
        speed: 60
      },
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif'
    },

  ];
};
