import AutoLayout from "components/autoLayout";
import React from "react";
import { styled } from "../../stitches";

const Text = styled("div", {
  color: "$gray400",
  fontSize: 18,
  fontWeight: 500
});
const Dash = styled("div", {
  backgroundColor: "$gray400",
  width: 20,
  height: 2
});
const Title = ({ children }: { children: React.ReactChild }) => {
  return (
    <AutoLayout x space={1} css={{ alignItems: "center" }}>
      <Dash />
      <Text>{children}</Text>
    </AutoLayout>
  );
};
export default Title;
