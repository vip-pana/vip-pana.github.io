import { Outlet } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

import { Navbar480 } from "../components/Navbar480";
import { Footer480 } from "../components/Footer480";

import { Box, Center } from "@chakra-ui/react";
import { ContactButton } from "../components/ContactButton";

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
          <Outlet />
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
