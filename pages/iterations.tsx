import React from 'react';
import { Container, Center, Button, AutoLayout } from 'components';
import { Phases } from 'sections';
import Head from 'next/head';
import { styled } from 'stitches';

const Title = styled('h2', {
  color: '#222222',
  fontSize: 38,
  fontWeight: 600,
});
const Text = styled('p', {
  color: '#222222',
  fontSize: 18,
  lineHeight: '22px',
});
const Home = () => {
  return (
    <>
      <Head>
        <title>Bitfount - Iterations page</title>
      </Head>
      <Container css={{ marginTop: 100, padding: 20, minHeight: '60vh' }}>
        <AutoLayout y space={2}>
          <Title>Iterations</Title>
          <Text>
            Here are all the <b>running</b>, <b>queued</b> and <b>completed</b>{' '}
            execution steps.
          </Text>
          <Phases />
        </AutoLayout>
      </Container>
    </>
  );
};
export default Home;
