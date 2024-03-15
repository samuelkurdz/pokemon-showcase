"use client";

import { Dispatch, SetStateAction, useState } from "react";
import {
  DoubleArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowRightIcon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";
import { Pokemon } from "./Pokemon";
import { CategoryDetail } from "@/lib/models";
import { Button } from "@/components/ui/button";

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

interface PaginationProps {
  nPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setRecordsPerPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({
  nPages,
  currentPage,
  setCurrentPage,
  setRecordsPerPage,
}: PaginationProps) => {
  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex items-center justify-between">
      <section className="flex items-center gap-2">
        <label htmlFor="rowsperPage">Rows per page</label>
        <div className="relative w-max">
          <select
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-[200px] appearance-none font-normal"
            id="rowsperPage"
            onChange={(e) => setRecordsPerPage(Number(e.target.value))}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
          <ChevronDownIcon className="absolute right-3 top-2.5 h-4 w-4 opacity-50" />
        </div>
      </section>
      <section className="flex gap-2">
        <div className="flex whitespace-nowrap items-center justify-center text-sm font-medium">
          Page {currentPage} of {nPages}
        </div>
        <div className="flex items-center space-x-1.5">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            disabled={currentPage == 1}
            onClick={() => setCurrentPage(1)}
          >
            <span className="sr-only">Go to first page</span>
            <DoubleArrowLeftIcon className="size-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={currentPage == 1}
            onClick={goToPrevPage}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="size-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={currentPage == nPages}
            onClick={goToNextPage}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="size-4" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            disabled={currentPage == nPages}
            onClick={() => setCurrentPage(nPages)}
          >
            <span className="sr-only">Go to last page</span>
            <DoubleArrowRightIcon className="size-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};
