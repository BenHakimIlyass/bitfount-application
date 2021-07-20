import React, { ReactChild } from "react";
import { styled } from "../../stitches";

const unit = (e?: string | number) => (typeof e === "number" ? `${e}rem` : e);

type Props = {
  space?: string | number;
  children: React.ReactChild | React.ReactChild[];
  css?: any;
  [key: string]: any;
};
const Stack = styled("div", {});
const Hstack = ({ space, children, css, ...props }: Props) => {
  return (
    <Stack
      css={{
        display: "flex",
        flexWrap: "wrap",
        ...(css ? css : {}),
        margin: ` calc(${unit(space)} / -2)`,
        "& > *": {
          margin: `calc(${unit(space)} / 2)`
        }
      }}
      {...props}>
      {children}
    </Stack>
  );
};
export default Hstack;
