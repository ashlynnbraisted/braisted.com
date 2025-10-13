import { Card, Flex, Text } from "@chakra-ui/react";
import { BadgeList, ButtonList, ScrollArea, ScrollText } from "..";

// A Portfolio card component
const PortfolioCard = ({
  title,
  subtitle,
  badges,
  media,
  description,
  reverseLayout = false,
  aspectRatio = 16 / 9,
  ...props
}) => {
  // Image/video section
  const MediaSection = (
    <ScrollArea width="65%" height="100%" aspectRatio={aspectRatio}>
      {media}
    </ScrollArea>
  );

  // Text, badges, and buttons
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
      {props.buttons && <ButtonList buttons={props.buttons} />}
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
