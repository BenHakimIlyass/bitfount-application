import type { AppProps } from 'next/app';
import { globalStyles } from 'stitches';
import { Navbar, Container, Center, Button, Footer } from 'components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        {globalStyles()}
        <Component {...pageProps} />
      </main>
      <footer>
            <Footer />
 
      </footer>
    </div>
  );
}
export default MyApp;


