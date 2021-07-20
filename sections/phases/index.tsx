import { Title, SequenceCard, AutoLayout } from "components";
import { motion } from "framer-motion";

const motionProps = (delay: number) => ({
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
  transition: { delay, duration: 0.6 }
});
const Phases = () => {
  return (
    <AutoLayout y space={6}>
      {/* Project and infrastructure phase */}
      <AutoLayout y space={1} as={motion.div} {...motionProps(0)}>
        <Title>Project and infrastructure phase</Title>
        <SequenceCard
          label="Clone your project into our infrastracture."
          status="COMPLETED"
        />
        <SequenceCard
          label={
            <>
              Getting data from <span>bitfountDataSource.</span>
            </>
          }
          status="COMPLETED"
        />
        <SequenceCard label="Importing data." status="COMPLETED" />
      </AutoLayout>

      {/* Runtime phase */}
      <AutoLayout y space={1} as={motion.div} {...motionProps(0.4)}>
        <Title>Runtime phase</Title>
        <SequenceCard label="Formating data..." status="PENDING" />
        <SequenceCard label="Preparing your environment..." status="QUEUED" />
      </AutoLayout>

      {/* Build phase */}
      <AutoLayout y space={1} as={motion.div} {...motionProps(0.8)}>
        <Title>Build phase</Title>
        <SequenceCard
          label="Reading the environment variables..."
          status="ERROR"
        />
        <SequenceCard label="Build..." status="QUEUED" />
      </AutoLayout>
    </AutoLayout>
  );
};
export default Phases;
