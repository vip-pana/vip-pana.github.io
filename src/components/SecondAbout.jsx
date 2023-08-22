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
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tabs,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import langItems from "../assets/langMock.js";
import workItems from "../assets/mock copy.js";

export const SecondAbout = (props) => {
  return (
    <>
      <Heading fontSize={"3xl"} pb={props.isLargerThan1280 ? 10 : 5}>
        ✍🏻 About Me
      </Heading>
      <Stack>
        <Text fontSize={props.isLargerThan1280 ? "2xl" : "xl"}>
          I've been active in IT since
          <Text
            bgGradient={
              props.isDark
                ? "linear(to-r, teal.500, green.500)"
                : "linear(to-r, purple.500, purple)"
            }
            bgClip={"text"}
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
              props.isDark
                ? "linear(to-r, teal.500, green.500)"
                : "linear(to-r, purple.500, purple)"
            }
            bgClip={"text"}
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

      <Heading
        fontSize={props.isLargerThan1280 ? "3xl" : "2xl"}
        textAlign={"initial"}
        pb={props.isLargerThan1280 ? 10 : 5}
      >
        💻 Where I've Worked
      </Heading>
      <Tabs mb={20} variant={"enclosed"}>
        <TabList>
          {workItems.map((item, index) => (
            <Tab key={index} color={props.isDark ? "teal.300" : "purple"}>
              {item.company}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          <TabPanel>
            {workItems.map((item, index) => (
              <>
                <Text fontSize={"2xl"}>
                  <Text as={"b"}>{item.title}</Text>{" "}
                  <Link
                    href={item.link}
                    isExternal
                    color={props.isDark ? "teal.300" : "purple"}
                  >
                    @ {item.company}
                  </Link>
                </Text>
                <Text color={props.isDark ? "teal.500" : "gray"} mb={2}>
                  {item.time}
                </Text>
                <UnorderedList>
                  {item.Tasks.map((task, indexTwo) => (
                    <ListItem key={indexTwo} color={"gray"} mb={2}>
                      {task}
                    </ListItem>
                  ))}
                </UnorderedList>
              </>
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Heading
        fontSize={props.isLargerThan1280 ? "2xl" : "xl"}
        textAlign={props.isLargerThan1280 ? "initial" : "center"}
        pb={props.isLargerThan1280 ? 10 : 5}
      >
        💻 My preferred technologies
      </Heading>

      <center>
        <SimpleGrid
          columns={props.isLargerThan1280 ? 2 : 1}
          color={props.isDark ? "teal.300" : "purple"}
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
          <Text textAlign={"center"} fontSize={"xl"}>
            My inbox is always open. Whether you have a question or just want to
            say hello,
            <br />
            I'll do my best to get back to you as soon as possible!
          </Text>
          <Link href="mailto:panacciullivincenzo@gmail.com">
            <motion.button
              whileHover={props.initialAnimation.whileHover}
              whileTap={props.initialAnimation.whileTap}
            >
              <Button
                size={"lg"}
                m={5}
                colorScheme={props.colorOptions.selectedColorScheme}
                variant={props.colorOptions.buttonVariant}
                color={props.colorOptions.buttonColor}
                boxShadow={props.colorOptions.buttonBoxShadow}
                bgColor={props.colorOptions.buttonBackground}
                _hover={props.colorOptions.hoverColor}
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
