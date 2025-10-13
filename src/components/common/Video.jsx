// components/AutoVideo.jsx
import { Box } from "@chakra-ui/react";

// Video with props
const Video = ({ src, title, fit = "contain", ...props }) => (
  <Box
    as="video"
    src={src}
    title={title}
    autoPlay
    loop
    muted
    playsInline
    minW={fit === "cover" ? "100%" : "auto"}
    minH={fit === "cover" ? "100%" : "auto"}
    maxW="100%"
    maxH="100%"
    sx={{ objectFit: fit }}
    {...props}
  />
);

export default Video;
