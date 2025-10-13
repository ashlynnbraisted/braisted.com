import { Flex, Box, Text } from "@chakra-ui/react";

// A scrolling banner across the screen
const ScrollingBanner = ({ text, text2 = text }) => {
  return (
    <Box
      bottom={0}
      left={0}
      right={0}
      width="100%"
      bg="primary.500"
      overflow="hidden"
      whiteSpace="nowrap"
      py={1}
      position="fixed"
    >
      <Flex
        width="100%"
        flexDirection={"row"}
        justifyContent={"space-between"}
        animation="scroll 10s linear infinite"
        fontSize={24}
      >
        <Text color="white">{text}</Text>
        <Text color="white">{text2}</Text>

        <style>
          {`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
        </style>
      </Flex>
    </Box>
  );
};

export default ScrollingBanner;
