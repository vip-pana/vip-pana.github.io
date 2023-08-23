import { useEffect, useState } from "react";
import { Container, GridItem, ScaleFade, SimpleGrid } from "@chakra-ui/react";

import { FirstPortfolio } from "../components/FirstPortfolio";
import SingleCard from "../components/SingleCard";

import mock from "../assets/mock";

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
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
        >
          {mock.map((item, index) => (
            <GridItem w={"100%"}>
              <SingleCard key={index} item={item} isDark={props.isDark} />
            </GridItem>
          ))}
        </SimpleGrid>
      </ScaleFade>
    </Container>
  );
};
