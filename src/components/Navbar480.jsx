import {
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";

import { HiChevronDown } from "react-icons/hi";
import { FaSun, FaMoon } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import fileCV from "../assets/CV.pdf";

export const Navbar480 = (props) => {
  const navigate = useNavigate();
  const { toggleColorMode } = useColorMode();

  return (
    <Flex m={5}>
      <IconButton
        icon={props.isDark ? <FaSun /> : <FaMoon />}
        isRound={true}
        onClick={toggleColorMode}
        size="lg"
        colorScheme={props.isDark ? "teal" : ""}
        bgColor={!props.isDark ? "white" : ""}
        color={props.isDark ? "teal.300" : "blackAlpha"}
        variant={props.isDark ? "outline" : "solid"}
        boxShadow={"0 5px 8px 0 rgba(0, 0, 0, 0.2)"}
      />
      <Spacer />
      <Menu>
        <MenuButton
          as={Button}
          colorScheme={props.isDark ? "teal" : "whiteAlpha"}
          variant={props.isDark ? "outline" : ""}
          bgColor={!props.isDark ? "white" : ""}
          size={"lg"}
          rightIcon={<HiChevronDown />}
          boxShadow={"0 5px 8px 0 rgba(0, 0, 0, 0.2)"}
        >
          Menu
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => navigate("about")}>About</MenuItem>
          <MenuItem onClick={() => navigate("projects")}>PortFolio</MenuItem>
          <a href={fileCV} download={"CV Pana"} target="_blank">
            <MenuItem>Resume</MenuItem>
          </a>
        </MenuList>
      </Menu>
    </Flex>
  );
};
