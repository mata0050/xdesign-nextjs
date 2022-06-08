import Head from 'next/head';
import About from '../components/About';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Hero';
import OurWork from '../components/OurWork';
import Review from '../components/Review';
import Header from '../components/Layout/Header';
import Pricing from '../components/Pricing';

function Home({}) {
  return (
    <>
      <Head>
        <title>XDesgin - Web Development</title>
      </Head>
      <div>
        <Hero />
        <About />
        <OurWork />
        <Review />
        <Pricing />
      </div>
    </>
  );
}

export default Home;
