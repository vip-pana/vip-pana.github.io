import { IconButton, Link, VStack } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export const ContactButton = (props) => {
  return (
    <VStack position={"fixed"} bottom={"10%"} left={"5%"} spacing={5}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Link href="https://github.com/vip-pana" isExternal>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
          </motion.button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Link href="https://linkedin.com/in/vip-pana" isExternal>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
          </motion.button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Link href="mailto:panacciullivincenzo@gmail.com">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
          </motion.button>
        </Link>
      </motion.div>
    </VStack>
  );
};
