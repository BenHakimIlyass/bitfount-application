import React from 'react';
import { Container, Center, Button, AutoLayout } from 'components';
import { Phases } from 'sections';

import { styled } from 'stitches';
import Link from 'next/link';

const Title = styled('h2', {
  color: '#222222',
  fontSize: 38,
  fontWeight: 600,
  textAlign: 'center',
});
const Text = styled('p', {
  textAlign: 'center',
  color: '#222222',
  fontSize: 18,
  lineHeight: '22px',
  padding: '0 128px',
});
const Home = () => {
  return (
    <Container css={{ marginTop: '20vh', padding: 20, minHeight: '50vh' }}>
      <AutoLayout y space={2}>
        <Title>Hello Bitfount,</Title>
        <Text>
          My name is <b>Ilyass Ben Hakim</b>, and this is a small simulation
          coming from my imagination of how can we display the different
          iterations of an execution.
        </Text>
        <Center>
          <Link href='/iterations'>
            <a>
              <Button>SIMULATE</Button>
            </a>
          </Link>
        </Center>
      </AutoLayout>
    </Container>
  );
};
export default Home;
