import { Image, Link } from "@chakra-ui/react";
import { PortfolioCard } from "..";

const RSI = (props) => {
  return (
    <PortfolioCard
      title="Regional Snowfall Index"
      subtitle="Redesigning Government Climate Data"
      badges={["Figma", "InDesign"]}
      media={[
        <Image
          src={`${process.env.PUBLIC_URL}/RSI-landing.png`}
          alt="RSI Landing Page"
        />,
        <Image
          src={`${process.env.PUBLIC_URL}/RSI-original.png`}
          alt="RSI Original Site"
        />,
        <Image
          src={`${process.env.PUBLIC_URL}/RSI-brochure.png`}
          alt="RSI Brochure"
        />,
      ]}
      description={[
        <>
          I reimagined the{" "}
          <Link
            color="primary.500"
            isExternal
            href="https://www.ncei.noaa.gov/maps/rsi/"
          >
            Regional Snowfall Index
          </Link>{" "}
          page of the NOAA website to improve usability and accessibility in my
          Interaction Design II course.
        </>,
        "My redesign emphasizes clarity and user value, turning complex data into an intuitive experience.",
        "Additionally, I created a supporting brochure to guide users through the site’s current interface.",
      ]}
      {...props}
    />
  );
};

export default RSI;
