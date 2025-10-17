import { useState } from "react";
import { motion } from "framer-motion";

import {
  Flex,
  Image,
  Link,
  Tabs,
  TabList,
  Tab,
  Text,
  Button,
  Drawer,
  DrawerContent,
  DrawerBody,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { AVAILABLE_HEIGHT_FULL, HEADER_HEIGHT_PX } from "../../utils/layout";
import { SocialLinks } from "../common";
import { FadeIn } from "../animations";
import { useIsMobile } from "../../utils/useIsMobile";

// Header component
const Header = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Portfolio", path: "/portfolio" },
    { name: "Resume", path: "/resume" },
    { name: "About", path: "/about" },
  ];

  const path = location.pathname.replace(/\/+$/, "");
  const currentIndex = links.findIndex((link) => link.path === path);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {isMobile ? (
        <>
          <Flex
            width="100%"
            position="sticky"
            top={0}
            zIndex={10}
            bg="white"
            height={HEADER_HEIGHT_PX}
            alignItems="center"
            justifyContent="space-between"
            gap={4}
          >
            <Image
              src={`${process.env.PUBLIC_URL}/logo/logo-ab.svg`}
              alt="Ashlynn Braisted"
              boxSize="30px"
              onClick={() => {
                navigate("/");
                setIsOpen(false);
              }}
            />
            <Button
              aria-label="Menu"
              onClick={toggleMenu}
              variant="ghost"
              p={0}
              minW="unset"
              minH="unset"
              h="auto"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="6px"
            >
              {["top", "middle", "bottom"].map((line) => (
                <motion.div
                  key={line}
                  animate={
                    isOpen
                      ? line === "top"
                        ? { rotate: 45, y: 7.5 }
                        : line === "middle"
                        ? { opacity: 0 }
                        : { rotate: -45, y: -7.5 }
                      : { rotate: 0, y: 0, opacity: 1 }
                  }
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  style={{
                    width: "20px",
                    height: "1.5px",
                    backgroundColor: "black",
                    borderRadius: "2px",
                    transformOrigin: "center",
                  }}
                />
              ))}
            </Button>
          </Flex>

          <Drawer placement="right" onClose={toggleMenu} isOpen={isOpen}>
            <DrawerContent
              bg="white"
              maxW="100vw"
              mt={HEADER_HEIGHT_PX}
              height={AVAILABLE_HEIGHT_FULL}
            >
              <DrawerBody
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                textAlign="center"
                py={8}
              >
                <Flex flex="1" align="center" justify="center">
                  <Flex direction="column" align="center" gap={6}>
                    {links.map((link, i) => (
                      <FadeIn key={link.path} delay={(i + 1) * 0.2}>
                        <Text fontSize={24} color="primary.500">
                          <Link
                            onClick={() => {
                              navigate(link.path);
                              setIsOpen(false);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {link.name}
                          </Link>
                        </Text>
                      </FadeIn>
                    ))}
                  </Flex>
                </Flex>

                <SocialLinks justifyContent="center" gap={6} />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <Flex
          py={8}
          justifyContent="space-between"
          position="sticky"
          top={0}
          zIndex={10}
          bg="white"
          height={HEADER_HEIGHT_PX}
        >
          <Image
            src={`${process.env.PUBLIC_URL}/logo/logo-ab.svg`}
            alt="Ashlynn Braisted"
            className="hoverable"
            boxSize="40px"
            onClick={() => navigate("/")}
          />

          <Tabs
            index={currentIndex}
            onChange={(index) => {
              navigate(links[index].path);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            variant="unstyled"
            size="lg"
          >
            <TabList>
              {links.map((link) => (
                <Tab
                  fontSize={"22px"}
                  key={link.path}
                  _selected={{ color: "white", bg: "primary.500" }}
                  height={"40px"}
                >
                  {link.name}
                </Tab>
              ))}
            </TabList>
          </Tabs>
        </Flex>
      )}
    </>
  );
};

export default Header;
