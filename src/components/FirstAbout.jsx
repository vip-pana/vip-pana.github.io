import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Link,
  Spacer,
} from "@chakra-ui/react";

export const FirstAbout = (props) => {
  return (
    <Flex pb={20}>
      <Box maxW={"xl"}>
        <Text fontSize={props.isLargerThan1280 ? "4xl" : "2xl"}>
          👋 Hello everyone!
        </Text>
        <Heading
          fontSize={props.isLargerThan1280 ? "5xl" : "4xl"}
          mb={props.isLargerThan1280 ? 5 : 2}
        >
          I'm Vincenzo Panacciulli.
        </Heading>

        <Heading
          bgGradient={
            props.isDark ? "linear(to-r, teal.500, green.500)" : "black"
          }
          bgClip={props.isDark ? "text" : ""}
          mb={[50, 25]}
        >
          Full Stack Dev.
        </Heading>

        <Text fontSize={props.isLargerThan1280 ? "2xl" : "xl"}>
          I am passionate about the world of the web, technology and of
          innovation. My hunger for new knowledge and the desire to grow
          professionally they constantly push me to study and approach many
          fields, but my main focus is on the world of BackEnd.
        </Text>
      </Box>
      <Spacer />
      {props.isLargerThan1280 ? (
        <Box>
          <Image
            src="src\assets\good.png"
            boxSize="400px"
            objectFit={"cover"}
          />
          <Box
            fontSize={20}
            textAlign={"center"}
            color={props.isDark ? "teal.300" : "blackAlpha.700"}
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
      ) : (
        <></>
      )}
    </Flex>
  );
};
