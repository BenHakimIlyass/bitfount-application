import React from 'react';
import { styled } from 'stitches';
import useClipboard from 'react-use-clipboard';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import { Container, Center } from 'components';
import { useTimeout } from 'hooks';
import AutoLayout from 'components/autoLayout';
import { Clipboard, ClipboardChecked } from './icons';
import Image from 'next/image';

const Playground = styled('div', {
  backgroundColor: '$gray100',
  boxShadow: '$sh2',
  width: '100%',
  padding: '24px 0',
  '*': {
    textAlign: 'center',
  },
});

const Text = styled('div', {
  color: '$gray400',
  fontSize: 16,
  textAlign: 'center',
});

const Footer = () => {
  const [emailCopied, setEmailCopied] = React.useState(false);
  const [_, setCopied] = useClipboard('ilyassbenhakim2@gmail.com');

  const toggleCopyOn = () => setEmailCopied(true);
  const toggleCopyOff = () => setEmailCopied(false);
  const copyEmail = () => {
    toggleCopyOn();
    setCopied();
  };

  useTimeout({ callback: toggleCopyOff, delay: 3000 }, [emailCopied]);
  return (
    <Playground>
      <Container>
        <AutoLayout y space={1}>
          <Text css={{ color: '$blue' }}>
            Ilyass Ben Hakim - Software engineer
          </Text>
          <AutoLayout
            x
            space={0.6}
            css={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <Text as='a' href='mailto:ilyassbenhakim2@gmail.com'>
              ilyassbenhakim2@gmail.com
            </Text>
            <button onClick={copyEmail}>
              <AnimatePresence exitBeforeEnter>
                {emailCopied ? <ClipboardChecked /> : <Clipboard />}
              </AnimatePresence>
            </button>
          </AutoLayout>
          <Center>
            <Link href='/'>
              <a>
                <Image
                  width={100}
                  height={21}
                  src='/logo.png'
                  alt='Footer logo'
                />
              </a>
            </Link>
          </Center>
        </AutoLayout>
      </Container>
    </Playground>
  );
};
export default Footer;
