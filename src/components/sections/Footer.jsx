import { Box, Text } from "@chakra-ui/react";

// Footer component
const Footer = () => (
  <Box py={4} textAlign="center" zIndex={-10} height="5vh">
    <Text fontSize="sm" color="secondary.400">
      &copy; {new Date().getFullYear()} Ashlynn Braisted.
    </Text>
  </Box>
);

export default Footer;
