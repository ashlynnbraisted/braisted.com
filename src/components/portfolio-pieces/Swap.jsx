import { Image } from "@chakra-ui/react";
import { PortfolioCard } from "..";

// A display of my work on Swap
const Swap = (props) => (
  <PortfolioCard
    title="Swap"
    subtitle="Senior Capstone"
    badges={["Figma", "InDesign", "Illustrator"]}
    media={[
      <Image src={`${process.env.PUBLIC_URL}/swap-site.jpg`} alt="Swap Site" />,
      <Image
        src={`${process.env.PUBLIC_URL}/swap-component.svg`}
        alt="Swap Component Library"
      />,
      <Image src={`${process.env.PUBLIC_URL}/swap-ads.jpg`} alt="Swap Ads" />,
    ]}
    buttons={[
      {
        type: "figma",
        href: "https://www.figma.com/design/t9yJfdGes4qnykWObiqJpa/Swap-Capstone?node-id=293-751",
      },
    ]}
    description={[
      "For my Senior Capstone, I designed a high-fidelity prototype for Swap, an e-commerce platform that lets users exchange goods within their community instead of buying and selling.",
      "Alongside the prototype, I developed a component library for the site and created an ad campaign for the New York City subway.",
    ]}
    {...props}
  />
);

export default Swap;
