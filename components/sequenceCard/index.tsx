import { AutoLayout, MotionChild, MotionWrapper } from 'components';
import React from 'react';
import { styled } from 'stitches';
import { SequenceStatus } from 'configs';
import statusVariants from './statusVariants';
import { motion } from 'framer-motion';

const Info = styled('div', {
  color: '$gray400',
  fontStyle: 'italic',
  fontSize: 16,
  a: {
    textDecoration: 'underline',
    cursor: 'pointer',
    color: '$gray400',
  },
});
const Text = styled('div', {
  fontSize: 18,
  span: {
    fontWeight: 700,
  },
});
const Playground = styled(motion.div, {
  backgroundColor: '#fff',
  boxShadow: '$sh1',
  padding: 16,
  borderRadius: 8,
});

type Props = {
  label: string | JSX.Element;
  status: keyof typeof SequenceStatus;
  [key: string]: any;
};
const SequenceCard = ({ label, status = 'ERROR', ...props }: Props) => {
  return (
    <Playground {...props}>
      <AutoLayout x css={{ justifyContent: 'space-between' }}>
        <AutoLayout y space={0.4}>
          <Text>{label}</Text>
          <Info>{statusVariants[status].info}</Info>
        </AutoLayout>
        <div>{statusVariants[status].icon()}</div>
      </AutoLayout>
    </Playground>
  );
};
export default SequenceCard;
