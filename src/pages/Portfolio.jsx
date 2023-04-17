import {
  Box,
  Container,
  Grid,
  GridItem,
  ScaleFade,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FirstPortfolio } from "../components/FirstPortfolio";
import { LabelSelecter } from "../components/LabelSelecter";
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
        <FirstPortfolio />
        <SimpleGrid
          spacing={5}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
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
