import { styled } from 'stitches';

const Button = styled('button', {
  padding: '16px 30px',
  borderRadius: '50px',
  fontWeight: 600,
  width: 'fit-content',
  transition: 'all 0.2s',
  variants: {
    outlined: {
      true: {
        borderColor: '$blue',
        color: '$blue',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: 'transparent !important',
        '&:hover': {
          borderColor: '$orange',
          color: '$orange',
        },
      },
    },
    color: {
      blue: {
        backgroundColor: '$blue',
        color: '#fff',
        '&:hover': {
          backgroundColor: '$orange',
        },
      },
      orange: {
        backgroundColor: '$orange',
        color: '#fff',
        '&:hover': {
          backgroundColor: '$blue',
        },
      },
    },
  },

  defaultVariants: {
    color: 'blue',
  },
});
export default Button;
