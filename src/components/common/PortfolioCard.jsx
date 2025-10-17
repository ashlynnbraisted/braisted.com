import { Card, Flex, Text } from "@chakra-ui/react";
import {
  BadgeList,
  ButtonList,
  Image,
  ScrollArea,
  ScrollContainer,
  Video,
} from "..";

// A Portfolio card component
const PortfolioCard = ({
  project,
  reverseLayout = false,
  aspectRatio = 16 / 9,
  ...props
}) => {
  if (!project) return null;

  const { title, subtitle, badges, description, media, buttons } = project;

  const renderMedia = (item, i) =>
    item.type === "video" ? (
      <Video key={i} {...item} />
    ) : (
      <Image key={i} {...item} />
    );

  const MediaSection = (
    <ScrollArea
      w={{ base: "100%", md: "65%" }}
      h={{ base: "auto", md: "100%" }}
      aspectRatio={aspectRatio}
    >
      {media.map(renderMedia)}
    </ScrollArea>
  );

  const TextSection = (
    <Flex
      flexDir="column"
      w={{ base: "100%", md: "30%" }}
      maxH="100%"
      alignItems={{ base: "center", md: "flex-start" }}
      textAlign={{ base: "center", md: "left" }}
    >
      {title && (
        <Text
          fontSize={{ base: 28, md: 40 }}
          fontWeight="medium"
          color="primary.500"
          lineHeight={1.2}
        >
          {title}
        </Text>
      )}
      {subtitle && (
        <Text fontSize={{ base: 16, md: 20 }} mb={2}>
          {subtitle}
        </Text>
      )}
      {badges && (
        <BadgeList
          badges={badges}
          justify={{ base: "center", md: "flex-start" }}
        />
      )}
      {description && (
        <ScrollContainer mb={{ base: 0, md: 6 }} mt={2}>
          {description.map((text, i) => (
            <Text key={i} fontSize={{ base: 14, md: 16 }} mt={i > 0 ? 4 : 0}>
              {text}
            </Text>
          ))}
        </ScrollContainer>
      )}
      {buttons && (
        <ButtonList
          buttons={buttons}
          justify={{ base: "center", md: "flex-start" }}
        />
      )}
    </Flex>
  );

  return (
    <Card
      borderRadius={0}
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-evenly"
      height={{ base: "auto", md: 575 }}
      variant="outline"
      gap={{ base: 3, md: 10 }}
      p={{ base: 3, md: 6 }}
      {...props}
    >
      {reverseLayout
        ? [TextSection, MediaSection]
        : [MediaSection, TextSection]}
    </Card>
  );
};

export default PortfolioCard;
