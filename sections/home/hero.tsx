import React from 'react';
import { Center, Button, AutoLayout } from 'components';

import { motion } from 'framer-motion';
import { styled } from 'stitches';
import Link from 'next/link';

const Title = styled(motion.h2, {
  color: '#222222',
  fontSize: 38,
  fontWeight: 600,
  textAlign: 'center',
  overflow: 'hidden',
});
const Text = styled(motion.p, {
  textAlign: 'center',
  color: '#222222',
  fontSize: 18,
  lineHeight: '22px',
  padding: '0 128px',
});

const Hero = () => {
  return (
    <section>
      <AutoLayout y space={3}>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          Hello <b>Bitfount</b>,
        </Title>
        <Text
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My name is <b>Ilyass Ben Hakim</b>, and this is a small simulation
          coming from my imagination of how can we display the different
          iterations of an execution.
        </Text>
        <Center>
          <Link href='/iterations'>
            <a>
              <Button
                as={motion.button}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                SIMULATE
              </Button>
            </a>
          </Link>
        </Center>
      </AutoLayout>
    </section>
  );
};
export default Hero;
