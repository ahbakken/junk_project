import { NamedAPIResource, Pokemon } from "./types";

enum PokemonLimit {
  limit = 2000,
}

export async function getPokemon(id: number | string) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
  const data = await response.json();
  return data as Pokemon;
}

export const getAllPokemon = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=" + PokemonLimit.limit
  );
  const data = await response.json();
  return data.results as NamedAPIResource[];
};
