import { useLocation, useNavigate } from "react-router-dom";

import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
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
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a href={fileCV} download={"CV Pana"}>
            <Button
              colorScheme={props.isDark ? "teal" : "whiteAlpha"}
              variant={props.isDark ? "outline" : "solid"}
              color={props.isDark ? "teal.300" : "blackAlpha"}
              boxShadow={"0 5px 8px 0 rgba(0, 0, 0, 0.2)"}
              bgColor={!props.isDark ? "white" : ""}
              rightIcon={<DownloadIcon />}
            >
              CV
            </Button>
          </a>
        </motion.button>
      </motion.div>
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
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
        </motion.button>
      </motion.div>
    </Flex>
  );
};
