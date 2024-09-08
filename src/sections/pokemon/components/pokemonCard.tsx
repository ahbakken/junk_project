import { FC } from "react";
import { Accordion, Card, Image, List, Title } from "@mantine/core";
import { Pokemon } from "../types";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <Card shadow="lg" radius="md" withBorder bg="light-grey">
      <Title order={2} style={{ textTransform: "capitalize" }}>
        {pokemon?.name}
      </Title>
      <List>
        <List.Item>Base experience: {pokemon?.base_experience}</List.Item>
        <List.Item>Height: {pokemon?.height}</List.Item>
        <List.Item>Weight: {pokemon?.weight}</List.Item>
        <List.Item>
          Type: {pokemon.types.map((type) => type.type.name).join(", ")}
        </List.Item>
      </List>
      <Image
        src={pokemon?.sprites.front_default}
        alt={pokemon?.name}
        sizes="md"
      />
      <Accordion variant="separated">
        <Accordion.Item key="abilites" value="abilites">
          <Accordion.Control>Abilites</Accordion.Control>
          <Accordion.Panel>
            {pokemon.abilities.map((ability) => (
              <List key={ability.ability.name}>
                <List.Item>{ability.ability.name}</List.Item>
              </List>
            ))}
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item key="move" value="move">
          <Accordion.Control>Moves</Accordion.Control>
          <Accordion.Panel>
            {pokemon.moves.map((move) => (
              <List key={move.move.name}>
                <List.Item>{move.move.name}</List.Item>
              </List>
            ))}
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Card>
  );
};
