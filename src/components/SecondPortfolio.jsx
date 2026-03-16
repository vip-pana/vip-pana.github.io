import { GridItem, SimpleGrid, Stack, Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import SingleCard from "./SingleCard";
import CertificationCard from "./CertificationCard";

import mock from "../assets/mock/cardMock";
import certificationItems from "../assets/mock/certificationMock";

export const SecondPortfolio = (props) => {
  return (
    <Stack marginTop={10}>
      <Tabs isFitted variant={"enclosed"}>
        <TabList color={props.isDark ? "#5E81AC" : "#81A1C1"} borderBottom={"1px"}>
          <Tab _selected={{ color: props.isDark ? "#88C0D0" : "#5E81AC", borderColor: props.isDark ? "#5E81AC" : "#81A1C1", backgroundColor: props.isDark ? "" : "#F5F7FA" }}>Projects</Tab>
          <Tab _selected={{ color: props.isDark ? "#88C0D0" : "#5E81AC", borderColor: props.isDark ? "#5E81AC" : "#81A1C1", backgroundColor: props.isDark ? "" : "#F5F7FA" }}>Certifications</Tab>
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
                    <SingleCard item={item} isDark={props.isDark} isLargerThan1280={props.isLargerThan1280} />
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
                    <CertificationCard item={item} isDark={props.isDark} isLargerThan1280={props.isLargerThan1280} />
                  </center>
                </GridItem>
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack >
  );
};
