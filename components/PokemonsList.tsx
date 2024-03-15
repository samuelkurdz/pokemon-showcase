"use client";

import { useState } from "react";
import { Pokemon } from "./Pokemon";
import { CategoryDetail } from "@/lib/models";

import { Pagination } from "./PokemonPagination";

interface PokemonsListProps {
  category: string;
  pokemonsLength: number;
  pokemons: CategoryDetail["pokemon"];
}

export function PokemonsList({
  pokemons,
  category,
  pokemonsLength,
}: PokemonsListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const nPages = Math.ceil(
    pokemons.filter((pokemon) =>
      pokemon.pokemon.name.includes(searchTerm.trim())
    ).length / recordsPerPage
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h4 className="font-semibold capitalize text-lg space-x-1">
          <span>{category}</span>
          <span className="text-xs">({pokemonsLength} pokemons)</span>
        </h4>
        <input
          type="search"
          placeholder="Search pokemons..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 max-w-md"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {pokemons
          .filter((pokemon) => pokemon.pokemon.name.includes(searchTerm.trim()))
          .slice(indexOfFirstRecord, indexOfLastRecord)
          .map(({ pokemon }) => (
            <Pokemon {...pokemon} key={pokemon.name} />
          ))}
      </div>

      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setRecordsPerPage={setRecordsPerPage}
      />
    </div>
  );
}
