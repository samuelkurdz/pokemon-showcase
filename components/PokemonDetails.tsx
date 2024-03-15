import { PokemonDetailsResponse } from "@/lib/models";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentProps, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "./ui/skeleton";
import axios from "axios";

interface PokemonDetailsProps extends ComponentProps<"div"> {
  pokemon: string;
  image: string;
}

export function PokemonDetails({
  className,
  pokemon,
  image,
}: PokemonDetailsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState<PokemonDetailsResponse | null>(null);

  useEffect(() => {
    getPokemonDetailsByName();

    async function getPokemonDetailsByName() {
      try {
        setIsLoading(true);
        const res = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        setDetails(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

  if (isLoading) {
    return (
      <div className={cn("grid items-start gap-4", className)}>
        <section className="flex flex-wrap items-center gap-2.5">
          <p className="text-xs font-bold">Pokemon types:</p>
          {Array.from(Array(2), (e, i) => (
            <Skeleton className="h-5 w-16" key={i} />
          ))}
        </section>

        <Skeleton className="size-24" />

        <section className="space-y-1">
          <h4 className="font-semibold">Abilities</h4>
          <div className="flex flex-wrap gap-2.5">
            {Array.from(Array(3), (e, i) => (
              <Skeleton className="h-5 w-16" key={i} />
            ))}
          </div>
        </section>

        <section className="space-y-1">
          <h4 className="font-semibold">Stats</h4>
          <div className="flex flex-col gap-2.5">
            {Array.from(Array(5), (e, i) => (
              <div className="space-y-1.5" key={i}>
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (!details) {
    return <p>Error getting {pokemon} pokemon details</p>;
  }

  return (
    <>
      <div className={cn("grid items-start gap-4", className)}>
        <section>
          <div className="flex flex-wrap items-center gap-2.5">
            <p className="text-xs font-bold">Pokemon types:</p>
            {details.types.map(({ type }) => (
              <Badge key={type.name} variant="outline" className="uppercase">
                {type.name}
              </Badge>
            ))}
          </div>
        </section>

        <Image src={image} alt={pokemon} width={96} height={96} />

        <section>
          <h4 className="font-semibold">Abilities</h4>
          <div className="flex flex-wrap gap-2 capitalize">
            {details.abilities.map(({ ability }) => (
              <Badge key={ability.name}>{ability.name}</Badge>
            ))}
          </div>
        </section>

        <section>
          <h4 className="font-semibold">Stats</h4>
          <div className="flex flex-col gap-2 capitalize">
            {details.stats.map((pokeStats) => (
              <div key={pokeStats.stat.name}>
                <p className="space-x-1">
                  <span>{pokeStats.stat.name}</span>
                  <span className="text-xs">{pokeStats.base_stat}%</span>
                </p>
                <progress value={pokeStats.base_stat} max="100" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
