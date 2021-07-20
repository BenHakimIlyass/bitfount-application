import React from "react";
import Hstack from "./h-stack";
import Vstack from "./v-stack";

/**
 * Auto layout will distribute the given space prop to all its childs
 * @param {boolean} x - Use horizental auto layout
 * @param {number} space - In rem unit, the space between childs
 *
 * @param {boolean} y - Use vertical auto layout
 * @param {number} space - In rem unit, the space between childs
 *
 *
 */

type Props = {
  x?: boolean;
  y?: boolean;
  space?: string | number;
  children: React.ReactChild | React.ReactChild[];
  css?: any;
  // regarding other custom props
  [key: string]: any;
};
const AutoLayout = ({ x = false, y = false, children, ...props }: Props) => {
  if (y) return <Vstack {...props}>{children}</Vstack>;
  else if (x) return <Hstack {...props}>{children}</Hstack>;
  return <Hstack {...props}>{children}</Hstack>;
};

export default AutoLayout;
