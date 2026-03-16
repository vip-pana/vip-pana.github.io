import { useEffect, useState } from 'react';
import { Container, ScaleFade } from '@chakra-ui/react';

import { FirstAbout } from '../components/FirstAbout';
import { SecondAbout } from '../components/SecondAbout';
import { InitialAnimation, ColorOptions } from '../types';

interface AboutProps {
  isLargerThan1280: boolean;
  initialAnimation: InitialAnimation;
  colorOptions: ColorOptions;
}

export const About = (props: AboutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsOpen(true);
    }, 500);
  }, []);

  return (
    <Container
      maxW={props.isLargerThan1280 ? '70%' : 'full'}
      p={10}
      pt={props.isLargerThan1280 ? 20 : 5}
    >
      <ScaleFade initialScale={0.9} in={isOpen}>
        <FirstAbout
          isLargerThan1280={props.isLargerThan1280}
          colorOptions={props.colorOptions}
          initialAnimation={props.initialAnimation}
        />

        <SecondAbout
          isLargerThan1280={props.isLargerThan1280}
          initialAnimation={props.initialAnimation}
          colorOptions={props.colorOptions}
        />
      </ScaleFade>
    </Container>
  );
};
