import { Flex } from "@chakra-ui/react";
import { Typewriter, ZigZagGame } from "../components";

// The "Home" tab
const Home = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      flex="1"
    >
      <Typewriter
        text={[
          "Hello, World!",
          "I'm Ashlynn.",
          "This is my website.",
          "Thanks for stopping by!",
        ]}
        zIndex={1}
      />
      <ZigZagGame mt={16} />
    </Flex>
  );
};

export default Home;
