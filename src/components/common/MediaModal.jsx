import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Box,
  Text,
} from "@chakra-ui/react";
import { Image, Video } from "..";

// A popup modal for media that is clicked on
const MediaModal = ({ isOpen, onClose, src, title, subtitle }) => {
  if (!src) return null;

  const isVideo = src.match(/\.(mp4|mov|webm|ogg)$/i);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      returnFocusOnClose={false}
      portal={false}
      closeOnOverlayClick
    >
      <ModalOverlay bg="white" />
      <ModalContent
        bg="transparent"
        boxShadow="none"
        borderRadius={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <ModalBody
          p={0}
          position="relative"
          display="flex"
          flexDirection="column"
          alignItems="center"
          maxWidth="90vw"
          maxHeight="90dvh"
        >
          {isVideo ? (
            <Video
              src={src}
              alt={title || "Media preview"}
              style={{
                maxHeight: "70dvh",
                maxWidth: "70vw",
                borderRadius: 0,
                display: "block",
                objectFit: "contain",
              }}
            />
          ) : (
            <Image
              src={src}
              alt={title || "Media preview"}
              maxHeight="70dvh"
              maxWidth="70vw"
              objectFit="contain"
              borderRadius={0}
              display="block"
            />
          )}

          <ModalCloseButton
            color="white"
            position="absolute"
            top={2}
            right={2}
            zIndex={10}
          />

          {(title || subtitle) && (
            <Box textAlign="center" mt={2}>
              {title && (
                <Text fontSize={20} fontWeight="500" color="primary.500">
                  {title}
                </Text>
              )}
              {subtitle && (
                <Text fontSize={16} mt={-1}>
                  {subtitle}
                </Text>
              )}
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MediaModal;
