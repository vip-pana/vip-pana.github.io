import { useState, useEffect } from "react";

import { LabelWrapper } from "../components/LabelWrapper";

import {
  Button,
  Container,
  Heading,
  Text,
  Link,
  ScaleFade,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

export const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsOpen(true);
    }, 500);
  }, []);
  return (
    <Container
      maxW={props.isLargerThan1280 ? "70%" : "full"}
      minHeight={"80vh"}
      p={10}
      pt={props.isLargerThan1280 ? 20 : 5}
    >
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Text fontSize={"3xl"}>👋🏻 Hello world!</Text>
        <Heading fontSize={props.isLargerThan1280 ? "42" : "4xl"} mb={3}>
          I'm Vincenzo Panacciulli
        </Heading>
        <LabelWrapper isDark={props.isDark} />
        <Text
          fontSize={props.isLargerThan1280 ? "xl" : "xl"}
          mt={props.isLargerThan1280 ? 5 : -5}
          color={props.isDark ? "gray" : "black"}
        >
          I’m a software developer in continuously discovering of tech
          experience and professional growing. <br /> <br />
          I'm always happy to help and share my knowledge. 😁 <br /> <br />
          Visit my{" "}
          <Text
            as={"b"}
            bgGradient={
              props.isDark
                ? "linear(to-r, teal.500, green.500)"
                : "linear(to-r, purple.500, purple)"
            }
            bgClip={"text"}
          >
            <a href="#/about" aria-label="about page">
              About
            </a>
          </Text>{" "}
          or my{" "}
          <Text
            as={"b"}
            bgGradient={
              props.isDark
                ? "linear(to-r, teal.500, green.500)"
                : "linear(to-r, purple.500, purple)"
            }
            bgClip={"text"}
          >
            <a href="#/projects" aria-label="portfolio page">
              Portfolio
            </a>
          </Text>
          , or if you want{" "}
          <Text
            as={"b"}
            bgGradient={
              props.isDark
                ? "linear(to-r, teal.500, green.500)"
                : "linear(to-r, purple.500, purple)"
            }
            bgClip={"text"}
          >
            <a
              href="https://omnes.one/vincenzo-ivan-panacciulli"
              target="_blank"
              aria-label="my socials"
            >
              check out my social!
            </a>
          </Text>
        </Text>

        <br />
        <motion.button
          whileHover={props.initialAnimation.whileHover}
          whileTap={props.initialAnimation.whileTap}
        >
          <Link
            href="mailto:panacciullivincenzo@gmail.com"
            aria-label="my email"
          >
            <Button
              aria-label="contact me"
              mt={props.isLargerThan1280 ? 20 : "35px"}
              variant={props.colorOptions.buttonVariant}
              colorScheme={props.colorOptions.selectedColorScheme}
              color={props.isDark ? "whiteAlpha" : "blackAlpha"}
              border={"transparent"}
              boxShadow={props.colorOptions.buttonBoxShadow}
              bgColor={props.colorOptions.buttonBackground}
              size={"lg"}
              bgGradient={
                props.isDark ? "linear(to-r, teal.500, green.500)" : "black"
              }
            >
              Contact me for anything!
            </Button>
          </Link>
        </motion.button>
      </ScaleFade>
    </Container>
  );
};
