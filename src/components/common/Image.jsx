import { Image as ChakraImage } from "@chakra-ui/react";

// Image with set props
const Image = ({ src, alt, fit = "cover", ...props }) => (
  <ChakraImage
    src={src}
    alt={alt}
    maxW={fit === "contain" ? "100%" : "none"}
    maxH={fit === "contain" ? "100%" : "none"}
    minW={fit === "cover" ? "100%" : "auto"}
    minH={fit === "cover" ? "100%" : "auto"}
    objectFit={fit}
    {...props}
  />
);

export default Image;
