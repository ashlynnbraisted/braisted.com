import { Image, PortfolioCard } from "..";

const CoveyPhoto = (props) => (
  <PortfolioCard
    title="Covey.Photo"
    subtitle="Virtual 2D Photobooth"
    badges={[
      "React",
      "Chakra UI",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "REST API",
      "Jest",
      "Heroku",
      "Netlify",
    ]}
    media={[
      <Image
        src={`${process.env.PUBLIC_URL}/covey.jpg`}
        alt="Covey.Photo logo"
        fit="contain"
      />,

      <Image
        src={`${process.env.PUBLIC_URL}/covey-town.svg`}
        alt="Covey Town"
        fit="contain"
      />,
      <Image
        src={`${process.env.PUBLIC_URL}/covey-booth.svg`}
        alt="Covey Photo Studio"
        fit="contain"
      />,
      <Image
        src={`${process.env.PUBLIC_URL}/covey-wall.svg`}
        alt="Covey Photo Wall"
        fit="contain"
      />,
      <Image
        src={`${process.env.PUBLIC_URL}/covey.png`}
        alt="Covey Photo Example"
        fit="contain"
      />,
    ]}
    buttons={[
      {
        type: "live",
        href: "https://spring24-project-team-303.onrender.com/",
      },
      {
        type: "code",
        available: false,
      },
    ]}
    description={[
      "A virtual photobooth extension of the 2D game Covey.Town, allowing players to log in, customize outfits and backgrounds, take individual or group photos, and share them on a Photo Wall with likes and comments.",
      "Players earn digital currency through engagement, which can be spent on props. All photos and player inventories are stored in a PostgreSQL database to persist across sessions.",
      "Booth and wall designed as modular interactable areas using an MVC-style architecture.",
    ]}
    {...props}
  />
);

export default CoveyPhoto;
