import {
  Card,
  CardBody,
  Image,
  Heading,
  Link,
  Text,
  CardHeader,
} from '@chakra-ui/react';
import { CertificationItem } from '../types';

interface CertificationCardProps {
  item: CertificationItem;
  isLargerThan1280: boolean;
}

export default function CertificationCard(props: CertificationCardProps) {
  return (
    <Card
      boxShadow={'0 5px 8px 0 rgba(0, 0, 0, 0.2)'}
      size={'sm'}
      maxW={props.isLargerThan1280 ? '' : '250px'}
    >
      <CardHeader></CardHeader>
      <Link href={props.item.link} isExternal alignSelf={'center'}>
        <Image
          src={props.item.img}
          alt={props.item.title}
          boxSize="200px"
          _hover={{
            transform: 'scale(1.05)',
            WebkitTransition: '0.4s',
          }}
        />
      </Link>
      <CardBody>
        <Heading size={'md'} textAlign={'center'}>
          <Link
            href={props.item.link}
            isExternal
            aria-label={props.item.title + ' github'}
          >
            {props.item.title}
          </Link>
        </Heading>
        <Text textAlign={'center'}>{props.item.body}</Text>
      </CardBody>
    </Card>
  );
}
