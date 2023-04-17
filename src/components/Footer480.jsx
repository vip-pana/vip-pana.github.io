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
export const Footer480 = () => {
  return (
    <Container>
      <Divider />
      <Center m={30}>
        <Link href="https://github.com/vip-pana" isExternal>
          <IconButton rounded={"full"} size={"lg"} icon={<FaGithub />} />
        </Link>
        <Spacer />
        <Link href="mailto:panacciullivincenzo@gmail.com">
          <IconButton rounded={"full"} size={"lg"} icon={<FaEnvelope />} />
        </Link>
        <Spacer />
        <Link href="https://linkedin.com/in/vip-pana" isExternal>
          <IconButton rounded={"full"} size={"lg"} icon={<FaLinkedinIn />} />
        </Link>
      </Center>
      <Center>
        <Text mb={2}>© 2023 Pana. Built in React.</Text>
      </Center>
    </Container>
  );
};
