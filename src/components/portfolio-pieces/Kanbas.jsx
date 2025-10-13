import { Image, PortfolioCard, Video } from "..";

// A display of my work on Kanbas
const Kanbas = (props) => (
  <PortfolioCard
    title="Kanbas"
    subtitle="Canvas Replica Web Application"
    badges={[
      "TypeScript",
      "React",
      "Redux",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Netlify",
      "Render",
    ]}
    media={[
      <Image src={`${process.env.PUBLIC_URL}/kanbas.png`} alt="Kanbas Logo" />,
      <Video
        src={`${process.env.PUBLIC_URL}/kanbas-demo.mp4`}
        alt="Kanbas Demo"
      />,
      <Image
        src={`${process.env.PUBLIC_URL}/kanbas-quiz.png`}
        alt="Kanbas Quiz"
      />,
    ]}
    buttons={[
      {
        type: "live",
        href: "https://cheerful-parfait-c509f6.netlify.app/#/Kanbas/Dashboard",
      },
      {
        type: "code",
        href: "https://github.com/ashlynnbraisted/kanbas-react-web-app",
        label: "Frontend",
      },
      {
        type: "code",
        href: "https://github.com/ashlynnbraisted/kanbas-node-server-app",
        label: "Backend",
      },
    ]}
    description={[
      "A clone of the Learning Management System Canvas that allows users to create, edit, and delete courses, modules, and quizzes, and includes a user login and management system.",
      "The backend is connected to a MongoDB cluster that stores all course content, quiz data, and user information.",
      "Built from scratch for my Web Development course.",
    ]}
    {...props}
  />
);

export default Kanbas;
