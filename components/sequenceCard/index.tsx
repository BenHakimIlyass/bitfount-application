import AutoLayout from "components/autoLayout";
import React from "react";
import { styled } from "stitches";
import { SequenceStatus } from "configs";
import statusVariants from "./statusVariants";
import { motion } from "framer-motion";

const Info = styled(motion.div, {
  color: "$gray400",
  fontStyle: "italic",
  fontSize: 16,
  span: {
    textDecoration: "underline",
    cursor: "pointer"
  }
});
const Text = styled(motion.div, {
  fontSize: 18,
  span: {
    fontWeight: 700
  }
});
const Playground = styled("div", {
  backgroundColor: "#fff",
  boxShadow: "$sh1",
  padding: 16,
  borderRadius: 8
});

type Props = {
  label: string | JSX.Element;
  status: keyof typeof SequenceStatus;
};
const SequenceCard = ({ label, status = "ERROR" }: Props) => {
  const motionProps = (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay }
  });
  return (
    <Playground>
      <AutoLayout x css={{ justifyContent: "space-between" }}>
        <AutoLayout y space={0.4}>
          <Text {...motionProps(0)}>{label}</Text>
          <Info {...motionProps(0.4)}>{statusVariants[status].info}</Info>
        </AutoLayout>
        <motion.div {...motionProps(0.6)}>
          {statusVariants[status].icon()}
        </motion.div>
      </AutoLayout>
    </Playground>
  );
};
export default SequenceCard;
