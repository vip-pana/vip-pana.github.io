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
  Link,
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
      <Heading>👋 Hello everyone!</Heading>
      <Heading fontSize={"xxx-large"}> I'm Vincenzo Panacciulli</Heading>
      <Heading
        bgGradient={
          props.isDark ? "linear(to-r, teal.500, green.500)" : "black"
        }
        bgClip={props.isDark ? "text" : ""}
        mt={[2, 2]}
      >
        Full Stack Dev
      </Heading>
      <Text fontSize={"2xl"} pt={10}>
        I am passionate about the world of the web, technology and of
        innovation. I've been active since 2020.
      </Text>
      <Text fontSize={"2xl"} pt={2}>
        I'm in continuily discovering new technologies but i'm specializing on
        the back end world.
      </Text>

      <Text fontSize={"2xl"} pt={10}>
        Check my About or my Portfolio!
      </Text>
      <Link href="mailto:panacciullivincenzo@gmail.com">
        <Button
          variant={props.isDark ? "outline" : "solid"}
          colorScheme={props.isDark ? "teal" : "whiteAlpha"}
          color={props.isDark ? "whiteAlpha" : "blackAlpha"}
          border={props.isDark ? "" : ""}
          boxShadow={"0 5px 8px 0 rgba(0, 0, 0, 0.2)"}
          bgColor={!props.isDark ? "white" : ""}
          mt={10}
          size={"lg"}
          bgGradient={
            props.isDark ? "linear(to-r, teal.500, green.500)" : "black"
          }
        >
          Write me for anything
        </Button>
      </Link>
    </Container>
  );
};
