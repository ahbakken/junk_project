export interface Ability {
  name: string;
  url: string;
}

export interface AbilitySlot {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

export interface Cries {
  latest: string;
  legacy: string;
}

export interface Form {
  namedAPIResource: NamedAPIResource;
}

export interface GameIndex {
  game_index: number;
  version: NamedAPIResource[];
}

export type NamedAPIResource = {
  name: string;
  url: string;
};

export interface HeldItem {
  item: NamedAPIResource;
  version_details: HeldItemVersion[];
}

export interface HeldItemVersion {
  rarity: number;
  version: NamedAPIResource;
}

export interface Move {
  move: NamedAPIResource;
  version_group_details: MoveVersion[];
}

export interface MoveVersion {
  level_learned_at: number;
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
}

export interface PastType {
  generation: NamedAPIResource;
  types: Type[];
}

export interface Sprite {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

export interface Species {
  species: NamedAPIResource;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

export interface Type {
  slot: number;
  type: NamedAPIResource;
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: AbilitySlot[];
  forms: Form[];
  game_indices: GameIndex[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Move[];
  past_types: PastType[];
  sprites: Sprite;
  cries: Cries;
  species: Species;
  stats: Stat[];
  types: Type[];
}
