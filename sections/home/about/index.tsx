import React from 'react';
import { Center, Button, AutoLayout } from 'components';

import { motion } from 'framer-motion';
import { Interest, Education, Code } from './icons';
import { styled } from 'stitches';
import { useOnScreen } from 'hooks';

const Title = styled('h2', {
  color: '$blue',
  fontSize: 22,
  fontWeight: 600,
  overflow: 'hidden',
  lineHeight: '29px',
});
const Tag = styled('p', {
  color: '$orange',
  fontSize: 14,
  fontWeight: 600,
});
const Text = styled('p', {
  color: '$nightMarket',
  fontSize: 18,
  lineHeight: '26px',
  fontWeight: 400,
});
const Frame = styled(motion.div, {
  position: 'relative',
  width: '100%',
  borderColor: '$gray400',
  borderWidth: 1,
  borderStyle: 'solid',
  padding: '40px 25px 25px',
  borderRadius: 10,
  transition: 'all 0.4s',
  '&:hover': {
    borderColor: '$orange',
  },
});
const About = () => {
  const motionProps = (delay: number) => ({
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    transition: { delay: delay + 0.2, duration: 0.2 },
  });
  const [isReached, setIsReached] = React.useState(false);
  const ref = React.useRef(null);
  useOnScreen({ ref, onView: () => setIsReached(true) });
  return (
    <section>
      <AutoLayout y space={2}>
        <AutoLayout y space={1}>
          <Title>About me</Title>
          <Text ref={ref}>
            I’m Ilyass Ben Hakim, and I’m a software engineer, self-taught
            frontend developer.
          </Text>
        </AutoLayout>
        <div style={{ minHeight: 240 }}>
          {isReached ? (
            <AutoLayout
              x
              space={1}
              css={{ justifyContent: 'space-between', flexWrap: 'nowrap' }}
            >
              {/* What do I do? */}
              <Frame {...motionProps(0)}>
                <Interest />
                <AutoLayout y space={1}>
                  <Title>What do I do?</Title>
                  <Text>
                    Based in a small and beautiful city in Morocco called
                    Tetouan, I make software applications that respect the
                    standards of optimization, SEO, and good looking UI.
                  </Text>
                </AutoLayout>
              </Frame>

              {/* My education */}
              <Frame {...motionProps(0.2)}>
                <Education />
                <AutoLayout y space={1}>
                  <Title>My education</Title>
                  <Text>
                    By the end of 2019, I’ve got my computer science
                    professional degree, and this year I’ve been working on my
                    software engineering master’s degree.
                  </Text>
                </AutoLayout>
              </Frame>

              {/* My interest */}
              <Frame {...motionProps(0.4)}>
                <Code />
                <AutoLayout y space={1}>
                  <Title>My interest</Title>
                  <Text>
                    I'm always working on my skillset, so I can be able to build
                    such a perfect interactive web application, in which every
                    component serves a reason.
                  </Text>
                </AutoLayout>
              </Frame>
            </AutoLayout>
          ) : null}
        </div>
        <AutoLayout x space={1}>
          {technologies.map((item, i) => (
            <Tag key={item + i}>#{item}</Tag>
          ))}
        </AutoLayout>
        <a href='https://ilyassbh.me' target='_blanc'>
          <Button outlined>PORTFOLIO</Button>
        </a>
      </AutoLayout>
    </section>
  );
};
export default About;
const technologies = [
  'ReactJS',
  'NextJS',
  'GraphQL',
  'Hooks',
  'Redux',
  'Typescript',
  'CSS',
  'Styled-components',
  'Stitches',
  'Framer-motion',
  'React-spring',
  'Functional programming',
  'Git',
  'Npm',
  'Figma',
  'Adobe XD',
];
