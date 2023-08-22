import { Outlet } from "react-router-dom";

import { ContactButton } from "../../components/ContactButton";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

import { Navbar480 } from "../../components/Navbar480";
import { Footer480 } from "../../components/Footer480";

import { Box, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Base = (props) => {
  return (
    <>
      {props.isLargerThan1280 ? (
        <>
          <ContactButton
            isDark={props.isDark}
            initialAnimation={props.initialAnimation}
            colorOptions={props.colorOptions}
          />
          <Center>
            <Box
              position={"absolute"}
              w={"70%"}
              h={"100%"}
              bottom={0}
              bgColor={props.isDark ? "#0A1929" : "#FFFFFF"}
              zIndex={-1}
            />
          </Center>
          <Navbar
            isDark={props.isDark}
            initialAnimation={props.initialAnimation}
            colorOptions={props.colorOptions}
          />
          <motion.div
            className="box"
            initial={props.initialAnimation.initial}
            animate={props.initialAnimation.animate}
            transition={{ ease: "linear", duration: 0.1, x: { duration: 0.5 } }}
          >
            <Outlet />
          </motion.div>
          <Footer isDark={props.isDark} colorOptions={props.colorOptions} />
        </>
      ) : (
        <>
          <Navbar480
            isDark={props.isDark}
            initialAnimation={props.initialAnimation}
            colorOptions={props.colorOptions}
          />

          <Outlet />
          <Footer480
            isDark={props.isDark}
            initialAnimation={props.initialAnimation}
            colorOptions={props.colorOptions}
          />
        </>
      )}
    </>
  );
};
