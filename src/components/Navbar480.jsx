import { useNavigate } from "react-router-dom";

import {
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import { HiChevronDown } from "react-icons/hi";
import { FaSun, FaMoon } from "react-icons/fa";

import { motion } from "framer-motion";

import fileCV from "../assets/CV.pdf";

export const Navbar480 = (props) => {
  const navigate = useNavigate();
  const { toggleColorMode } = useColorMode();

  return (
    <Flex m={5}>
      <motion.button whileTap={{ scale: 0.7 }}>
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
      </motion.button>
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
          <MenuDivider />
          <a href={fileCV} download={"CV Pana"} target="_blank">
            <MenuItem>
              Resume
              <Spacer />
              <DownloadIcon />
            </MenuItem>
          </a>
        </MenuList>
      </Menu>
    </Flex>
  );
};
