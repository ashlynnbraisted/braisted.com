import { Flex, Button, Tooltip } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiFigma, FiInfo } from "react-icons/fi";

const buttonTypes = {
  code: { defaultLabel: "Code", icon: FaGithub },
  live: { defaultLabel: "Live", icon: FiExternalLink },
  figma: { defaultLabel: "Figma", icon: FiFigma },
  info: { defaultLabel: "Info", icon: FiInfo },
};

// A list of buttons with optional icons and disabled state
const ButtonList = ({ buttons = [] }) => {
  if (!buttons.length) return null;

  return (
    <Flex
      wrap="wrap"
      gap={3}
      justify={{ base: "center", md: "flex-start" }}
      textAlign={{ base: "center", md: "left" }}
    >
      {buttons.map(({ type, href, label, available = true }, i) => {
        const config = buttonTypes[type] || {};
        const Icon = config.icon;
        const displayLabel = label || config.defaultLabel || "Link";

        const button = available ? (
          <Button
            as="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={Icon ? <Icon size={18} /> : undefined}
            variant="outline"
          >
            {displayLabel}
          </Button>
        ) : (
          <Button
            leftIcon={Icon ? <Icon size={18} /> : undefined}
            variant="outline"
            isDisabled
          >
            {displayLabel}
          </Button>
        );

        return available ? (
          <span key={i}>{button}</span>
        ) : (
          <Tooltip key={i} label="Available upon request" hasArrow>
            {button}
          </Tooltip>
        );
      })}
    </Flex>
  );
};

export default ButtonList;
