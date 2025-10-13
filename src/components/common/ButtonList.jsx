import { HStack, Button, Tooltip } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiFigma, FiInfo } from "react-icons/fi";

const buttonTypes = {
  code: { defaultLabel: "Code", icon: FaGithub },
  live: { defaultLabel: "Live", icon: FiExternalLink },
  figma: { defaultLabel: "Figma", icon: FiFigma },
  info: { defaultLabel: "Info", icon: FiInfo },
};

const ButtonList = ({ buttons = [] }) => {
  if (!buttons.length) return null;

  return (
    <HStack spacing={3}>
      {buttons.map(({ type, href, label, available = true }, i) => {
        const config = buttonTypes[type] || {};
        const Icon = config.icon;
        const displayLabel = label || config.defaultLabel || "Link";

        // When unavailable, render as <button>, not <a>
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
    </HStack>
  );
};

export default ButtonList;
