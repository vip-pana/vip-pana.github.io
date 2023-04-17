import { useEffect, useState } from "react";
import { FirstAbout } from "../components/FirstAbout";
import { SecondAbout } from "../components/SecondAbout";
import { Container, ScaleFade } from "@chakra-ui/react";

export const About = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsOpen(true);
    }, 500);
  }, []);

  return (
    <Container
      maxW={props.isLargerThan1280 ? "70%" : "full"}
      p={10}
      pt={props.isLargerThan1280 ? 20 : 5}
    >
      <ScaleFade initialScale={0.9} in={isOpen}>
        <FirstAbout
          isDark={props.isDark}
          isLargerThan1280={props.isLargerThan1280}
          isOpen={isOpen}
        />
        <SecondAbout
          isDark={props.isDark}
          isLargerThan1280={props.isLargerThan1280}
          isOpen={isOpen}
        />
      </ScaleFade>
    </Container>
  );
};
