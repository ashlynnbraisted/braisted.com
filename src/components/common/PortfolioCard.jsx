import { Card, Flex, Text } from "@chakra-ui/react";
import {
  BadgeList,
  ButtonList,
  Image,
  ScrollArea,
  ScrollText,
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

  const mediaElements = media.map((item, i) => {
    if (item.type === "video") {
      return <Video key={i} {...item} />;
    }
    return <Image key={i} {...item} />;
  });

  // Media section
  const MediaSection = (
    <ScrollArea width="65%" height="100%" aspectRatio={aspectRatio}>
      {mediaElements}
    </ScrollArea>
  );

  // Text section
  const TextSection = (
    <Flex maxWidth="30%" flexDirection="column" maxHeight="100%">
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
      {badges && <BadgeList badges={badges} mt={2} />}
      {description && <ScrollText lines={description} mt={4} mb={6} />}
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
      width="90%"
      variant="outline"
      gap={10}
      p={6}
      {...props}
    >
      {reverseLayout ? (
        <>
          {TextSection}
          {MediaSection}
        </>
      ) : (
        <>
          {MediaSection}
          {TextSection}
        </>
      )}
    </Card>
  );
};

export default PortfolioCard;
