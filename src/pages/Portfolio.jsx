import {
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  VStack,
} from "@chakra-ui/react";
import {
  ConcertPhotos,
  Priceline,
  CoveyPhoto,
  Ribbles,
  RSI,
  Swap,
  Kanbas,
  ImageProcessor,
  CacophonyCrossing,
  PersonalMediaJournal,
  PersonalWebsite,
} from "../components/portfolio-pieces";
import { Typewriter } from "../components";

// The "Portfolio" tab
const Portfolio = () => {
  return (
    <Box>
      <Typewriter
        text={[
          "You made it!",
          "...Well...",
          "I made it!",
          "Welcome to my portfolio.",
        ]}
        repeating={false}
        position="sticky"
        top="10vh"
        bg="white"
        width="100%"
        zIndex={10}
        height="7vh"
      />

      {/*A set of tabs to sort portfolio work */}
      <Tabs variant="unstyled" size="lg">
        <TabList
          position="sticky"
          top="17vh"
          bg="white"
          zIndex={10}
          pt={4}
          pb={3}
        >
          <Tab
            p={0}
            pr={8}
            pl={2}
            _selected={{ color: "primary.500" }}
            fontSize={"22px"}
            variant="defaultTab"
          >
            Code
          </Tab>
          <Tab
            p={0}
            pr={8}
            _selected={{ color: "primary.500" }}
            fontSize={"22px"}
            variant="defaultTab"
          >
            UI/UX
          </Tab>
          <Tab
            p={0}
            pr={8}
            _selected={{ color: "primary.500" }}
            fontSize={"22px"}
            variant="defaultTab"
          >
            Photography
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <VStack spacing={6} mb={5}>
              {/* {[Priceline, Ribbles].map((CardComp, i) => (
                <CardComp key={i} reverseLayout={i % 2 === 1} />
              ))} */}
              <Priceline />
              <Kanbas />
              <CoveyPhoto />
              <ImageProcessor />
              <CacophonyCrossing />
              <Ribbles />
              <PersonalMediaJournal />
              <PersonalWebsite />
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack spacing={6} mb={5}>
              {/* {[Swap].map((CardComp, i) => (
                <CardComp key={i} reverseLayout={i % 2 === 1} />
              ))} */}
              <Swap />
              <RSI />
            </VStack>
          </TabPanel>
          <TabPanel>
            <ConcertPhotos />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Portfolio;
