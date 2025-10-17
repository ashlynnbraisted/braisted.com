import { Box, Image, Flex, Link, Text } from "@chakra-ui/react";
import { Typewriter, FadeIn, ScrollContainer } from "../components";
import { aboutData } from "../data";
import { AVAILABLE_HEIGHT_FULL } from "../utils/layout";
import { SocialLinks } from "../components";

const About = () => {
  const { name, role, intro, publications, links } = aboutData;
  const baseDelay = 1.1;
  const increment = 0.6;

  const fadeSections = [
    ...intro.map((p) => ({
      type: "paragraph",
      content: (
        <Text fontSize={{ base: 14, md: 16 }} mb={4}>
          {p}
        </Text>
      ),
    })),
    {
      type: "publications",
      content: (
        <Box mt={2} mb={{ base: 2, md: 6 }}>
          <span className="bold">Publications</span>
          {publications.map((pub, i) => (
            <Text fontSize={{ base: 14, md: 16 }} key={i}>
              <Link color="primary.500" isExternal href={pub.href}>
                {pub.label}
              </Link>
            </Text>
          ))}
        </Box>
      ),
    },
  ];

  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      maxHeight={{ base: AVAILABLE_HEIGHT_FULL, md: AVAILABLE_HEIGHT_FULL }}
      width="100%"
      gap={2}
      p={{ base: 4, md: 0 }}
      pt={{ base: 8, md: 0 }}
    >
      {/* Text Column */}
      <Flex
        flexGrow={1}
        flexDirection="column"
        height={{ base: "auto", md: AVAILABLE_HEIGHT_FULL }}
        textAlign={{ base: "left", md: "left" }}
      >
        <Typewriter text={name} repeating={false} pb={{ base: 1, md: 2 }} />
        <FadeIn delay={baseDelay}>
          <Text fontSize={{ base: 18, md: 24 }}>{role}</Text>
        </FadeIn>

        {/* Scrollable section for text */}
        <ScrollContainer>
          {fadeSections.map((section, index) => (
            <FadeIn key={index} delay={baseDelay * 2 + index * increment}>
              {section.content}
            </FadeIn>
          ))}
        </ScrollContainer>

        {/* Social links with fade */}
        <FadeIn delay={baseDelay * 2 + fadeSections.length * increment}>
          <SocialLinks
            links={links}
            justifyContent={"flex-start"}
            py={{ base: 0, md: 3 }}
          />
        </FadeIn>
      </Flex>
      {/* Image */}
      <Image
        src={`${process.env.PUBLIC_URL}/logo/logo-transparent.svg`}
        flexShrink={1}
        maxHeight={AVAILABLE_HEIGHT_FULL}
        maxWidth={"80%"}
        marginTop={"auto"}
        marginBottom={0}
        objectFit="contain"
        alignSelf={"flex-end"}
        position={"sticky"}
        display={{ base: "none", md: "block" }}
      />
    </Flex>
  );
};

export default About;
