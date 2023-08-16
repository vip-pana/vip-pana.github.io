import {
  Heading,
  Text,
  Stack,
  Center,
  Button,
  VStack,
  Link,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import langItems from "../assets/langMock.js";

export const SecondAbout = (props) => {
  return (
    <>
      <Heading fontSize={"3xl"} pb={[10, 5]}>
        ✍🏻 About Me
      </Heading>
      <Stack>
        <Text
          textAlign={"justify"}
          fontSize={props.isLargerThan1280 ? "2xl" : "xl"}
        >
          I've been active in IT since
          <Text
            bgGradient={
              props.isDark ? "linear(to-r, teal.500, green.500)" : "black"
            }
            bgClip={props.isDark ? "text" : ""}
            as={"b"}
          >
            {" "}
            2020{" "}
          </Text>
          when I have learned to programming in JavaScript. Over time, I've
          expanded my knowledge, learning the use of different technologies such
          as Node, React and Angular.
        </Text>
        <Text fontSize={props.isLargerThan1280 ? "2xl" : "xl"}>
          I continued to cultivate my passion by taking a course two-year
          training at
          <Text
            href="https://www.infobasic.it/"
            bgGradient={
              props.isDark ? "linear(to-r, teal.500, green.500)" : "black"
            }
            bgClip={props.isDark ? "text" : ""}
            as={"b"}
          >
            {" "}
            Infobasic
          </Text>
          , where I developed skills advanced in creating Back End projects
          using C#, Java and Python and working with SQL and noSQL databases.
          Today, thanks to mine experience, I can easily move from one
          technology to another.
        </Text>
        <Text fontSize={props.isLargerThan1280 ? "2xl" : "xl"} pb={20}>
          I'm currently focusing on deepening the technologies Cloud and Open
          Source development. I'm excited to put in practice my knowledge and
          help create solutions innovative and avant-garde in the IT field.
        </Text>
      </Stack>
      <Heading fontSize={props.isLargerThan1280 ? "2xl" : "xl"}>
        💻 My preferred technologies
      </Heading>

      <center>
        <SimpleGrid
          columns={2}
          color={props.isDark ? "teal.300" : "blackAlpha.700"}
          fontSize={props.isLargerThan1280 ? "2xl" : "lg"}
          p={props.isLargerThan1280 ? 5 : 0}
          mt={props.isLargerThan1280 ? 0 : 5}
          spacing={5}
        >
          {langItems.map((el, index) => (
            <Text key={index}>
              <Icon as={el.icon} /> {el.name}
            </Text>
          ))}
        </SimpleGrid>
      </center>

      <Center pt={50}>
        <VStack>
          <Heading
            fontSize={props.isLargerThan1280 ? "2xl" : "xl"}
            textAlign={"center"}
          >
            Feel free to contact me for anything you need!
          </Heading>
          <Text
            textAlign={"center"}
            fontSize={props.isLargerThan1280 ? "xl" : "xl"}
          >
            My inbox is always open. Whether you have a question or just want to
            say hello,
            <br />
            I'll do my best to get back to you as soon as possible!
          </Text>
          <Link href="mailto:panacciullivincenzo@gmail.com">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                size={"lg"}
                m={5}
                colorScheme={props.isDark ? "teal" : "whiteAlpha"}
                variant={props.isDark ? "outline" : "solid"}
                color={props.isDark ? "teal.300" : "blackAlpha"}
                boxShadow={"0 5px 8px 0 rgba(0, 0, 0, 0.2)"}
                bgColor={!props.isDark ? "white" : ""}
              >
                Contact me!
              </Button>
            </motion.button>
          </Link>
        </VStack>
      </Center>
    </>
  );
};
