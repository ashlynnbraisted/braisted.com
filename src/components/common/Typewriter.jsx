import { Box, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useState, useEffect, useRef, useMemo } from "react";

const blinkAnimation = keyframes`
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
`;

// A typewriter animation for text
const Typewriter = ({
  text,
  speed = 50,
  pause = 800,
  repeating = true,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const texts = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  const textIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const directionRef = useRef(1); // 1 = typing, -1 = deleting
  const pauseCounterRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!texts.length) return;

    // Grabs current text
    const currentText = () => {
      if (textIndexRef.current < 0 || textIndexRef.current >= texts.length) {
        return "";
      }
      return texts[textIndexRef.current];
    };

    // Handles pause time
    const handlePause = () => {
      const pauseTime =
        !repeating && textIndexRef.current === texts.length - 1
          ? pause * 2
          : directionRef.current === -1
          ? pause / 3
          : pause;
      if (pauseCounterRef.current < pauseTime / speed) {
        pauseCounterRef.current += 1;
        setIsPaused(true);
        return true;
      }
      pauseCounterRef.current = 0;
      setIsPaused(false);
      return false;
    };

    // Types forward
    const typeForward = () => {
      const text = currentText();
      if (charIndexRef.current < text.length) {
        setDisplayedText(text.slice(0, charIndexRef.current + 1));
        charIndexRef.current += 1;
      } else {
        if (!handlePause()) {
          // Stop if last text & non-repeating
          if (!repeating && textIndexRef.current === texts.length - 1) {
            setCursorVisible(false);
            clearInterval(intervalRef.current);
          } else {
            directionRef.current = -1; // Start deleting
            charIndexRef.current = text.length - 1; // Safe reset
          }
        }
      }
    };

    // Deletes the text backwards
    const deleteBackward = () => {
      const text = currentText();
      if (charIndexRef.current >= 0) {
        setDisplayedText(text.slice(0, charIndexRef.current));
        charIndexRef.current -= 1;
      } else {
        if (!handlePause()) {
          textIndexRef.current += 1;
          if (textIndexRef.current >= texts.length) {
            if (repeating) {
              textIndexRef.current = 0;
            } else {
              setCursorVisible(false);
              clearInterval(intervalRef.current);
              return;
            }
          }
          directionRef.current = 1; // Back to typing
          charIndexRef.current = 0;
        }
      }
    };

    intervalRef.current = setInterval(() => {
      directionRef.current === 1 ? typeForward() : deleteBackward();
    }, speed);

    return () => clearInterval(intervalRef.current);
  }, [texts, speed, pause, repeating]);

  return (
    <Box {...props}>
      <Text
        fontSize={64}
        fontWeight={500}
        color="primary.500"
        lineHeight="1"
        wordBreak="break-word"
      >
        <span>{displayedText}</span>
        {cursorVisible && (
          <Text
            as="span"
            ml={1}
            color="primary.500"
            animation={isPaused ? `${blinkAnimation} 1s infinite` : "none"}
          >
            |
          </Text>
        )}
      </Text>
    </Box>
  );
};

export default Typewriter;
