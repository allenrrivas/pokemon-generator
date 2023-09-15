import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { api } from "~/utils/api";
import { getOptionsView } from "~/utils/getRandomPokemon";

export default function Home() {
  const [ids, updateIds] = useState(() => getOptionsView());
  const [first] = ids;

  const firstPokemon = api.pokemon.getById.useQuery({ id: first! });

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="text-center text-2xl">Random Pokémon Generator</div>
      <div className="p-2" />
      <div className="flex max-w-2xl items-center justify-between rounded border px-3 py-10 lg:p-10">
        <div
          suppressHydrationWarning={true}
          className="grid h-48 w-96 grid-cols-2 gap-4"
        >
          <div>
            {firstPokemon.data?.sprites.front_default && (
              <Image
                src={firstPokemon.data?.sprites.front_default ?? ""}
                width={500}
                height={500}
                alt={firstPokemon.data?.name}
              />
            )}
            <div className="text-center text-xl capitalize">
              {firstPokemon.data?.name}
            </div>
          </div>
          <div>
            {firstPokemon.data?.stats.map((firstPokemon, index) => (
              <div className="grid grid-cols-2 gap-28" key={index}>
                <div className="whitespace-nowrap capitalize">
                  {firstPokemon.stat.name}: {firstPokemon.base_stat}
                </div>
                <div>
                  <progress
                    className="progress progress-info w-8 lg:w-16"
                    value={firstPokemon.base_stat}
                    max="100"
                  ></progress>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
