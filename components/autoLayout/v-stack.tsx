import React, { ReactChild } from "react";
import { styled } from "stitches";

const unit = (e?: string | number) => (typeof e === "number" ? `${e}rem` : e);

type Props = {
  space?: string | number;
  children: React.ReactChild | React.ReactChild[];
  css?: any;
  [key: string]: any;
};
const Stack = styled("div", {});
const Vstack = ({ space, children, css, ...props }: Props) => {
  return (
    <Stack
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        ...(css ? css : {}),
        "& > * + *": {
          marginTop: `${unit(space)} !important`
        }
      }}
      {...props}>
      {children}
    </Stack>
  );
};
export default Vstack;
