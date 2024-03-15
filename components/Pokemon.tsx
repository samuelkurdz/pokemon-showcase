"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PokemonType } from "@/lib/models";
import { useMediaQuery } from "@/lib/use-media-query";

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "./ui/dialog";
import {
  Drawer,
  DrawerTitle,
  DrawerClose,
  DrawerHeader,
  DrawerFooter,
  DrawerTrigger,
  DrawerContent,
  DrawerDescription,
} from "./ui/drawer";
import { PokemonDetails } from "./PokemonDetails";

const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/";

function processPokemonImage(url: string) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url.slice(
    POKEMON_URL.length,
    -1
  )}.png`;
}

function PokemonMiniDetail({ img, name }: { name: string; img: string }) {
  return (
    <div className="group shadow-sm hover:shadow border rounded p-1.5 cursor-pointer">
      <p className="capitalize group-hover:underline">{name}</p>
      <Image src={img} alt={name} width={96} height={96} />
    </div>
  );
}

export function Pokemon({ name, url }: PokemonType) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const image = processPokemonImage(url);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <PokemonMiniDetail img={image} name={name} />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <PokemonDetails pokemon={name} image={image} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <PokemonMiniDetail img={image} name={name} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{name}</DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <PokemonDetails className="px-4" pokemon={name} image={image} />
        <DrawerFooter className="pt-2">
          <DrawerClose className="border rounded">
            <p>Cancel</p>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
