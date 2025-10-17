import {
  AspectRatio,
  Flex,
  Button,
  Box,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MediaModal } from "..";
import { useIsMobile } from "../../utils/useIsMobile";

// A scrollable media carousel
const ScrollCarousel = ({
  children,
  aspectRatio = false,
  previewTitle,
  previewSubtitle,
  ...props
}) => {
  const isMobile = useIsMobile();

  const items = Array.isArray(children) ? children : [children];
  const containerRef = useRef(null);
  const [page, setPage] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedSrc, setSelectedSrc] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const scrollLeft = container.scrollLeft;
      const width = container.offsetWidth;
      setPage(Math.round(scrollLeft / width));
    };
    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const scrollByPage = (direction) => {
    const container = containerRef.current;
    if (!container) return;
    const width = container.offsetWidth;
    container.scrollTo({
      left: container.scrollLeft + direction * width,
      behavior: "smooth",
    });
  };

  // Handle click on media → open modal
  const handleMediaClick = (child) => {
    const src =
      typeof child === "string"
        ? child
        : child?.props?.src || child?.props?.poster || null;

    if (src) {
      setSelectedSrc(src);
      onOpen();
    }
  };

  return (
    <>
      <Box {...props}>
        <Flex alignItems="center">
          {/* Left arrow */}
          {!isMobile && (
            <Button
              aria-label="Scroll left"
              onClick={() => scrollByPage(-1)}
              variant="ghost"
              color="secondary.400"
              visibility={page > 0 ? "visible" : "hidden"}
            >
              <FaChevronLeft size={20} />
            </Button>
          )}

          {/* Media display */}
          <Flex
            ref={containerRef}
            overflowX="auto"
            scrollSnapType="x mandatory"
            width="100%"
            borderWidth={"1px"}
            borderColor="secondary.200"
            shadow="sm"
            className="hoverable-small"
          >
            {items.map((child, i) => (
              <Box
                key={i}
                flexShrink={0}
                scrollSnapAlign="start"
                flex="0 0 100.5%"
                onClick={() => handleMediaClick(child)}
              >
                {aspectRatio ? (
                  <AspectRatio ratio={aspectRatio}>
                    <Box
                      position="relative"
                      width="100%"
                      height="100%"
                      bg={"white"}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      overflow="hidden"
                    >
                      {child}
                    </Box>
                  </AspectRatio>
                ) : (
                  child
                )}
              </Box>
            ))}
          </Flex>

          {/* Right arrow */}
          {!isMobile && (
            <Button
              aria-label="Scroll right"
              onClick={() => scrollByPage(1)}
              variant="ghost"
              color="secondary.400"
              visibility={page < items.length - 1 ? "visible" : "hidden"}
            >
              <FaChevronRight size={20} />
            </Button>
          )}
        </Flex>

        {/* Dots below media */}
        {items.length > 1 && (
          <HStack
            justify="center"
            pt={{ base: 3, md: 6 }}
            pb={{ base: 1, md: 3 }}
          >
            {items.map((_, i) => (
              <Box
                key={i}
                w={{ base: 1.5, md: 2 }}
                h={{ base: 1.5, md: 2 }}
                bg={i === page ? "primary.500" : "secondary.400"}
              />
            ))}
          </HStack>
        )}
      </Box>

      {/* Modal for zoomed preview when media is clicked */}
      <MediaModal
        isOpen={isOpen}
        onClose={onClose}
        src={selectedSrc}
        title={previewTitle}
        subtitle={previewSubtitle}
      />
    </>
  );
};

export default ScrollCarousel;
