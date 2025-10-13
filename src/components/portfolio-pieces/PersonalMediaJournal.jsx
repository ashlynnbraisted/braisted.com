import { Image, PortfolioCard } from "..";

const PersonalMediaJournal = (props) => (
  <PortfolioCard
    title="Personal Media Journal"
    subtitle="Media Tracking Application"
    badges={[
      "Python",
      "Flask",
      "MySQL",
      "DataGrip",
      "Docker",
      "AppSmith",
      "Postman",
      "REST API",
    ]}
    media={[
      <Image
        src={`${process.env.PUBLIC_URL}/pmj-diagram1.png`}
        alt="Personal Media Journal Global ER Diagram"
        fit="contain"
      />,
      <Image
        src={`${process.env.PUBLIC_URL}/pmj-diagram2.png`}
        alt="Personal Media Journal Schema Diagram"
        fit="contain"
      />,
      <Image
        src={`${process.env.PUBLIC_URL}/pmj-diagram3.png`}
        alt="Personal Media Journal Relational Diagram"
        fit="contain"
      />,
    ]}
    buttons={[
      {
        type: "code",
        href: "https://github.com/ashlynnbraisted/personal-media-journal-webapp",
        label: "Frontend",
      },
      {
        type: "code",
        href: "https://github.com/ashlynnbraisted/personal-media-journal",
        label: "Backend",
      },
    ]}
    description={[
      "A customizable app that enhances media consumption by recommending content based on mood, tracking reviews, and supporting personalized user profiles.",
      "The project involved creating user stories and personas, designing localized ER diagrams for each persona, a global ER diagram, relational diagrams, and a complete database schema, along with a REST API matrix and user story queries to ensure backend functionality supported all features.",
    ]}
    {...props}
  />
);

export default PersonalMediaJournal;
