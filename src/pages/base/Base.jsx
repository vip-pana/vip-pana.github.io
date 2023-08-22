import { Outlet } from "react-router-dom";

import { ContactButton } from "../../components/ContactButton";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

import { Navbar480 } from "../../components/Navbar480";
import { Footer480 } from "../../components/Footer480";

import { Box, Center, position } from "@chakra-ui/react";
import { motion } from "framer-motion";


export const Base = (props) => {
  return (
    <>
      {props.isLargerThan1280 ? (
        <>
          <ContactButton isDark={props.isDark} />
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
          <Navbar isDark={props.isDark} />
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "linear", duration: 0.1, x: { duration: 0.5 } }}
          >
           
            <Outlet />
          </motion.div>
          <Footer isDark={props.isDark} />
        </>
      ) : (
        <>
          <Navbar480 isDark={props.isDark} />
          
          <Outlet />
          <Footer480 />
        </>
      )}
    </>
  );
};
