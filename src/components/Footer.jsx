import {
  Container,
  Divider,
  Flex,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";

export const Footer = (props) => {
  return (
    <Container maxW={"70%"}>
      <Divider />
      <Flex
        alignItems={"center"}
        color={props.isDark ? "teal" : "blackAlpha.700"}
      >
        <HStack spacing={25} p={5}>
          <Text>
            <NavLink to={"about"}>About</NavLink>
          </Text>
          <Text>
            <NavLink to={"projects"}>Portfolio</NavLink>
          </Text>
        </HStack>
        <Spacer />
        <Text>© 2023 Pana. Built in React.</Text>
      </Flex>
    </Container>
  );
};
