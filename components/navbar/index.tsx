import React from 'react';
import { styled } from 'stitches';
import { Container } from 'components';
import Image from 'next/image';
import Link from 'next/link';
const Playground = styled('div', {
  backgroundColor: '#fff',
  boxShadow: '$sh2',
  width: '100%',
  padding: 24,
  img: {
    width: 130,
  },
});
const Navbar = () => {
  return (
    <Playground>
      <Container>
        <Link href='/'>
          <a>
            <Image
              src='/logo.png'
              alt='bitfount-logo'
              width={130}
              height={28}
            />
          </a>
        </Link>
      </Container>
    </Playground>
  );
};
export default Navbar;
