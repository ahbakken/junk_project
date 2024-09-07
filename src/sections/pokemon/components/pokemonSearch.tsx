import { Autocomplete, Button, Flex } from "@mantine/core";
import { useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "../util";
import { NamedAPIResource, Pokemon } from "../types";
import { PokemonCard } from "./pokemonCard.tsx";

export default function PokemonSearch() {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();
  const [pokemonList, setPokemonList] = useState<string[]>();
  const [search, setSearch] = useState("");

  const handleClick = async () => {
    if (search) {
      setPokemon(await getPokemon(search));
    }
  };

  useEffect(() => {
    const itemsString = localStorage.getItem("pokemonList");
    if (itemsString) {
      const allPokemon = JSON.parse(itemsString);
      setPokemonList(allPokemon);
    } else {
      const getAllPokemonList = async () => {
        const allPokemon = await getAllPokemon();
        if (allPokemon) {
          localStorage.setItem(
            "pokemonList",
            JSON.stringify(
              allPokemon.map((pokemon: NamedAPIResource) => pokemon.name)
            )
          );
        }
      };
      getAllPokemonList();
    }
  }, []);

  return (
    <>
      <Flex gap="md" align="flex-end">
        <Autocomplete
          size="xl"
          label="Search for a Pokemon"
          placeholder="example Squirtle"
          maxDropdownHeight={200}
          data={pokemonList}
          value={search}
          onChange={setSearch}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleClick();
            }
          }}
        />
        <Button onClick={handleClick} variant="filled" size="xl">
          Search
        </Button>
      </Flex>
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </>
  );
}
