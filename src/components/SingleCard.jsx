import {
  Card,
  CardBody,
  Text,
  Image,
  Heading,
  HStack,
  Tag,
  IconButton,
  CardHeader,
  Wrap,
  WrapItem,
  Link,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function SingleCard(props) {
  return (
    <Card
      size={"lg"}
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
      <LinkBox>
        <LinkOverlay href={props.item.link} isExternal>
          <HStack>
            <Image
              src={props.item.img}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              boxSize={100}
              mt={4}
              ml={4}
            />
            <Wrap gap={2} pt={5}>
              {props.item.label.map((el, index) => (
                <WrapItem key={index}>
                  <Tag
                    w={"100%"}
                    colorScheme={props.isDark ? "teal" : ""}
                    mr={4}
                    boxShadow={"0 2px 8px 0 rgba(0, 0, 0, 0.2)"}
                    mb={2}
                  >
                    {el}
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </HStack>
        </LinkOverlay>
      </LinkBox>
      <Link
        href={props.item.link}
        position={"absolute"}
        right={0}
        m={0}
        isExternal
      >
        <IconButton icon={<FaExternalLinkAlt />} variant={"ghost"} />
      </Link>

      <CardHeader pb={0}>
        <Heading size={"md"}>{props.item.title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{props.item.body}</Text>
      </CardBody>
    </Card>
  );
}
