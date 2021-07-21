import React from 'react';
import { Container, AutoLayout, Button, Center } from 'components';
import { Phases } from 'sections';
import Head from 'next/head';
import { styled } from 'stitches';

const Box = styled('div', {
  paddingTop: '30vh',
  minHeight: '60vh',
  backgroundImage: 'url(/blurLayer2.png)',
  backgroundPosition: 'center left',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  borderRadius: '0 0 50px 50px',
});
const Title = styled('h2', {
  color: '#222222',
  fontSize: 38,
  fontWeight: 600,
  textAlign: 'center',
});
const Text = styled('p', {
  color: '#222222',
  fontSize: 18,
  lineHeight: '22px',
  textAlign: 'center',
});
const Home = () => {
  return (
    <>
      <Head>
        <title>Bitfount - Iterations page</title>
      </Head>
      <Box>
        <Container>
          <AutoLayout y space={2}>
            <Title>Wait is this 404?</Title>
            <Text>Congratulations you've found the lost page</Text>
            <Center>
              <Button>HOME PAGE</Button>
            </Center>
          </AutoLayout>
        </Container>
      </Box>
    </>
  );
};
export default Home;
