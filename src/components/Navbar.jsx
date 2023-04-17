import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";

import { FaSun, FaMoon } from "react-icons/fa";

import fileCV from "../assets/CV.pdf";

import { useLocation, useNavigate } from "react-router-dom";

export const Navbar = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { toggleColorMode } = useColorMode();

  return (
    <Flex margin={5}>
      <a href={fileCV} download={"CV Pana"}>
        <Button
          colorScheme={props.isDark ? "teal" : "whiteAlpha"}
          variant={props.isDark ? "outline" : "solid"}
          color={props.isDark ? "teal.300" : "blackAlpha"}
          boxShadow={"0 5px 8px 0 rgba(0, 0, 0, 0.2)"}
          bgColor={!props.isDark ? "white" : ""}
        >
          CV
        </Button>
      </a>
      <Spacer />
      <ButtonGroup
        isAttached
        variant={props.isDark ? "outline" : ""}
        colorScheme={props.isDark ? "teal" : "whiteAlpha"}
        boxShadow={"0 5px 8px 0 rgba(0, 0, 0, 0.2)"}
        borderRadius={50}
      >
        {location.pathname === "/about" ? (
          <Button
            borderRadius={50}
            onClick={() => navigate("about")}
            color={props.isDark ? "teal.300" : "blackAlpha"}
          >
            About
          </Button>
        ) : (
          <Button
            borderRadius={50}
            onClick={() => navigate("about")}
            color={props.isDark ? "teal.700" : "blackAlpha.400"}
          >
            About
          </Button>
        )}
        {location.pathname === "/projects" ? (
          <Button
            onClick={() => navigate("projects")}
            color={props.isDark ? "teal.300" : "blackAlpha"}
            borderRadius={50}
          >
            Portfolio
          </Button>
        ) : (
          <Button
            onClick={() => navigate("projects")}
            color={props.isDark ? "teal.700" : "blackAlpha.400"}
            borderRadius={50}
          >
            Portfolio
          </Button>
        )}
      </ButtonGroup>
      <Spacer />
      <IconButton
        icon={props.isDark ? <FaSun /> : <FaMoon />}
        isRound={true}
        onClick={toggleColorMode}
        bgColor={!props.isDark ? "white" : ""}
        colorScheme={props.isDark ? "teal" : "whiteAlpha"}
        color={props.isDark ? "teal.300" : "blackAlpha"}
        variant={props.isDark ? "outline" : "solid"}
        boxShadow={"0 5px 8px 0 rgba(0, 0, 0, 0.2)"}
      />
    </Flex>
  );
};
