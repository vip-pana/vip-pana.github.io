import { GridItem, SimpleGrid, Stack, Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import SingleCard from "./SingleCard";
import CertificationCard from "./CertificationCard";

import mock from "../assets/mock/cardMock";
import certificationItems from "../assets/mock/certificationMock";

export const SecondPortfolio = (props) => {
  return (
    <Stack marginTop={10}>
      <Tabs isFitted variant={"enclosed"}>
        <TabList color={props.isDark ? "teal.600" : "purple.600"} borderBottom={"1px"}>
          <Tab _selected={{ color: props.isDark ? "teal.300" : "purple", borderColor: props.isDark ? "teal.700" : "purple.600", backgroundColor: props.isDark ? "" : "white" }}>Projects</Tab>
          <Tab _selected={{ color: props.isDark ? "teal.300" : "purple", borderColor: props.isDark ? "teal.700" : "purple.600", backgroundColor: props.isDark ? "" : "white" }}>Certifications</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid
              spacing={5}
              templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
            >
              {mock.map((item, index) => (
                <GridItem key={index}>
                  <SingleCard item={item} isDark={props.isDark} isLargerThan1280={props.isLargerThan1280} />
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
                  <CertificationCard item={item} isDark={props.isDark} isLargerThan1280={props.isLargerThan1280} />
                </GridItem>
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack >
  );
};
