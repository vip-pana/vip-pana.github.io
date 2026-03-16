import {
  GridItem,
  SimpleGrid,
  Stack,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import SingleCard from './SingleCard';
import CertificationCard from './CertificationCard';

import mock from '../assets/mock/cardMock';
import certificationItems from '../assets/mock/certificationMock';

interface SecondPortfolioProps {
  isLargerThan1280: boolean;
}

export const SecondPortfolio = (props: SecondPortfolioProps) => {
  return (
    <Stack marginTop={10}>
      <Tabs isFitted variant={'enclosed'}>
        <TabList color="#5E81AC" borderBottom={'1px'}>
          <Tab
            _selected={{
              color: '#88C0D0',
              borderColor: '#5E81AC',
              backgroundColor: '',
            }}
          >
            Projects
          </Tab>
          <Tab
            _selected={{
              color: '#88C0D0',
              borderColor: '#5E81AC',
              backgroundColor: '',
            }}
          >
            Certifications
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid
              spacing={5}
              templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
            >
              {mock.map((item, index) => (
                <GridItem key={index}>
                  <center>
                    <SingleCard
                      item={item}
                      isLargerThan1280={props.isLargerThan1280}
                    />
                  </center>
                </GridItem>
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid
              spacing={5}
              templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
            >
              {certificationItems.map((item, index) => (
                <GridItem key={index}>
                  <center>
                    <CertificationCard
                      item={item}
                      isLargerThan1280={props.isLargerThan1280}
                    />
                  </center>
                </GridItem>
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};
