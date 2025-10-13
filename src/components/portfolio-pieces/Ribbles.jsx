import { Image, PortfolioCard, Video } from "..";

// A display of my work on Ribbles
const Ribbles = (props) => (
  <PortfolioCard
    title="Ribbles"
    subtitle="Interactive Public Art Installation"
    badges={["Java", "Processing", "JUnit"]}
    media={[
      <Image
        src={`${process.env.PUBLIC_URL}/ribbles.jpg`}
        alt="Ribbles Installation"
      />,
      <Video
        title="Ribbles Demo"
        src={`${process.env.PUBLIC_URL}/ribbles-2.mov`}
      />,
      <Video
        title="Ribbles Demo"
        src={`${process.env.PUBLIC_URL}/ribbles.mov`}
      />,
    ]}
    buttons={[
      {
        type: "info",
        href: "https://ars.electronica.art/futurelab/en/projects-northeastern-university-2022/",
      },
    ]}
    description={[
      "A large-scale public art piece on the facade of Ars Electronica at FutureLab in Linz, Austria alongside two other programmers over the course of three days. We built an interactive game of tag that played across all five sides of the museum exterior.",
      "Integrated with Pharus API, a laser motion-tracking system, to turn people’s movements on the courtyard of the museum into exploding circles of light on the building’s facade when they collided.",
    ]}
    {...props}
  />
);

export default Ribbles;
