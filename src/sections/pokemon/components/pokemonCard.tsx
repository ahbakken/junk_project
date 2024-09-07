import { FC } from "react";
import { Card, Image, Title } from "@mantine/core";
import { Pokemon } from "../types";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <Card shadow="lg" radius="md" withBorder>
      <Title order={2}>{pokemon?.name}</Title>
      <Image src={pokemon?.sprites.front_default} alt={pokemon?.name} />
    </Card>
  );
};
