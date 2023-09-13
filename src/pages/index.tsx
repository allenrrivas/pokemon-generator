import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import { getOptionsView } from "~/utils/getRandomPokemon";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [first] = getOptionsView();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="text-center text-2xl">Random Pokemon Generator</div>
      <div className="p-2" />
      <div className="flex max-w-2xl items-center justify-between rounded border p-8">
        <div suppressHydrationWarning={true} className="h-16 w-16">
          {first}
        </div>
      </div>
    </div>
  );
}
