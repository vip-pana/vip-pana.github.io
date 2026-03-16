import { useLocation, useNavigate } from 'react-router-dom';

import { Button, ButtonGroup, Flex, Link, Spacer } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';

import { motion } from 'framer-motion';

import fileCV from '../assets/CV.pdf';

export const Navbar = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Flex marginX={'4%'} marginTop={5}>
      <motion.div
        initial={props.initialAnimation.initial}
        animate={props.initialAnimation.animate}
        transition={props.initialAnimation.transition}
      >
        <Link
          href={fileCV}
          download={'CV Pana'}
          position={'fixed'}
          aria-label="my cv"
        >
          <motion.button
            whileHover={props.initialAnimation.whileHover}
            whileTap={props.initialAnimation.whileTap}
          >
            <Button
              aria-label="my resume"
              colorScheme={props.colorOptions.selectedColorScheme}
              variant={props.colorOptions.buttonVariant}
              color={props.colorOptions.buttonColor}
              boxShadow={props.colorOptions.buttonBoxShadow}
              bgColor={props.colorOptions.buttonBackground}
              _hover={props.colorOptions.hoverColor}
              rightIcon={<DownloadIcon />}
            >
              CV
            </Button>
          </motion.button>
        </Link>
      </motion.div>
      <Spacer />
      <ButtonGroup
        isAttached
        colorScheme={props.colorOptions.selectedColorScheme}
        variant={props.colorOptions.buttonVariant}
        boxShadow={props.colorOptions.buttonBoxShadow}
        borderRadius={50}
      >
        <Button
          aria-label="about page"
          borderRadius={50}
          onClick={() => navigate('about')}
          bgColor={props.colorOptions.buttonBackground}
          color={
            location.pathname === '/about'
              ? props.colorOptions.buttonColor
              : props.colorOptions.selectedButton
          }
          _hover={
            location.pathname === '/about'
              ? null
              : props.colorOptions.hoverNavbarColor
          }
        >
          About
        </Button>

        <Button
          aria-label="portfolio page"
          borderRadius={50}
          onClick={() => navigate('projects')}
          bgColor={props.colorOptions.buttonBackground}
          color={
            location.pathname === '/projects'
              ? props.colorOptions.buttonColor
              : props.colorOptions.selectedButton
          }
          _hover={
            location.pathname === '/projects'
              ? null
              : props.colorOptions.hoverNavbarColor
          }
        >
          Portfolio
        </Button>
      </ButtonGroup>
      <Spacer />
    </Flex>
  );
};
