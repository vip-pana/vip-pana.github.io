import {
  ButtonGroup,
  Divider,
  IconButton,
  Link,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export const ContactButton = (props) => {
  return (
    <VStack position={"fixed"} bottom={"10%"} left={"5%"} spacing={5}>
      <Link href="https://github.com/vip-pana" isExternal>
        <IconButton
          icon={<FaGithub />}
          isRound={true}
          bgColor={!props.isDark ? "white" : ""}
          colorScheme={props.isDark ? "teal" : "whiteAlpha"}
          color={props.isDark ? "teal.300" : "blackAlpha"}
          variant={props.isDark ? "outline" : "solid"}
          boxShadow={"0 5px 8px 0 rgba(0, 0, 0, 0.2)"}
          border={"transparent"}
          size={"lg"}
        />
      </Link>
      <Link href="https://linkedin.com/in/vip-pana" isExternal>
        <IconButton
          icon={<FaLinkedinIn />}
          isRound={true}
          bgColor={!props.isDark ? "white" : ""}
          colorScheme={props.isDark ? "teal" : "whiteAlpha"}
          color={props.isDark ? "teal.300" : "blackAlpha"}
          variant={props.isDark ? "outline" : "solid"}
          boxShadow={"0 5px 8px 0 rgba(0, 0, 0, 0.2)"}
          border={"transparent"}
          size={"lg"}
        />
      </Link>
      <Link href="mailto:panacciullivincenzo@gmail.com">
        <IconButton
          icon={<FaEnvelope />}
          isRound={true}
          bgColor={!props.isDark ? "white" : ""}
          colorScheme={props.isDark ? "teal" : "whiteAlpha"}
          color={props.isDark ? "teal.300" : "blackAlpha"}
          variant={props.isDark ? "outline" : "solid"}
          boxShadow={"0 5px 8px 0 rgba(0, 0, 0, 0.2)"}
          border={"transparent"}
          size={"lg"}
        />
      </Link>
    </VStack>
  );
};
