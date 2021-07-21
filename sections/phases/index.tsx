import {
  Title,
  SequenceCard,
  AutoLayout,
  MotionChild,
  MotionWrapper,
} from 'components';
import { motion } from 'framer-motion';

const motionProps = (delay: number) => ({
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
  transition: { delay, duration: 0.6 },
});
const Phases = () => {
  return (
    <AutoLayout y space={6}>
      {/* Project and infrastructure phase */}
      <AutoLayout y space={1}>
        <Title>Project and infrastructure phase</Title>
        <AutoLayout y space={1} as={MotionWrapper}>
          <SequenceCard
            as={MotionChild}
            label='Clone your project into our infrastracture.'
            status='COMPLETED'
          />
          <SequenceCard
            as={MotionChild}
            label={
              <>
                Getting data from <span>bitfountDataSource.</span>
              </>
            }
            status='COMPLETED'
          />
          <SequenceCard
            as={MotionChild}
            label='Importing data.'
            status='COMPLETED'
          />
        </AutoLayout>
      </AutoLayout>

      {/* Runtime phase */}
      <AutoLayout y space={1} as={MotionWrapper}>
        <Title as={MotionChild}>Runtime phase</Title>
        <SequenceCard
          as={MotionChild}
          label='Formating data...'
          status='PENDING'
        />
        <SequenceCard
          as={MotionChild}
          label='Preparing your environment...'
          status='QUEUED'
        />
      </AutoLayout>

      {/* Build phase */}
      <AutoLayout y space={1} as={MotionWrapper}>
        <Title as={MotionChild}>Build phase</Title>
        <SequenceCard
          as={MotionChild}
          label='Reading the environment variables...'
          status='ERROR'
        />
        <SequenceCard as={MotionChild} label='Build...' status='QUEUED' />
      </AutoLayout>
    </AutoLayout>
  );
};
export default Phases;
