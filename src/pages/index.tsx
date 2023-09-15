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

  if (!firstPokemon) return <div>Something went wrong</div>;

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
            {firstPokemon.data?.sprites.other?.["official-artwork"]
              .front_default && (
              <Image
                src={
                  firstPokemon.data?.sprites.other?.["official-artwork"]
                    .front_default ?? ""
                }
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
                <div className="grid grid-cols-2 gap-28 whitespace-nowrap capitalize tracking-tighter">
                  <div className="opacity-60">{firstPokemon.stat.name}:</div>
                  <div className="font-bold">{firstPokemon.base_stat}</div>
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
      <div className="p-4">
        <button
          onClick={() => updateIds(getOptionsView())}
          className="btn rounded-full bg-[#3ABFF8] text-black hover:bg-sky-700"
        >
          I choose you!
        </button>
      </div>
      <div className="p-8 opacity-50">
        <p>
          <a
            className="underline"
            target="_blank"
            href="https://github.com/allenrrivas/pokemon-generator"
          >
            Github
          </a>{" "}
          |{" "}
          <a
            className="underline"
            target="_blank"
            href="https://www.allenrrivas.dev/"
          >
            Me
          </a>{" "}
          | Pokémon 2023 © Nintendo.
        </p>
      </div>
    </div>
  );
}
