import { useLocation, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Link,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { DownloadIcon } from "@chakra-ui/icons";

import { motion } from "framer-motion";

import fileCV from "../assets/CV.pdf";

export const Navbar = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { toggleColorMode } = useColorMode();

  return (
    <Flex marginX={"4%"} marginTop={5}>
      <motion.div
        initial={props.initialAnimation.initial}
        animate={props.initialAnimation.animate}
        transition={props.initialAnimation.transition}
      >
        <Link
          href={fileCV}
          download={"CV Pana"}
          position={"fixed"}
          aria-label="my cv"
        >
          <motion.button
            whileHover={props.initialAnimation.whileHover}
            whileTap={props.initialAnimation.whileTap}
          >
            <Button
              aria-label="my resume"
              colorScheme={props.colorOptions.selectedColorScheme}
              variant={props.colorOptions.buttonVariant}
              color={props.colorOptions.buttonColor}
              boxShadow={props.colorOptions.buttonBoxShadow}
              bgColor={props.colorOptions.buttonBackground}
              _hover={props.colorOptions.hoverColor}
              rightIcon={<DownloadIcon />}
            >
              CV
            </Button>
          </motion.button>
        </Link>
      </motion.div>
      <Spacer />
      <ButtonGroup
        isAttached
        colorScheme={props.colorOptions.selectedColorScheme}
        variant={props.colorOptions.buttonVariant}
        boxShadow={props.colorOptions.buttonBoxShadow}
        borderRadius={50}
      >
        <Button
          aria-label="about page"
          borderRadius={50}
          onClick={() => navigate("about")}
          color={
            location.pathname === "/about"
              ? props.colorOptions.buttonColor
              : props.colorOptions.selectedButton
          }
          _hover={
            location.pathname === "/about"
              ? null
              : props.colorOptions.hoverNavbarColor
          }
        >
          About
        </Button>

        <Button
          aria-label="portfolio page"
          borderRadius={50}
          onClick={() => navigate("projects")}
          color={
            location.pathname === "/projects"
              ? props.colorOptions.buttonColor
              : props.colorOptions.selectedButton
          }
          _hover={
            location.pathname === "/projects"
              ? null
              : props.colorOptions.hoverNavbarColor
          }
        >
          Portfolio
        </Button>
      </ButtonGroup>
      <Spacer />
      <motion.div
        initial={props.initialAnimation.initial}
        animate={props.initialAnimation.animate}
        transition={props.initialAnimation.transition}
      >
        <Box position={"fixed"} right={79}>
          <motion.button
            whileHover={props.initialAnimation.whileHover}
            whileTap={props.initialAnimation.whileTap}
          >
            <IconButton
              aria-label="switch theme button"
              icon={props.isDark ? <FaSun /> : <FaMoon />}
              colorScheme={props.colorOptions.selectedColorScheme}
              variant={props.colorOptions.buttonVariant}
              boxShadow={props.colorOptions.buttonBoxShadow}
              color={props.colorOptions.buttonColor}
              bgColor={props.colorOptions.buttonBackground}
              _hover={props.colorOptions.hoverColor}
              onClick={toggleColorMode}
              isRound
            />
          </motion.button>
        </Box>
      </motion.div>
    </Flex>
  );
};
