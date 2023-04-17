import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Image,
  Heading,
  Stack,
  Text,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

export const Home = (props) => {
  return (
    <Container
      maxW={props.isLargerThan1280 ? "70%" : "full"}
      minHeight={"80vh"}
      p={10}
      pt={props.isLargerThan1280 ? 20 : 5}
    >
      <Heading>Hi im pana</Heading>
      <Text fontSize={"xl"} pt={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem
        fugiat inventore molestias dignissimos reprehenderit hic alias cum,
        debitis ut optio repellat maiores blanditiis quasi in officiis animi
        dolorum voluptatem unde. Vero quos placeat voluptatibus voluptas?
        Deleniti maxime eius commodi rerum consectetur excepturi explicabo odit,
        magnam asperiores? Optio, obcaecati porro?
      </Text>

      <Text fontSize={"xl"} pt={10}>
        Check my story or my Portfolio!
      </Text>

      <Button
        variant={props.isDark ? "outline" : "solid"}
        colorScheme={props.isDark ? "teal" : "whiteAlpha"}
        color={props.isDark ? "teal.300" : "blackAlpha"}
        boxShadow={"0 5px 8px 0 rgba(0, 0, 0, 0.2)"}
        bgColor={!props.isDark ? "white" : ""}
        mt={10}
      >
        Write me for anything
      </Button>
    </Container>
  );
};
