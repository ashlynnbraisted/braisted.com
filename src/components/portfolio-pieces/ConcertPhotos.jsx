import { useState } from "react";
import { Box, Flex, IconButton, Text, useDisclosure } from "@chakra-ui/react";
import { BsShuffle } from "react-icons/bs";
import { concertList } from "../../data";
import { Image, MediaModal } from "..";

// A display of photos from public/concerts
const ConcertPhotos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Opens a modal when a photo is clicked
  const handleClick = (photo) => {
    setSelectedPhoto(photo);
    onOpen();
  };
  // Shuffles image array
  const shuffleArray = (arr) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const [photos, setPhotos] = useState(
    Array.isArray(concertList) ? shuffleArray(concertList) : []
  );

  // Shuffle on button click
  const handleShuffle = () => {
    setPhotos((prev) => shuffleArray(prev));
  };

  return (
    <>
      <Flex>
        {/* Shuffle Button */}
        <Flex width="10%" alignItems="flex-start">
          <IconButton
            icon={<BsShuffle size={30} />}
            aria-label="Shuffle Photos"
            onClick={handleShuffle}
            variant="ghost"
            color="primary.500"
            position="fixed"
          ></IconButton>
        </Flex>

        {/* Photo Grid */}
        <div
          style={{
            columnCount: 4,
            columnGap: "1rem",
            maxWidth: "90%",
            margin: "0 auto",
          }}
        >
          {photos.map((p, i) => (
            <Box
              key={i}
              as="figure"
              display="inline-block"
              width="100%"
              margin="0 0 1rem"
              breakInside="avoid"
              position="relative"
              overflow="hidden"
              onClick={() => handleClick(p)}
            >
              <Image src={p.src} alt={p.artist} width="100%" display="block" />
              <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                bg="rgba(0,0,0,0.5)"
                opacity={0}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                transition="opacity 0.3s"
                _hover={{ opacity: 1 }}
                px={2}
              >
                <Text color="white" fontSize="lg" fontWeight="600">
                  {p.artist}
                </Text>
                {p.venue && (
                  <Text fontSize="sm" color="white">
                    {p.venue}
                  </Text>
                )}
              </Box>
            </Box>
          ))}
        </div>

        <Box width="10%"></Box>
      </Flex>

      {/* Modal for clicked image */}
      <MediaModal
        isOpen={isOpen}
        onClose={onClose}
        src={selectedPhoto?.src}
        title={selectedPhoto?.artist}
        subtitle={selectedPhoto?.venue}
      />
    </>
  );
};

export default ConcertPhotos;
