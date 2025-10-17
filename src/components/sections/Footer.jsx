import { Box, Text } from "@chakra-ui/react";
import { FOOTER_HEIGHT_PX } from "../../utils/layout";

// Footer component
const Footer = () => (
  <Box py={4} textAlign="center" zIndex={-10} height={FOOTER_HEIGHT_PX}>
    <Text fontSize={{ base: "xs", md: "sm" }} color="secondary.400">
      &copy; {new Date().getFullYear()} Ashlynn Braisted.
    </Text>
  </Box>
);

export default Footer;
