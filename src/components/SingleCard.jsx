import {
  Card,
  CardBody,
  Text,
  Image,
  Heading,
  HStack,
  Tag,
  Box,
  IconButton,
  CardHeader,
  Wrap,
  WrapItem,
  Link,
} from "@chakra-ui/react";

import { FaExternalLinkAlt } from "react-icons/fa";

const checkLabelColor = (label) => {
  switch (label) {
    case "Java":
      return "red";
    case "React":
      return "blue";
    case "C#":
      return "purple";
    case "Python":
      return "yellow";
    case "PostgreSQL":
      return "linkedin";
    case "Django":
      return "gray";
    case "Azure Cloud":
      return "facebook";
    case "Typescript":
      return "cyan";
    default:
      return "whatsapp";
  }
};

export default function SingleCard(props) {
  return (
    <Card
      maxW={"sm"}
      minH={"24rem"}
      boxShadow={"0 5px 8px 0 rgba(0, 0, 0, 0.2)"}
      _hover={
        props.isDark
          ? {
              transform: "scale(1.05)",
              WebkitTransition: "0.4s",
            }
          : {
              transform: "scale(1.05)",
              WebkitTransition: "0.4s",
            }
      }
    >
      <Box>
        <HStack>
          <Image
            src={props.item.img}
            alt={props.item.title}
            borderRadius="lg"
            boxSize={100}
            mt={4}
            ml={4}
          />
          <Wrap gap={2} pt={5}>
            {props.item.label.map((singleLabel, index) => (
              <WrapItem key={index}>
                <Tag
                  w={"100%"}
                  colorScheme={checkLabelColor(singleLabel)}
                  mr={4}
                  boxShadow={"0 2px 8px 0 rgba(0, 0, 0, 0.2)"}
                  mb={2}
                >
                  {singleLabel}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </HStack>
      </Box>
      <Link
        aria-label={props.item.title + " link"}
        href={props.item.link}
        position={"absolute"}
        right={0}
        m={0}
        isExternal
      >
        <IconButton
          aria-label={props.item.title + " github"}
          icon={<FaExternalLinkAlt />}
          size={"sm"}
          variant={"ghost"}
        />
      </Link>

      <CardHeader pb={0}>
        <Heading size={"md"}>
          <Link
            href={props.item.link}
            isExternal
            aria-label={props.item.title + " github"}
          >
            {props.item.title}
          </Link>
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>{props.item.body}</Text>
      </CardBody>
    </Card>
  );
}
