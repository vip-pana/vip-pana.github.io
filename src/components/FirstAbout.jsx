import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Link,
  Spacer,
  Stack,
} from "@chakra-ui/react";

import photo from "../assets/fotoFill.jpg";
import { LabelWrapper } from "./LabelWrapper";

export const FirstAbout = (props) => {
  return (
    <Flex pb={20}>
      <Box minW={"65%"} maxW={props.isLargerThan1280 ? "xl" : "full"}>
        <Heading fontSize={"3xl"} pb={5}>
          ✍🏻 About Me
        </Heading>
        <Heading fontSize={props.isLargerThan1280 ? "3xl" : "2xl"}>
          I'm Vincenzo Panacciulli
        </Heading>
        <Heading
          fontSize={"3xl"}
          background="linear-gradient(to right, #ac00e6, #faf089)"
          backgroundClip={"text"}
        >
          @
          <LabelWrapper isDark={props.isDark} fromAbout={true} />
        </Heading>
        <Stack color={props.isDark ? "gray" : "black"}>
          <Text fontSize={props.isLargerThan1280 ? "xl" : "md"}>
            Hi! I’m Vincenzo and I love discover and study tech stuff.{" "}
            <Box as="span" color={props.isDark ? "teal.300" : "purple"}>
              I've been active in IT since 2020 
            </Box>{" "}
            when I have learned to programming in JavaScript - After creating my
            first web page I felt like a hacker, and I've been learning ever
            since.
          </Text>
          <Text fontSize={props.isLargerThan1280 ? "xl" : "md"}>
            Fast forward to today, i continued to study passing{" "}
            <Box as="span" color={props.isDark ? "teal.300" : "purple"}>
              two years at Infobasic bootcamp
            </Box>{" "}
            , where I developed the most useful skills, and{" "}
            <Box as="span" color={props.isDark ? "teal.300" : "purple"}>
              started to work in Vittoria RMS
            </Box>{" "}
            company as a Developer. Now i can say i could easily learn to use
            any technology in a short time.
          </Text>
          <Text fontSize={props.isLargerThan1280 ? "xl" : "md"} pb={20}>
            I’m currently focusing on improve my knowledge and skills learning
            Cloud and participating on Open Source development. I’m excited to
            create innovative solutions and improve the user experience!
          </Text>
        </Stack>
      </Box>
      <Spacer />
      {props.isLargerThan1280 ? (
        <Box>
          <Image
            src={photo}
            boxSize="330px"
            objectFit={"cover"}
            borderRadius={"51% 49% 68% 32% / 45% 46% 54% 55% "}
            mr={5}
          />
          <Box
            fontSize={20}
            textAlign={"center"}
            color={props.isDark ? "teal.300" : "purple"}
            mt={"5"}
          >
            <Text>
              <Link href="mailto:panacciullivincenzo@gmail.com">
                panacciullivincenzo@gmail.com
              </Link>
              <br />
              <Link href="https://linkedin.com/in/vip-pana" isExternal>
                linkedin.com/in/vip-pana
              </Link>
              <br />
              <Link href="https://github.com/vip-pana" isExternal>
                github.com/vip-pana
              </Link>
            </Text>
          </Box>
        </Box>
      ) : null}
    </Flex>
  );
};
