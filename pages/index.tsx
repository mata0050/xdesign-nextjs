import { useRef } from 'react';
// /pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';
import About from '../components/About';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Hero';
import OurWork from '../components/OurWork';
import Review from '../components/Review';
import Header from '../components/Layout/Header';

function Home({}) {
  const ourWorkRef = useRef(null);

  return (
    <div>
      <Head>
        <title>XDesign</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <About />
      <OurWork />
      <Review />
    </div>
  );
}

export default Home;
