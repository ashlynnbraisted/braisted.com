import { Flex, Image, Tabs, TabList, Tab } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { HEADER_HEIGHT } from "../../utils/layout";

// Header component
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "Portfolio", path: "/portfolio" },
    { name: "Resume", path: "/resume" },
    { name: "About", path: "/about" },
  ];

  const path = location.pathname.replace(/\/+$/, "");
  const currentIndex = links.findIndex((link) => link.path === path);

  return (
    <Flex
      py={8}
      justifyContent="space-between"
      position="sticky"
      top={0}
      zIndex={10}
      bg="white"
      height={HEADER_HEIGHT}
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
        onChange={(index) => navigate(links[index].path)}
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
  );
};

export default Header;
