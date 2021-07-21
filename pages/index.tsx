import React from 'react';
import { Container, AutoLayout } from 'components';
import { Hero, About } from 'sections';
import Head from 'next/head';

import { styled } from 'stitches';

const Box = styled('div', {
  paddingTop: '20vh',
  minHeight: '60vh',
  backgroundImage: 'url(/blurLayer.png)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  borderRadius: '0 0 50px 50px',
});
const Home = () => {
  return (
    <>
      <Head>
        <title>Bitfount - Home page</title>
      </Head>
      <Container css={{ padding: '100px 0' }}>
        <AutoLayout y space={4}>
          {/* hero section */}
          <Box>
            <Hero />
          </Box>

          {/* About section */}
          <About />
        </AutoLayout>
      </Container>
    </>
  );
};
export default Home;
