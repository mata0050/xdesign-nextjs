// /pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';
import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import OurWork from '../components/OurWork';
import Review from '../components/Review';

function Home() {
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
      <Footer />
    </div>
  );
}

export default Home;
