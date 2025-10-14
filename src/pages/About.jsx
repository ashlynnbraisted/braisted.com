import { Box, IconButton, Image, Flex, Link, Text } from "@chakra-ui/react";
import { Typewriter, FadeIn } from "../components";
import { GrMailOption, GrLinkedinOption, GrGithub } from "react-icons/gr";
import { useEffect, useRef, useState } from "react";
import { aboutData } from "../data";

// A wrapper that expands width if vertical overflow occurs
const ExpandingBox = ({
  children,
  baseWidth = "20%",
  expandBy = "10%",
  ...props
}) => {
  const ref = useRef(null);
  const [width, setWidth] = useState(baseWidth);

  useEffect(() => {
    const el = ref.current;
    const checkOverflow = () => {
      if (!el) return;
      setWidth(
        el.scrollHeight > el.clientHeight
          ? `calc(${baseWidth} + ${expandBy})`
          : baseWidth
      );
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [baseWidth, expandBy]);

  return (
    <Box ref={ref} width={width} transition="width 0.3s ease" {...props}>
      {children}
    </Box>
  );
};

const About = () => {
  const { name, role, intro, publications, links } = aboutData;
  const baseDelay = 1.4;
  const increment = 0.6;

  const fadeSections = [
    ...intro.map((p) => ({
      type: "paragraph",
      content: <Text mb={6}>{p}</Text>,
    })),
    {
      type: "publications",
      content: (
        <Box mb={6}>
          <Text fontWeight={500}>Publications</Text>
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
        <Flex flexDirection="row" justifyContent="flex-start">
          <IconButton
            aria-label="LinkedIn"
            icon={<GrLinkedinOption size={25} />}
            onClick={() => window.open(links.linkedin, "_blank")}
            variant="ghost"
            color="primary.500"
          />
          <IconButton
            aria-label="Email"
            icon={<GrMailOption size={26} />}
            onClick={() => (window.location.href = `mailto:${links.email}`)}
            variant="ghost"
            color="primary.500"
          />
          <IconButton
            aria-label="GitHub"
            icon={<GrGithub size={26} />}
            onClick={() => window.open(links.github, "_blank")}
            variant="ghost"
            color="primary.500"
          />
        </Flex>
      ),
    },
  ];

  return (
    <Flex>
      <ExpandingBox
        fontSize={16}
        maxHeight="80vh"
        display="flex"
        flexDirection="column"
      >
        <Box overflowY="auto" flexGrow={1} pr={2}>
          <Typewriter text={name} repeating={false} mb={2} />
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
        </Box>
      </ExpandingBox>

      <Image
        src={`${process.env.PUBLIC_URL}/logo/logo-transparent.svg`}
        right={0}
        bottom={0}
        minWidth="80%"
        maxHeight="85vh"
        position="fixed"
        zIndex={-1}
        objectFit="contain"
      />
    </Flex>
  );
};

export default About;
