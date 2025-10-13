import { Badge, Flex } from "@chakra-ui/react";

// A list of badges
const BadgeList = ({ badges }) => {
  return (
    <Flex wrap="wrap">
      {badges.map((badge) => (
        <Badge key={badge} m={1} variant="outline">
          {badge}
        </Badge>
      ))}
    </Flex>
  );
};
export default BadgeList;
