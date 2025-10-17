import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

const MotionBox = motion(Box);

const FadeIn = ({
  children,
  duration = 0.6,
  delay = 0.2,
  rise = true,
  once = true,
  whileInView = false,
  ...props
}) => {
  const motionProps = {
    initial: { opacity: 0, y: rise ? 20 : 0 },
    transition: { duration, delay },
    width: "100%",
    ...props,
  };

  if (whileInView) {
    motionProps.whileInView = { opacity: 1, y: 0 };
    motionProps.viewport = { once };
  } else {
    motionProps.animate = { opacity: 1, y: 0 };
  }

  return <MotionBox {...motionProps}>{children}</MotionBox>;
};

export default FadeIn;
