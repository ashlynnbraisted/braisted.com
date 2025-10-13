import {
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  VStack,
} from "@chakra-ui/react";
import { ConcertPhotos, PortfolioCard, Typewriter } from "../components";
import { portfolioData } from "../data";

const categories = [
  { key: "code", label: "Code" },
  { key: "uiux", label: "UI/UX" },
  { key: "photography", label: "Photography" },
];

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
          pl={2}
          gap={8}
        >
          {categories.map((cat) => (
            <Tab key={cat.key} p={0} fontSize="22px">
              {cat.label}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {categories.map((cat) => (
            <TabPanel key={cat.key}>
              <VStack spacing={6} mb={5}>
                {cat.key === "photography" ? (
                  <ConcertPhotos />
                ) : (
                  Object.values(portfolioData)
                    .filter((p) => p.category === cat.key)
                    .map((project, i) => (
                      <PortfolioCard key={i} project={project} />
                    ))
                )}
              </VStack>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Portfolio;
