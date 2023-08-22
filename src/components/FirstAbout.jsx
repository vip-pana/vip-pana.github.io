import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Link,
  Spacer,
  keyframes,
} from "@chakra-ui/react";

import photo from "../assets/fotoFill.jpg";
import styled from "@emotion/styled";
import { LabelWrapper } from "./LabelWrapper";

export const FirstAbout = (props) => {
  return (
    <Flex pb={20}>
      <Box maxW={props.isLargerThan1280 ? "xl" : "full"}>
        <Text fontSize={props.isLargerThan1280 ? "4xl" : "2xl"}>
          👋🏻 Hello everyone!
        </Text>
        <Heading
          fontSize={props.isLargerThan1280 ? "5xl" : "4xl"}
          mb={props.isLargerThan1280 ? 5 : 2}
        >
          I'm Vincenzo Panacciulli
        </Heading>

        <LabelWrapper isDark={props.isDark}/>

        <Text
          fontSize={props.isLargerThan1280 ? "2xl" : "xl"}
          mt={props.isLargerThan1280 ? 50 : -5}
          textAlign={"justify"}
        >
          I am passionate about the world of the web, technology and of innovation based in Italy. My desire to grow professionally constantly
          push me to study and approach many fields, but my main focus is on the
          Back End world.
        </Text>
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
        null
      )}
    </Flex>
  );
};

const animation = keyframes`
  0% {opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px);}
  100% {opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px);}
`;

const gradient = keyframes`
{
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}}
`;

const Wrapper = styled.span`
  display: inline-block;

  span {
    animation: ${gradient} 5s ease-in-out;
    background: linear-gradient(to right, #ac00e6, #faf089, #38a169);
    background-size: 300%;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    display: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  span:nth-of-type(1) {
    animation-delay: 0.3s;
  }
  span:nth-of-type(2) {
    animation-delay: 0.6s;
  }
  span:nth-of-type(3) {
    animation-delay: 0.9s;
  }
  span:nth-of-type(4) {
    animation-delay: 1.2s;
  }
  span:nth-of-type(6) {
    animation-delay: 0.3s;
  }
  span:nth-of-type(7) {
    animation-delay: 0.6s;
  }
  span:nth-of-type(8) {
    animation-delay: 0.9s;
  }
  span:nth-of-type(9) {
    animation-delay: 1.2s;
  }
  span:nth-of-type(10) {
    animation-delay: 1.5s;
  }
  span:nth-of-type(12) {
    animation-delay: 0.3s;
  }
  span:nth-of-type(13) {
    animation-delay: 0.6s;
  }
  span:nth-of-type(14) {
    animation-delay: 0.9s;
  }
`;
