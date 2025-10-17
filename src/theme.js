// theme.js
import { extendTheme } from "@chakra-ui/react";
import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

// Default hover helper
export const defaultHover = (scaleSize = 1.1, styles = {}) => ({
  transform: `scale(${scaleSize})`,
  transition: "all 0.2s ease-in-out",
  ...styles,
});

const theme = extendTheme({
  styles: {
    global: {
      "*": {
        fontFamily: `"Teachers", sans-serif`,
        cursor: "none !important",
      },
      ".bold": {
        fontWeight: 500,
        color: "black",
      },
      "html, body": {
        overscrollBehaviorY: "none",
        bg: "white",
      },
      "input, textarea, button, a, p, span, div": {
        cursor: "none !important",
      },
      ".hoverable": {
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.1)",
        },
      },
      ".hoverable-small": {
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.01)",
        },
      },
      "&::-webkit-scrollbar": { display: "none" },
      scrollbarWidth: "none",
    },
  },
  colors: {
    primary: {
      50: "#e8edfb",
      100: "#c7d2f7",
      200: "#a4b5f3",
      300: "#7a91ef",
      400: "#4f6cea",
      500: "#0d41e1",
      600: "#0b38c1",
      700: "#082c91",
      800: "#06216b",
      900: "#051751",
    },
    secondary: {
      50: "#fbfbfb",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#c8c8c8",
      500: "#aaaaaa",
      600: "#888888",
      700: "#666666",
      800: "#444444",
      900: "#222222",
    },
  },
  components: {
    Text: {
      baseStyle: {
        color: "secondary.800",
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "none",
        _hover: defaultHover(),
      },
      variants: {
        outline: {
          _hover: { ...defaultHover(), bg: "transparent" },
          borderColor: "primary.500",
          color: "primary.500",
          _disabled: {
            color: "secondary.500",
            borderColor: "secondary.500",
            cursor: "not-allowed",
            _hover: { transform: "none" },
          },
        },
        ghost: {
          _active: { bg: "transparent" },
          _hover: { ...defaultHover(), bg: "transparent" },
        },
      },
    },
    Badge: {
      baseStyle: {
        borderRadius: "none",
        color: "primary.500",
      },
    },
    IconButton: {
      baseStyle: {
        _hover: defaultHover(),
        _active: { bg: "transparent" },
      },
    },
    Tabs: (() => {
      const { definePartsStyle, defineMultiStyleConfig } =
        createMultiStyleConfigHelpers(tabsAnatomy.keys);

      const baseStyle = definePartsStyle({
        tab: {
          _hover: defaultHover(),
          _selected: { color: "primary.500" },
        },
      });

      return defineMultiStyleConfig({ baseStyle });
    })(),
  },
});

export default theme;
