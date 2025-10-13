import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

// Custom square cursor
const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const size = clicked ? 7 : 12; // shrink when clicked

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width={`${size}px`}
      height={`${size}px`}
      bg="primary.500"
      transform={`translate(${pos.x - size / 2}px, ${pos.y - size / 2}px)`}
      pointerEvents="none"
      zIndex={9999}
      transition="transform .05s ease-out, width 0.1s ease, height 0.1s ease"
    />
  );
};

export default CustomCursor;
