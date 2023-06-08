import axios from 'axios'

class Pokemon {
  id: number;
  name: string;
  adapter: string;
 
  constructor(id: number) {
    this.id = id;
    // this.name = name;
    // this.adapter = adapter; 
  }
 
  getMoves() {
    return "Hello, " + this.name;
  }
}
 
// let greeter = new Pokemon(1);

class PokeApiAxiosAdapter {
  id: number;

  constructor (id) {
    this.id = id;
  }

  getData = (id) => {
    const y = async (id) => {
      axios.get('https://pokeapi.co/api/v2/pokemon/' + id).then(resp => {
        console.log(resp.data.moves);
      });
    }
  }
}



// class PokeApiFetchAdapter {
//   async getData() {
//     const y = async (id) => {
//       axios.get('https://pokeapi.co/api/v2/pokemon/' + id).then(resp => {
//         console.log(resp.data.moves);
//       });
//     }
    
//   }
// }
