export const HEADER_HEIGHT = { base: 60, md: 100 };
export const FOOTER_HEIGHT = { base: 40, md: 50 };

// Chakra-ready strings with "px"
export const HEADER_HEIGHT_PX = {
  base: `${HEADER_HEIGHT.base}px`,
  md: `${HEADER_HEIGHT.md}px`,
};

export const FOOTER_HEIGHT_PX = {
  base: `${FOOTER_HEIGHT.base}px`,
  md: `${FOOTER_HEIGHT.md}px`,
};

// Full page minus header only
export const AVAILABLE_HEIGHT_FULL = {
  base: `calc(100dvh - ${HEADER_HEIGHT_PX.base})`,
  md: `calc(100dvh - ${HEADER_HEIGHT_PX.md})`,
};

// Page minus header + footer
export const AVAILABLE_HEIGHT = {
  base: `calc(100dvh - ${HEADER_HEIGHT_PX.base} - ${FOOTER_HEIGHT_PX.base})`,
  md: `calc(100dvh - ${HEADER_HEIGHT_PX.md} - ${FOOTER_HEIGHT_PX.md})`,
};
