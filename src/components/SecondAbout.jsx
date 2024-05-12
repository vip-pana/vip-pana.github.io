import {
  Heading,
  Text,
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
  GridItem,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import langItems from "../assets/mock/langMock.js";
import workItems from "../assets/mock/mockWork.js";

export const SecondAbout = (props) => {
  return (
    <>
      <Heading
        fontSize={props.isLargerThan1280 ? "3xl" : "2xl"}
        textAlign={"initial"}
        pb={props.isLargerThan1280 ? 10 : 5}
      >
        🏬 Where I've Worked
      </Heading>
      <Tabs mb={20} variant="enclosed">
        <TabList>
          {workItems.map((item, index) => (
            <Tab key={index} color={props.isDark ? "teal.300" : "purple"}>
              {item.company}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
            {workItems.map((item, index) => (
          <TabPanel>
              <>
                <Text fontSize={"2xl"} key={index}>
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
          </TabPanel>
            ))}
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
          fontSize={props.isLargerThan1280 ? "2xl" : "lg"}
          p={props.isLargerThan1280 ? 5 : 0}
          mt={props.isLargerThan1280 ? 0 : 5}
          spacing={5}
        >
          {langItems.map((el, index) => (
            <GridItem>
              <Icon as={el.icon} fontSize={"3xl"} />{" "}
              <Text
                as={"span"}
                color={props.isDark ? "teal.300" : "purple"}
                key={index}
              >
                {el.name}
              </Text>
            </GridItem>
          ))}
        </SimpleGrid>
      </center>

      <Center pt={100}>
        <VStack>
          <Heading
            fontSize={props.isLargerThan1280 ? "xl" : "xl"}
            textAlign={"center"}
          >
            ✉️ Feel free to contact me for anything you need!
          </Heading>
          <Text>
            <Text
              textAlign={"center"}
              size={"md"}
              color={props.isDark ? "gray" : "black"}
            >
              My inbox is always open. Whether you have a question or just want
              to say hello,
              <br />
              I'll do my best to get back to you as soon as possible!{" "}
            </Text>
          </Text>
          <Link
            href="mailto:panacciullivincenzo@gmail.com"
            aria-label="my email"
          >
            <motion.button
              whileHover={props.initialAnimation.whileHover}
              whileTap={props.initialAnimation.whileTap}
            >
              <Button
                aria-label="contact me"
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
