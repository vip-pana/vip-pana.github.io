import {
  Divider,
  Text,
  IconButton,
  Link,
  Icon,
  SimpleGrid,
  Container,
  GridItem,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import contactsItems from "../assets/mock/mockContacts";

export const Footer480 = (props) => {
  return (
    <Container>
      <Divider />
      <SimpleGrid columns={3} m={8} justifyItems={"center"}>
        {contactsItems.map((item, index) => (
          <GridItem key={index}>
            <Link href={item.link} isExternal>
              <motion.button whileTap={props.initialAnimation.whileTap}>
                <IconButton
                  aria-label={item.ariaLabel}
                  colorScheme={props.colorOptions.selectedColorScheme}
                  variant={props.colorOptions.buttonVariant}
                  color={props.colorOptions.buttonColor}
                  boxShadow={props.colorOptions.buttonBoxShadow}
                  bgColor={props.colorOptions.buttonBackground}
                  isRound
                  size={"lg"}
                  icon={<Icon as={item.icon} />}
                />
              </motion.button>
            </Link>
          </GridItem>
        ))}
      </SimpleGrid>

      <Text
        color={props.isDark ? "teal" : "purple.700"}
        mb={2}
        textAlign={"center"}
      >
        © 2023 Pana. Built in React.
      </Text>
    </Container>
  );
};
