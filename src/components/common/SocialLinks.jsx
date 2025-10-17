import { Flex, IconButton } from "@chakra-ui/react";
import { GrLinkedinOption, GrGithub } from "react-icons/gr";
import { IoMailSharp } from "react-icons/io5";
import { aboutData } from "../../data";

const SocialLinks = ({ gap = 3, ...props }) => {
  const { links } = aboutData;
  return (
    <Flex flexDirection="row" gap={gap} {...props}>
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
  );
};

export default SocialLinks;
