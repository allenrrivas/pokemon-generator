import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Random Pokemon Generator</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-800">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-2xl tracking-tight text-white">
            Random Pokemon Generator
          </h1>

          <p className="text-2xl text-white">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>
        </div>
      </main>
    </>
  );
}
