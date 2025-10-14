import { Flex, Image } from "@chakra-ui/react";
import { FadeIn } from "../components";

// The "Resume" tab
const Resume = () => {
  return (
    <FadeIn>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height={"80vh"}
      >
        <Image
          src={`${process.env.PUBLIC_URL}/resume.svg`}
          alt="Resume"
          fit={"contain"}
          border={"1px solid"}
          borderColor={"primary.500"}
          shadow={"md"}
          maxH="70vh"
        />
      </Flex>
    </FadeIn>
  );
};

export default Resume;
