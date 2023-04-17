import { HStack, Select, Spacer } from "@chakra-ui/react";

export const LabelSelecter = (props) => {
  return (
    <HStack mt={5}>
      <Select
        placeholder="order by difficult"
        borderColor={props.isDark ? "teal" : "transparent"}
        bg={props.isDark ? "transparent" : "white"}
        w={300}
        borderRadius={50}
        boxShadow={"0 5px 8px 0 rgba(0, 0, 0, 0.2)"}
      />
      <Spacer />
      <Select
        placeholder="order by language"
        borderColor={props.isDark ? "teal" : "transparent"}
        w={300}
        borderRadius={50}
        bg={props.isDark ? "transparent" : "white"}
        boxShadow={"0 5px 8px 0 rgba(0, 0, 0, 0.2)"}
      />
    </HStack>
  );
};
