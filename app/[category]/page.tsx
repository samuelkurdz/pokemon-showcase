interface CategoryProps {
  params: { category: string };
}

import { CategoryDetail } from "@/lib/models";
import { PokemonsList } from "@/components/PokemonsList";
import axios from "axios";

async function getData(category: string) {
  const res = await axios<CategoryDetail>(
    `https://pokeapi.co/api/v2/type/${category}`
  );

  if (!res) {
    throw new Error("Failed to get data");
  }

  return res.data;
}

export default async function Category({ params }: CategoryProps) {
  const data = await getData(params.category);

  return (
    <PokemonsList
      pokemons={data.pokemon}
      category={params.category}
      pokemonsLength={data.pokemon.length}
    />
  );
}
