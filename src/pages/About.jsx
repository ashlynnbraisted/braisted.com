import { Box, IconButton, Image, Flex, Link, Text } from "@chakra-ui/react";
import { Typewriter, FadeIn } from "../components";
import { GrLinkedinOption, GrGithub } from "react-icons/gr";
import { IoMailSharp } from "react-icons/io5";
import { aboutData } from "../data";
import { AVAILABLE_HEIGHT_FULL } from "../utils/layout";

const About = () => {
  const { name, role, intro, publications, links } = aboutData;
  const baseDelay = 1.1;
  const increment = 0.6;

  const fadeSections = [
    ...intro.map((p) => ({
      type: "paragraph",
      content: <Text mb={4}>{p}</Text>,
    })),
    {
      type: "publications",
      content: (
        <Box mt={2} mb={6}>
          <span className="bold">Publications</span>
          {publications.map((pub, i) => (
            <Text key={i}>
              <Link color="primary.500" isExternal href={pub.href}>
                {pub.label}
              </Link>
            </Text>
          ))}
        </Box>
      ),
    },
    {
      type: "links",
      content: (
        <Flex flexDirection="row" gap={3}>
          <IconButton
            aria-label="LinkedIn"
            icon={<GrLinkedinOption size={25} />}
            onClick={() => window.open(links.linkedin, "_blank")}
            variant="ghost"
            color="primary.500"
            minW="unset"
            minH="unset"
            h="auto"
          />
          <IconButton
            aria-label="GitHub"
            icon={<GrGithub size={26} />}
            onClick={() => window.open(links.github, "_blank")}
            variant="ghost"
            color="primary.500"
            minW="unset"
            minH="unset"
            h="auto"
          />
          <IconButton
            aria-label="Email"
            icon={<IoMailSharp size={29} />}
            onClick={() => (window.location.href = `mailto:${links.email}`)}
            variant="ghost"
            color="primary.500"
            minW="unset"
            minH="unset"
            h="auto"
          />
        </Flex>
      ),
    },
  ];

  return (
    <Flex height={AVAILABLE_HEIGHT_FULL} width="100%" gap={2}>
      {/* Text Column */}
      <Flex flexGrow={1} flexDirection="column">
        <Typewriter text={name} repeating={false} pb={2} />
        <FadeIn delay={baseDelay}>
          <Text fontSize={24} mb={6}>
            <span className="bold">{role}</span>
          </Text>
        </FadeIn>

        {fadeSections.map((section, index) => (
          <FadeIn key={index} delay={baseDelay * 2 + index * increment}>
            {section.content}
          </FadeIn>
        ))}
      </Flex>

      {/* Image */}
      <Image
        flexShrink={1}
        src={`${process.env.PUBLIC_URL}/logo/logo-transparent.svg`}
        right={0}
        bottom={0}
        maxHeight={AVAILABLE_HEIGHT_FULL}
        maxWidth="80%"
        marginTop="auto"
        objectFit="contain"
      />
    </Flex>
  );
};

export default About;
