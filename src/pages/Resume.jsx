import { Flex, Image } from "@chakra-ui/react";
import { FadeIn } from "../components";
import { AVAILABLE_HEIGHT } from "../utils/layout";

// The "Resume" tab
const Resume = () => {
  return (
    <FadeIn>
      <Flex
        flex="1"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={`${process.env.PUBLIC_URL}/resume.svg`}
          alt="Resume"
          maxH={AVAILABLE_HEIGHT}
          maxW="100%"
          objectFit="contain"
          border="1px solid"
          borderColor="primary.500"
          shadow="md"
        />
      </Flex>
    </FadeIn>
  );
};

export default Resume;
