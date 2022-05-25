// /pages/index.tsx
import Head from 'next/head';

import Link from 'next/link';
import Hero from '../components/Layout/Hero';

function Home() {
  return (
    <div>
      <Head>
        <title>XDesign</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero />
    </div>
  );
}

export default Home;
