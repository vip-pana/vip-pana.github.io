import { useNavigate } from 'react-router-dom';

import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { HiChevronDown } from 'react-icons/hi';
import { ColorOptions } from '../types';

import fileCV from '../assets/CV.pdf';

interface Navbar480Props {
  colorOptions: ColorOptions;
}

export const Navbar480 = (props: Navbar480Props) => {
  const navigate = useNavigate();

  return (
    <Flex m={5}>
      <Spacer />
      <Menu>
        <MenuButton
          aria-label="menu"
          rightIcon={<HiChevronDown />}
          as={Button}
          size={'lg'}
          variant="outline"
          colorScheme={props.colorOptions.selectedColorScheme}
          bgColor={props.colorOptions.buttonBackground}
          boxShadow={props.colorOptions.buttonBoxShadow}
        >
          Menu
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => navigate('about')}>About</MenuItem>
          <MenuItem onClick={() => navigate('projects')}>PortFolio</MenuItem>
          <MenuDivider />
          <a
            href={fileCV}
            download={'CV Pana'}
            target="_blank"
            aria-label="my resume"
          >
            <MenuItem>
              CV
              <Spacer />
              <DownloadIcon />
            </MenuItem>
          </a>
        </MenuList>
      </Menu>
    </Flex>
  );
};
