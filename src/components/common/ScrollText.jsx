import { Box, Text } from "@chakra-ui/react";
import { useRef, useState, useLayoutEffect } from "react";

// A scrollable text component with a blurred footer
const ScrollText = ({ lines = [], fontSize = 16, ...props }) => {
  const ref = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    setIsOverflowing(el.scrollHeight > el.clientHeight);
  }, [lines]);

  return (
    <Box ref={ref} flex="1" overflowY="auto" position="relative" {...props}>
      {lines.map((text, i) => (
        <Text key={i} fontSize={fontSize} mt={i > 0 ? 4 : 0}>
          {text}
        </Text>
      ))}
      {isOverflowing && (
        <Box
          position="sticky"
          bottom={0}
          left={0}
          width="100%"
          height="50px"
          bgGradient="linear(to-b, rgba(255,255,255,0), rgba(255,255,255,1))"
          pointerEvents="none"
        />
      )}
    </Box>
  );
};

export default ScrollText;
