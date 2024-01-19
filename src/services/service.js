import axios from "axios";
export default class Service {
    static async getPokemon(offset, limit) {
        let data = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
        );
        let pokemon = data.data.results.map((p) => p.url);
        let pokemonDetails = await Promise.all(pokemon.map(async (p) => {
            let r = await axios.get(p);
            return {
                name: r.data.name,
                img: r.data.sprites.front_default
            };
        }));
        return pokemonDetails;
    }
}
