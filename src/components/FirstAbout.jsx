import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Link,
  Spacer,
  Stack,
} from '@chakra-ui/react';

import photo from '../assets/picture.webp';
import { LabelWrapper } from './LabelWrapper';
import { ContactButton } from './ContactButton';

export const FirstAbout = (props) => {
  return (
    <Flex pb={20}>
      <Box minW={'60%'} maxW={props.isLargerThan1280 ? 'xl' : 'full'}>
        <Heading fontSize={'3xl'} pb={5}>
          ✍🏻 About Me
        </Heading>
        <Heading fontSize={props.isLargerThan1280 ? '3xl' : '2xl'}>
          I'm Vincenzo Panacciulli
        </Heading>
        <Heading
          fontSize={'3xl'}
          background="linear-gradient(to right, #88C0D0, #A3BE8C)"
          backgroundClip={'text'}
        >
          @
          <LabelWrapper fromAbout={true} />
        </Heading>
        <Stack color="gray">
          <Text fontSize={props.isLargerThan1280 ? 'xl' : 'md'}>
            Hi! I’m Vincenzo and I love discovering and studying tech stuff.{' '}
            <Box as="span" color="#88C0D0">
              I've been active in IT since 2020 
            </Box>{' '}
            when I learned to program in JavaScript - After creating my first
            web page I felt like a hacker, and I've been learning ever since.
          </Text>
          <Text fontSize={props.isLargerThan1280 ? 'xl' : 'md'}>
            Fast forward to today, I continued to study passing{' '}
            <Box as="span" color="#88C0D0">
              two years at Infobasic boot camp
            </Box>{' '}
            , where I developed the most useful skills, and{' '}
            <Box as="span" color="#88C0D0">
              started to work in Vittoria RMS
            </Box>{' '}
            company as a Developer. Now I can say I could easily learn to use
            any technology in a short time.
          </Text>
          <Text fontSize={props.isLargerThan1280 ? 'xl' : 'md'} pb={20}>
            I’m currently focusing on improving my knowledge and skills by
            learning Cloud and participating in Open Source development. I’m
            excited to create innovative solutions and improve the user
            experience!{' '}
          </Text>
        </Stack>
      </Box>
      <Spacer />
      {props.isLargerThan1280 ? (
        <Box>
          <Image
            alt="Foto profilo"
            src={photo}
            boxSize="330px"
            objectFit={'cover'}
            borderRadius={'51% 49% 68% 32% / 45% 46% 54% 55% '}
            mr={5}
          />
          <ContactButton
            initialAnimation={props.initialAnimation}
            colorOptions={props.colorOptions}
          />
        </Box>
      ) : null}
    </Flex>
  );
};
