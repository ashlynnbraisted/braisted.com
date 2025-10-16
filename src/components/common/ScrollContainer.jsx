import { Box } from "@chakra-ui/react";
import { useRef, useState, useLayoutEffect } from "react";

//  Scrollable container with optional fade gradients
const ScrollContainer = ({
  children,
  direction = "vertical",
  fade = true,
  fadeHeight = 20,
  fadeColor = "white",
  ...props
}) => {
  const ref = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      setScrollPos(direction === "vertical" ? el.scrollTop : el.scrollLeft);
    };

    const updateScrollData = () => {
      if (direction === "vertical") {
        setMaxScroll(el.scrollHeight - el.clientHeight);
      } else {
        setMaxScroll(el.scrollWidth - el.clientWidth);
      }
    };

    updateScrollData();
    el.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateScrollData);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollData);
    };
  }, [children, direction]);

  const renderFade = (pos) => {
    if (!fade) return null;

    // Determine whether to show the gradient or just keep space
    const showGradient =
      pos === "top"
        ? scrollPos > 0
        : pos === "bottom"
        ? scrollPos < maxScroll
        : true;

    const gradients = {
      top: `linear(to-t, rgba(255,255,255,0), ${fadeColor})`,
      bottom: `linear(to-b, rgba(255,255,255,0), ${fadeColor})`,
      left: `linear(to-l, rgba(255,255,255,0), ${fadeColor})`,
      right: `linear(to-r, rgba(255,255,255,0), ${fadeColor})`,
    };

    const styleProps =
      direction === "vertical"
        ? {
            position: "sticky",
            left: 0,
            width: "100%",
            height: `${fadeHeight}px`,
            zIndex: 1,
          }
        : {
            position: "sticky",
            top: 0,
            height: "100%",
            width: `${fadeHeight}px`,
            zIndex: 1,
          };

    return (
      <Box
        {...styleProps}
        top={pos === "top" ? 0 : undefined}
        bottom={pos === "bottom" ? 0 : undefined}
        left={pos === "left" ? 0 : undefined}
        right={pos === "right" ? 0 : undefined}
        bgGradient={
          showGradient
            ? gradients[pos]
            : `linear(to-t, rgba(255,255,255,0), rgba(255,255,255,0))`
        }
        pointerEvents="none"
      />
    );
  };

  const fades =
    direction === "vertical"
      ? [renderFade("top"), renderFade("bottom")]
      : [renderFade("left"), renderFade("right")];

  return (
    <Box
      ref={ref}
      overflowY={direction === "vertical" ? "auto" : "hidden"}
      overflowX={direction === "horizontal" ? "auto" : "hidden"}
      position="relative"
      flex="1"
      {...props}
    >
      {fades[0]}
      {children}
      {fades[1]}
    </Box>
  );
};

export default ScrollContainer;
