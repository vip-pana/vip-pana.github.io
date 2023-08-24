import { useEffect, useState } from "react";
import { Container, ScaleFade } from "@chakra-ui/react";

import { FirstPortfolio } from "../components/FirstPortfolio";

import { SecondPortfolio } from "../components/SecondPortfolio";

export const Portfolio = (props) => {
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
        <FirstPortfolio isDark={props.isDark} />
        <SecondPortfolio isDark={props.isDark} />
      </ScaleFade>
    </Container>
  );
};
