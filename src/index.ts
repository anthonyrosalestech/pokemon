import axios from "axios";
import { PokeapiResponse, Move } from "./interface";

class Pokemon {
  id: number;
  name: string;
  data: any;

  constructor(id: number, option?: boolean) {
    let data: any;

    if (option) data = new PokeApiFetchAdapter();
    else data = new PokeApiAxiosAdapter();

    this.id = id;
    this.data = data;
  }

  public get getName() {
    return this.name;
  }

  public set setName(name: string) {
    this.name = name;
  }

  getMoves(option?: boolean) {
    // let data: Move;
    // data = this.data;
    // console.log(data);

    // if (option) data = new PokeApiFetchAdapter();
    // else data = new PokeApiAxiosAdapter();

    // data = await data.getData(this.id);

    // console.log(data);
    // return this.data;

    let data = Promise.all([this.data.getData(this.id)]).then((res) => {
      return res[0].moves;
    });

    return data;
  }
}

class PokeApiFetchAdapter {
  public async getData(id: number): Promise<PokeapiResponse> {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
    const jsonData = await response.json();
    return jsonData;
  }
}

class PokeApiAxiosAdapter {
  public async getData(id: number): Promise<PokeapiResponse> {
    // axios.get("https://pokeapi.co/api/v2/pokemon/" + id).then((resp) => {
    //   console.log(resp.data.moves);
    // });
    let resp = await axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
    return resp.data;
  }
}

// Agregar true para fetch y false para axios
let poke = new Pokemon(13, false);
// console.log(poke.getMoves().then(res => console.log(res)));
poke.getMoves().then((res: Move) => console.log(res));
