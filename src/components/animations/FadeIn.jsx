import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

const MotionBox = motion(Box);

const FadeIn = ({
  children,
  duration = 0.6,
  delay = 0.2,
  rise = true,
  once = true,
  ...props
}) => (
  <MotionBox
    initial={{ opacity: 0, y: rise ? 20 : 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once }}
    transition={{ duration, delay }}
    width="100%"
    {...props}
  >
    {children}
  </MotionBox>
);

export default FadeIn;
