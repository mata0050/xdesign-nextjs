import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
            rel='stylesheet'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#ffffff' />
          <title>XDesgin - Web Development</title>
          <meta
            content='XDesign is passionate about creating websites and user interfaces (UI Design). We use all our knowledge to help our clients build their brands through interactivity.'
            name='description'
          />
          <meta
            content='XDesgin - Web Development'
            property='og:title'
          />
          <meta
            content='XDesign is passionate about creating websites and user interfaces (UI Design). We use all our knowledge to help our clients build their brands through interactivity.'
            property='og:description'
          />
          <meta
            content='https://uploads-ssl.webflow.com/5f0f7ce012599771b63692a8/5f30bf60440cab2b011c314d_Thumbnail.png'
            property='og:image'
          />
          <meta
            content='XDesgin  - Web Development'
            property='twitter:title'
          />
          <meta
            content='XDesign is passionate about creating websites and user interfaces (UI Design). We use all our knowledge to help our clients build their brands through interactivity.'
            property='twitter:description'
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
