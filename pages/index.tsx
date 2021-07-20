import React from 'react';
import { Container, Center, Button } from 'components';
import { Phases } from 'sections';

const Home = () => {
  const [simulation, setSimulation] = React.useState(false);
  const toggleSimulation = () => setSimulation((prev) => !prev);
  return (
    <Container css={{ marginTop: 100, padding: 20, minHeight: '60vh' }}>
      {simulation ? (
        <Phases />
      ) : (
        <Center>
          <Button onClick={toggleSimulation} css={{ marginTop: '20vh' }}>
            SIMULATE
          </Button>
        </Center>
      )}
    </Container>
  );
};
export default Home;
