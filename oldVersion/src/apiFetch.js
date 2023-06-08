class PokeApiFetchAdapter {
  async getData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const jsonData = await response.json();
    console.log(jsonData);
    
  }
}
