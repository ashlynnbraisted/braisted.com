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
  FadeIn,
  PortfolioCard,
  Typewriter,
} from "../components";
import { portfolioData } from "../data";
import { HEADER_HEIGHT_PX } from "../utils/layout";

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
        top={HEADER_HEIGHT_PX}
        repeating={false}
        position="sticky"
        bg="white"
        width="100%"
        zIndex={10}
        height={{ base: "40px", md: "64px" }}
      />

      {/* Tabs */}
      <Tabs
        variant="unstyled"
        size="lg"
        onChange={() => window.scrollTo({ top: 0 })}
      >
        <TabList
          position="sticky"
          top={{
            base: `calc(${HEADER_HEIGHT_PX.base} + 40px)`,
            md: `calc(${HEADER_HEIGHT_PX.md} + 64px)`,
          }}
          bg="white"
          zIndex={10}
          pt={{ base: 1, md: 4 }}
          pb={3}
          pl={{ base: 0, md: 2 }}
          gap={{ base: 4, md: 8 }}
        >
          {categories.map((cat) => (
            <Tab key={cat.key} p={0} fontSize={{ base: "16px", md: "22px" }}>
              {cat.label}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {categories.map((cat) => (
            <TabPanel key={cat.key} p={{ base: 0, md: 4 }}>
              <VStack spacing={6} mb={5}>
                {cat.key === "photography" ? (
                  <ConcertPhotos />
                ) : (
                  Object.values(portfolioData)
                    .filter((p) => p.category === cat.key)
                    .map((project, i) => (
                      <FadeIn
                        key={i}
                        width={{ base: "100%", md: "90%" }}
                        whileInView={true}
                      >
                        <PortfolioCard key={i} project={project} />
                      </FadeIn>
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
