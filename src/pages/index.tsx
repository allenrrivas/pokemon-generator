import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { api } from "~/utils/api";
import { getOptionsView } from "~/utils/getRandomPokemon";

export default function Home() {
  const [ids, updateIds] = useState(() => getOptionsView());
  const [first] = ids;

  const firstPokemon = api.pokemon.getById.useQuery({ id: first as number });

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="text-center text-2xl">Random Pokemon Generator</div>
      <div className="p-2" />
      <div className="flex max-w-2xl items-center justify-between rounded border p-8">
        <div suppressHydrationWarning={true} className="h-44 w-44">
          {firstPokemon.data?.sprites.front_default && (
            <Image
              src={firstPokemon.data?.sprites.front_default ?? ""}
              width={500}
              height={500}
              alt={firstPokemon.data?.name}
            />
          )}
          {/* <img
            src={firstPokemon.data?.sprites.front_default ?? ""}
            alt={firstPokemon.data?.name}
            className="w-full"
          /> */}
          <div className="text-center text-xl capitalize">
            {firstPokemon.data?.name}
          </div>
        </div>
      </div>
    </div>
  );
}
