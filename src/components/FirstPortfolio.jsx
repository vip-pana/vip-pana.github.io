import { Heading, Text } from "@chakra-ui/react";

export const FirstPortfolio = (props) => {
  return (
    <>
      <Heading fontSize={48} pb={5}>
        🛠 My Portfolio
      </Heading>
      <Text fontSize={props.isLargerThan1280 ? "2xl" : "xl"} pb={5}>
        I dedicate my free time to creating personal projects, to practicing
        sports and experimenting with new technologies to stay constantly
        updated on the latest industry trends.
      </Text>
      <Text fontSize={props.isLargerThan1280 ? "2xl" : "xl"} pb={10}>
        I'm always looking for new ways to improve performance and the
        efficiency of the projects I work on, using the most technologies
        advances and best development practices.
      </Text>
    </>
  );
};
