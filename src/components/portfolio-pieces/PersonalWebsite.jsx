import { Image, PortfolioCard } from "..";

// A display of my Personal Website
const PersonalWebsite = (props) => {
  return (
    <PortfolioCard
      title="Braisted.com"
      subtitle="Personal Website"
      badges={["JavaScript", "React", "Chakra UI", "GitHub Pages"]}
      media={[
        <Image
          src={`${process.env.PUBLIC_URL}/logo/pw-logo.svg`}
          alt="Personal Website Logo"
          fit="contain"
        />,
      ]}
      buttons={[
        {
          type: "code",
          href: "https://github.com/ashlynnbraisted/braisted.com",
        },
      ]}
      description={[
        "You're on it right now!",
        "I designed and developed this website as both a creative space and a personal portfolio. The codebase is built for reusability, making it easy to add new projects as I create them.",
      ]}
      {...props}
    />
  );
};

export default PersonalWebsite;
