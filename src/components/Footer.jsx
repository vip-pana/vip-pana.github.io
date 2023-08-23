import {
  Container,
  Divider,
  Flex,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";

import { NavLink, useLocation } from "react-router-dom";

export const Footer = (props) => {
  const location = useLocation();
  return (
    <Container maxW={"70%"}>
      <Divider />
      <Flex alignItems={"center"} color={props.isDark ? "teal" : "purple.700"}>
        <HStack spacing={25} p={5}>
          {props.isDark ? (
            <>
              <Text
                color={location.pathname == "/about" ? "teal.300" : ""}
                _hover={props.colorOptions.hoverColor}
              >
                <NavLink to={"about"}>About</NavLink>
              </Text>
              <Text
                color={location.pathname == "/projects" ? "teal.300" : ""}
                _hover={props.colorOptions.hoverColor}
              >
                <NavLink to={"projects"}>Portfolio</NavLink>
              </Text>
            </>
          ) : (
            <>
              <Text
                color={location.pathname == "/about" ? "black" : ""}
                _hover={props.colorOptions.hoverColor}
              >
                <NavLink to={"about"}>About</NavLink>
              </Text>
              <Text
                color={location.pathname == "/projects" ? "black" : ""}
                _hover={props.colorOptions.hoverColor}
              >
                <NavLink to={"projects"}>Portfolio</NavLink>
              </Text>
            </>
          )}
        </HStack>
        <Spacer />
        <Text color={props.isDark ? "teal" : "purple.700"}>
          © 2023 Pana. Built in React.
        </Text>
      </Flex>
    </Container>
  );
};
