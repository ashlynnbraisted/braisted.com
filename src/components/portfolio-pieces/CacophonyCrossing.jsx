import { Image, PortfolioCard, Video } from "..";

// A display of my work on Cacophany Crossing
const CacophonyCrossing = (props) => (
  <PortfolioCard
    title="Cacophony Crossing"
    subtitle="Noise-Responsive Urban Pedestrian Game"
    badges={["Java", "Processing"]}
    media={[
      <Image
        src={`${process.env.PUBLIC_URL}/cc-mockup.png`}
        alt="Cacophony Crossing Homepage"
      />,

      <Video
        title="Cacophony Crossing Demo"
        src={`${process.env.PUBLIC_URL}/cc-demo2.mov`}
      />,
    ]}
    buttons={[
      {
        type: "code",
        href: "https://github.com/ashlynnbraisted/cacophony-crossing",
      },
    ]}
    description={[
      <>
        A site-specific mobile application minigame inspired by{" "}
        <i>Crossy Road</i> where players navigate lanes of traffic including
        bikes, cars, buses, and trains on Huntington Avenue.
      </>,
      "Real-time ambient sound from the user’s environment dynamically increases obstacle speed in-game. The game uses lane-based movement, animated sprites, and win/loss conditions based on reaching the top or colliding with vehicles. Players can also pick up headphones on their route, which temporarily reduce the detected noise level.",
      "All visual elements, including the players, background, and vehicles were hand-drawn in Illustrator.",
    ]}
    {...props}
  />
);

export default CacophonyCrossing;
