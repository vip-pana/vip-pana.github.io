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
      <motion.button whileTap={props.initialAnimation.whileTap}>
        <IconButton
          aria-label="switch theme button"
          icon={props.isDark ? <FaSun /> : <FaMoon />}
          isRound={true}
          onClick={toggleColorMode}
          size="lg"
          colorScheme={props.colorOptions.selectedColorScheme}
          bgColor={props.colorOptions.buttonBackground}
          color={props.colorOptions.buttonColor}
          variant={props.colorOptions.buttonVariant}
          boxShadow={props.colorOptions.buttonBoxShadow}
        />
      </motion.button>
      <Spacer />
      <Menu>
        <MenuButton
          aria-label="menu"
          rightIcon={<HiChevronDown />}
          as={Button}
          size={"lg"}
          variant={props.isDark ? "outline" : ""}
          colorScheme={props.colorOptions.selectedColorScheme}
          bgColor={props.colorOptions.buttonBackground}
          boxShadow={props.colorOptions.buttonBoxShadow}
        >
          Menu
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => navigate("about")}>About</MenuItem>
          <MenuItem onClick={() => navigate("projects")}>PortFolio</MenuItem>
          <MenuDivider />
          <a
            href={fileCV}
            download={"CV Pana"}
            target="_blank"
            aria-label="my resume"
          >
            <MenuItem>
              CV
              <Spacer />
              <DownloadIcon />
            </MenuItem>
          </a>
        </MenuList>
      </Menu>
    </Flex>
  );
};
