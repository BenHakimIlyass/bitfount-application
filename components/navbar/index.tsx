import React from 'react';
import { styled } from 'stitches';
import { Container } from 'components';
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
        <a href='https://www.bitfount.com/' target='_blanc'>
          <img src='/logo.png' alt='bitfount-logo' />
        </a>
      </Container>
    </Playground>
  );
};
export default Navbar;
