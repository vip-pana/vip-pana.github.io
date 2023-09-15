import {
    Card,
    CardBody,
    Image,
    Heading,
    Box,
    Link,
    Text,
    CardHeader,
} from "@chakra-ui/react";

export default function CertificationCard(props) {
    return (
        <Card
            boxShadow={"0 5px 8px 0 rgba(0, 0, 0, 0.2)"}
            size={"sm"}
        >
            <CardHeader></CardHeader>
            <Link href={props.item.link} isExternal alignSelf={"center"}>
                <Image
                    src={props.item.img}
                    alt={props.item.title}
                    boxSize='200px'
                    _hover={
                        {
                            transform: "scale(1.05)",
                            WebkitTransition: "0.4s",
                        }
                    }
                />
            </Link>
            <CardBody>
                <Heading size={"md"} textAlign={"center"}>
                    <Link
                        href={props.item.link}
                        isExternal
                        aria-label={props.item.title + " github"}
                    >
                        {props.item.title}
                    </Link>
                </Heading>
                <Text textAlign={"center"}>{props.item.body}</Text>
            </CardBody>
        </Card>
    );
}
