import React from "react";

type Props = {
  callback: () => void;
  delay: number;
};

const useTimeout = ({ callback, delay }: Props, deps: Array<any> = []) => {
  React.useEffect(() => {
    let timeout = setTimeout(callback, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [...deps]);
};
export default useTimeout;
