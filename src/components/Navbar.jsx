import { useLocation, useNavigate } from "react-router-dom";

import {
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
    <Flex margin={5}>
      <motion.div
        initial={props.initialAnimation.initial}
        animate={props.initialAnimation.animate}
        transition={props.initialAnimation.transition}
      >
        <Link href={fileCV} download={"CV Pana"}>
          <motion.button
            whileHover={props.initialAnimation.whileHover}
            whileTap={props.initialAnimation.whileTap}
          >
            <Button
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
        {location.pathname === "/about" ? (
          <Button
            borderRadius={50}
            onClick={() => navigate("about")}
            color={props.colorOptions.buttonColor}
          >
            About
          </Button>
        ) : (
          <Button
            borderRadius={50}
            onClick={() => navigate("about")}
            color={props.colorOptions.selectedButton}
            _hover={props.colorOptions.hoverColor}
          >
            About
          </Button>
        )}
        {location.pathname === "/projects" ? (
          <Button
            borderRadius={50}
            onClick={() => navigate("projects")}
            color={props.colorOptions.buttonColor}
          >
            Portfolio
          </Button>
        ) : (
          <Button
            borderRadius={50}
            onClick={() => navigate("projects")}
            color={props.colorOptions.selectedButton}
            _hover={props.colorOptions.hoverColor}
          >
            Portfolio
          </Button>
        )}
      </ButtonGroup>
      <Spacer />
      <motion.div
        initial={props.initialAnimation.initial}
        animate={props.initialAnimation.animate}
        transition={props.initialAnimation.transition}
      >
        <motion.button
          whileHover={props.initialAnimation.whileHover}
          whileTap={props.initialAnimation.whileTap}
        >
          <IconButton
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
      </motion.div>
    </Flex>
  );
};
