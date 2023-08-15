import {
  Center,
  Container,
  Divider,
  Text,
  IconButton,
  Spacer,
  Link,
} from "@chakra-ui/react";

import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

import { motion } from "framer-motion";

export const Footer480 = () => {
  return (
    <Container>
      <Divider />
      <Center m={30}>
        <Link href="https://github.com/vip-pana" isExternal>
          <motion.button whileTap={{ scale: 0.7 }}>
            <IconButton rounded={"full"} size={"lg"} icon={<FaGithub />} />
          </motion.button>
        </Link>
        <Spacer />
        <Link href="mailto:panacciullivincenzo@gmail.com">
          <motion.button whileTap={{ scale: 0.7 }}>
            <IconButton rounded={"full"} size={"lg"} icon={<FaEnvelope />} />
          </motion.button>
        </Link>
        <Spacer />
        <Link href="https://linkedin.com/in/vip-pana" isExternal>
          <motion.button whileTap={{ scale: 0.7 }}>
            <IconButton rounded={"full"} size={"lg"} icon={<FaLinkedinIn />} />
          </motion.button>
        </Link>
      </Center>
      <Center>
        <Text mb={2}>© 2023 Pana. Built in React.</Text>
      </Center>
    </Container>
  );
};
