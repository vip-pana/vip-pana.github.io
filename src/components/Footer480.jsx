import {
  Center,
  Container,
  Divider,
  Text,
  IconButton,
  Link,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";

import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

import { motion } from "framer-motion";
import contactsItems from "../assets/mockContacts";

export const Footer480 = (props) => {
  return (
    <Container>
      <Divider />
      <center>
        <SimpleGrid columns={3} m={8}>
          {contactsItems.map((item, index) => (
            <>
              <Link key={index} href={item.link} isExternal>
                <motion.button whileTap={props.initialAnimation.whileTap}>
                  <IconButton
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
            </>
          ))}
        </SimpleGrid>
      </center>

      <Center>
        <Text color={props.isDark ? "teal" : "purple.700"} mb={2}>
          © 2023 Pana. Built in React.
        </Text>
      </Center>
    </Container>
  );
};
