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
    <ScrollArea w="65%" h="100%" aspectRatio={aspectRatio}>
      {media.map(renderMedia)}
    </ScrollArea>
  );

  const TextSection = (
    <Flex maxW="30%" flexDir="column" maxH="100%">
      {title && (
        <Text
          fontSize={40}
          fontWeight="medium"
          color="primary.500"
          lineHeight={1.2}
        >
          {title}
        </Text>
      )}
      {subtitle && (
        <Text fontSize={20} mb={2}>
          {subtitle}
        </Text>
      )}
      {badges && <BadgeList badges={badges} />}
      {description && (
        <ScrollContainer mb={6} mt={2}>
          {description.map((text, i) => (
            <Text key={i} fontSize={16} mt={i > 0 ? 4 : 0}>
              {text}
            </Text>
          ))}
        </ScrollContainer>
      )}
      {buttons && <ButtonList buttons={buttons} />}
    </Flex>
  );

  return (
    <Card
      borderRadius={0}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-evenly"
      height={575}
      variant="outline"
      gap={10}
      p={6}
      {...props}
    >
      {reverseLayout
        ? [TextSection, MediaSection]
        : [MediaSection, TextSection]}
    </Card>
  );
};

export default PortfolioCard;
