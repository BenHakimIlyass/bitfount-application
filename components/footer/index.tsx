import React from "react";
import { styled } from "stitches";
import useClipboard from "react-use-clipboard";
import { AnimatePresence } from "framer-motion";

import { Container, Center } from "components";
import { useTimeout } from "hooks";
import AutoLayout from "components/autoLayout";
import { Clipboard, ClipboardChecked } from "./icons";

const Img = styled("img", {
  // filter: "grayscale(1)",
  width: 100
});
const Playground = styled("div", {
  backgroundColor: "$gray100",
  boxShadow: "$sh2",
  width: "100%",
  padding: 24
});

const Text = styled("div", {
  color: "$gray400",
  fontSize: 16,
  textAlign: "center"
});

const Footer = () => {
  const [emailCopied, setEmailCopied] = React.useState(false);
  const [_, setCopied] = useClipboard("ilyassbenhakim2@gmail.com");

  const toggleCopyOn = () => setEmailCopied(true);
  const toggleCopyOff = () => setEmailCopied(false);
  const copyEmail = () => {
    toggleCopyOn();
    setCopied();
  };

  useTimeout({ callback: toggleCopyOff, delay: 3000 }, [emailCopied]);
  return (
    <Playground>
      <Container>
        <AutoLayout y space={1}>
          <Text css={{ color: "$blue" }}>
            Ilyass Ben Hakim - Software engineer
          </Text>
          <AutoLayout
            x
            space={0.6}
            css={{ justifyContent: "center", alignItems: "center" }}>
            <Text as="a" href="mailto:ilyassbenhakim2@gmail.com">
              ilyassbenhakim2@gmail.com
            </Text>
            <button onClick={copyEmail}>
              <AnimatePresence exitBeforeEnter>
                {emailCopied ? <ClipboardChecked /> : <Clipboard />}
              </AnimatePresence>
            </button>
          </AutoLayout>
          <Center>
            <Img src="/logo.png" alt="Footer logo" />
          </Center>
        </AutoLayout>
      </Container>
    </Playground>
  );
};
export default Footer;
