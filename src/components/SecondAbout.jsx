import {
  Flex,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Spacer,
  ListIcon,
  List,
  Stack,
  Center,
  Button,
  VStack,
  Link,
} from "@chakra-ui/react";

import { FaNodeJs, FaReact, FaAngular, FaJava } from "react-icons/fa";

import {
  SiSpring,
  SiCsharp,
  SiDotnet,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
export const SecondAbout = (props) => {
  return (
    <>
      <Heading fontSize={"3xl"} pb={[10, 5]}>
        ✍🏻 About Me
      </Heading>
      <Stack>
        <Text fontSize={props.isLargerThan1280 ? "2xl" : "xl"}>
          I started interested in the IT field in{" "}
          <Text
            bgGradient={
              props.isDark ? "linear(to-r, teal.500, green.500)" : "black"
            }
            bgClip={props.isDark ? "text" : ""}
            as={"b"}
          >
            2020
          </Text>{" "}
          when I have learned to program in JavaScript. Over time, I've expanded
          my knowledge, learning the use of different technologies such as Node,
          React and Angular.
        </Text>
        <Text fontSize={props.isLargerThan1280 ? "2xl" : "xl"}>
          I continued to cultivate my passion by taking a course two-year
          training at
          <Link
            href="https://www.infobasic.it/"
            bgGradient={
              props.isDark ? "linear(to-r, teal.500, green.500)" : "black"
            }
            bgClip={props.isDark ? "text" : ""}
            as={"b"}
          >
            {" "}
            Infobasic
          </Link>
          , where I developed skills advanced in creating BackEnd projects using
          C#, Java and Python and working with SQL and noSQL databases. Today,
          thanks to mine experience, I can easily move from one technology to
          another.
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
      <Flex
        color={props.isDark ? "teal.300" : "blackAlpha.700"}
        fontSize={props.isLargerThan1280 ? "2xl" : "lg"}
        p={props.isLargerThan1280 ? 5 : 0}
        mb={10}
        mt={props.isLargerThan1280 ? 0 : 5}
      >
        <List>
          <ListItem>
            <ListIcon as={FaNodeJs} />
            NodeJS
          </ListItem>
          <ListItem>
            <ListIcon as={FaReact} />
            React
          </ListItem>
          <ListItem>
            <ListIcon as={FaAngular} />
            Angular
          </ListItem>
        </List>
        <Spacer />
        <List>
          <ListItem>
            <ListIcon as={FaJava} />
            Java
          </ListItem>
          <ListItem>
            <ListIcon as={SiSpring} />
            Spring
          </ListItem>
          <ListItem>
            <ListIcon as={SiCsharp} />
            C#
          </ListItem>
        </List>
        <Spacer />
        <List>
          <ListItem>
            <ListIcon as={SiDotnet} />
            .Net
          </ListItem>
          <ListItem>
            <ListIcon as={SiPostgresql} />
            Postgre
          </ListItem>
          <ListItem>
            <ListIcon as={SiMongodb} />
            MongoDB
          </ListItem>
        </List>
      </Flex>

      <Center pt={50}>
        <VStack>
          <Heading fontSize={props.isLargerThan1280 ? "2xl" : "xl"}>
            Per qualsiasi cosa, Contattami!
          </Heading>
          <Text
            textAlign={"center"}
            fontSize={props.isLargerThan1280 ? "xl" : "xl"}
          >
            my inbox is always open. Whether you have a question or just want to
            say hi,
            <br />
            I’ll try my best to get back to you!
          </Text>
          <Link href="mailto:panacciullivincenzo@gmail.com">
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
          </Link>
        </VStack>
      </Center>
    </>
  );
};
