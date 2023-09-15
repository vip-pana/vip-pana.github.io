import { GridItem, SimpleGrid, Stack, Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import SingleCard from "./SingleCard";
import CertificationCard from "./CertificationCard";

import mock from "../assets/mock/cardMock";
import certificationItems from "../assets/mock/certificationMock";

export const SecondPortfolio = (props) => {
  return (
    <Stack marginY={10}>
      <Tabs isFitted variant={"enclosed"}>
        <TabList>
          <Tab>Projects</Tab>
          <Tab>Certifications</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid
              spacing={5}
              templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
            >
              {mock.map((item, index) => (
                <GridItem w={"100%"} key={index}>
                  <SingleCard item={item} isDark={props.isDark} />
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
                <GridItem w={"100%"} key={index}>
                  <CertificationCard item={item} isDark={props.isDark} />
                </GridItem>
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};
