import Link from "next/link";
import Image from "next/image";
import { CategoryResponse } from "@/lib/models";
import axios from "axios";

async function getData() {
  const res = await axios<CategoryResponse>("https://pokeapi.co/api/v2/type");

  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to get data");
  }

  return res.data;
}

export default async function Home() {
  const data = await getData();
  const POKEMON_TYPE_URL = "https://pokeapi.co/api/v2/type/";

  return (
    <main className="space-y-5">
      <h4 className="font-semibold text-lg space-x-1">
        <span>Pokemons categories</span>
        <span className="text-xs">({data.results.length})</span>
      </h4>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.results.map(({ name, url }) => (
          <Link
            key={name}
            href={`${name}`}
            className="group shadow-sm hover:shadow border rounded py-2.5 px-4"
          >
            <h4 className="group-hover:underline capitalize font-medium mb-1.5">
              {name}
            </h4>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/${url.slice(
                POKEMON_TYPE_URL.length,
                -1
              )}.png`}
              alt={name}
              width={96}
              height={96}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
