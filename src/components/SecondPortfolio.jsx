import { GridItem, SimpleGrid, Stack } from "@chakra-ui/react";
import SingleCard from "./SingleCard";

import mock from "../assets/mock";

export const SecondPortfolio = (props) => {
  return (
    <Stack marginY={10}>
      <SimpleGrid
        spacing={5}
        templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
      >
        {mock.map((item, index) => (
          <GridItem w={"100%"}>
            <SingleCard key={index} item={item} isDark={props.isDark} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Stack>
  );
};
