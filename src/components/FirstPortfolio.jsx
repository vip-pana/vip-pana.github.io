import { Heading, Text } from "@chakra-ui/react";
import React from "react";

export const FirstPortfolio = () => {
  return (
    <>
      <Heading fontSize={48} pb={5}>
        🛠 My beautiful Portfolio
      </Heading>
      <Text fontSize={24} pb={5} textAlign={"justify"}>
        I dedicate my free time to creating personal projects, to practicing
        sports and experimenting with new technologies to stay constantly
        updated on the latest industry trends.
      </Text>
      <Text fontSize={24} pb={10} textAlign={"justify"}>
        I'm always looking for new ways to improve performance and the
        efficiency of the projects I work on, using the most technologies
        advances and best development practices.
      </Text>
    </>
  );
};
