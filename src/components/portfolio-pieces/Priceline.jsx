import { Image, PortfolioCard, Video } from "..";

// A display of my work from Priceline.com
const Priceline = (props) => {
  return (
    <PortfolioCard
      title="Priceline.com"
      subtitle="Multi-Page Dialog"
      link="https://www.priceline.com"
      badges={[
        "Javascript",
        "React",
        "Node.js",
        "GraphQL",
        "Apollo",
        "Docker",
        "Storybook",
        "GA4",
      ]}
      media={[
        <Image
          src={`${process.env.PUBLIC_URL}/priceline-components.svg`}
          alt="Priceline Components"
        />,
        <Video
          title="Priceline Demo"
          src={`${process.env.PUBLIC_URL}/priceline-demo.mov`}
          fit="cover"
        />,
      ]}
      description={[
        "A multi-page dialog that allows users to cancel their trip protection easily and independently, eliminating the need for customer service calls and associated costs.",
        "The flow integrates with GraphQL and backend APIs and is engineered to scale seamlessly to additional cancellation types in future releases.",
        "Created during my Software Engineering Co-op at Priceline, where I designed, built, and maintained frontend features for the site.",
      ]}
      {...props}
    />
  );
};

export default Priceline;
