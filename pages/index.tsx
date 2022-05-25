// /pages/index.tsx
import Head from 'next/head';

import Link from 'next/link';
import About from '../components/About';
import Hero from '../components/Hero';

function Home() {
  return (
    <div>
      <Head>
        <title>XDesign</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero />
      <About />
    </div>
  );
}

export default Home;
