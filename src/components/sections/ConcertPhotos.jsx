import { useState } from "react";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { BsShuffle } from "react-icons/bs";
import { concertList } from "../../data";
import { FadeIn, Image, MediaModal } from "..";

// A display of photos from public/concerts
const ConcertPhotos = () => {
  const [photos, setPhotos] = useState(shuffleArray(concertList || []));
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  const handleShuffle = () => setPhotos((prev) => shuffleArray(prev));
  const handleClick = (photo) => {
    setSelectedPhoto(photo);
    setIsOpen(true);
  };
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Flex flexDirection={{ base: "column", md: "row" }}>
        {/* Shuffle Button */}
        <Flex
          justifyContent={{ base: "center", md: "flex-start" }}
          width={{ base: "100%", md: "10%" }}
          mb={{ base: 3, md: 0 }}
        >
          <IconButton
            icon={<BsShuffle size={30} />}
            aria-label="Shuffle Photos"
            onClick={handleShuffle}
            variant="ghost"
            color="primary.500"
            position={{ base: "static", md: "fixed" }}
          />
        </Flex>

        {/* Photo Grid */}
        <Box
          maxWidth={{ base: "100%", md: "90%" }}
          sx={{
            columnCount: { base: 1, md: 4 },
          }}
        >
          {photos.map((p, i) => (
            <FadeIn whileInView={true}>
              <Box
                key={i}
                as="figure"
                display="inline-block"
                width="100%"
                margin="0 0 1rem"
                position="relative"
                overflow="hidden"
                onClick={() => handleClick(p)}
              >
                <Image
                  src={p.src}
                  alt={p.artist}
                  width="100%"
                  display="block"
                />
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
            </FadeIn>
          ))}
        </Box>

        <Box width="10%"></Box>
      </Flex>

      {/* Modal for clicked image */}
      <MediaModal
        isOpen={isOpen}
        onClose={handleClose}
        src={selectedPhoto?.src}
        title={selectedPhoto?.artist}
        subtitle={selectedPhoto?.venue}
      />
    </>
  );
};

export default ConcertPhotos;
