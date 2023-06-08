const axios = require('axios');

const x = async (id) => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
  const jsonData = await response.json();
  console.log(jsonData.moves);
}

const y = async (id) => {
  axios.get('https://pokeapi.co/api/v2/pokemon/' + id).then(resp => {
    console.log(resp.data.moves);
  });
}

x(2);
