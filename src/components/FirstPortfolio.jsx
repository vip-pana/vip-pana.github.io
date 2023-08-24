import { Heading, Stack, Text } from "@chakra-ui/react";

export const FirstPortfolio = (props) => {
  return (
    <>
      <Heading fontSize={"3xl"} pb={5}>
        🛠 My Portfolio
      </Heading>
      <Stack color={props.isDark ? "gray" : "black"}>
        <Text fontSize={"xl"} pb={5}>
          I dedicate my free time to creating personal projects, practicing
          sports, and experimenting with new technologies to stay constantly
          updated on the latest industry trends.
        </Text>
        <Text fontSize={"xl"} pb={10}>
          I'm always looking for new ways to improve performance and the
          efficiency of the projects I work on, using the most technological
          advances and best development practices.
        </Text>
      </Stack>
    </>
  );
};
