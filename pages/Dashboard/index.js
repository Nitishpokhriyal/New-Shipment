// pages/index.js

import Head from 'next/head';
import Graph from './../Graph';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Graph Example</title>
        <meta name="description" content="Graph Example using Next.js and Tailwind CSS" />
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4"></h1>
        <Graph />
      </main>
    </div>
  );
}
