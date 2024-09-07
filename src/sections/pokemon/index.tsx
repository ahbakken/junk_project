import { Title, Stack } from "@mantine/core";
import PokemonSearch from "./components/pokemonSearch";

export default function PokemonSection() {
  return (
    <Stack bg="var(--mantine-color-body)" justify="center">
      <Title
        order={1}
        style={{
          marginTop: "7rem",
          marginRight: "7rem",
          marginLeft: "7rem",
          marginBottom: "3rem",
        }}
      >
        Pokemon today
      </Title>
      <PokemonSearch />
    </Stack>
  );
}
