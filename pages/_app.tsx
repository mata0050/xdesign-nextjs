
import '../styles/tailwind.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  console.log(pageProps)
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
