const portfolioData = {
  priceline: {
    category: "code",
    title: "Priceline.com",
    subtitle: "Multi-Page Dialog",
    badges: [
      "Javascript",
      "React",
      "Node.js",
      "GraphQL",
      "Apollo",
      "Docker",
      "Storybook",
      "GA4",
    ],
    media: [
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/priceline-components.webp`,
        alt: "Priceline Components",
        loading: "eager",
      },
      {
        type: "video",
        src: `${process.env.PUBLIC_URL}/portfolio/priceline-demo.mp4`,
        title: "Priceline Demo",
        fit: "cover",
      },
    ],
    description: [
      "A multi-page dialog that allows users to cancel their trip protection easily and independently, eliminating the need for customer service calls and associated costs.",
      "The flow integrates with GraphQL and backend APIs and is engineered to scale seamlessly to additional cancellation types in future releases.",
      "Created during my Software Engineering Co-op at Priceline, where I designed, built, and maintained frontend features for the site.",
    ],
  },
  kanbas: {
    category: "code",
    title: "Kanbas",
    subtitle: "Canvas Replica Web Application",
    badges: [
      "TypeScript",
      "React",
      "Redux",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Render",
      "Netlify",
    ],
    media: [
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/kanbas.webp`,
        alt: "Kanbas Logo",
      },
      {
        type: "video",
        src: `${process.env.PUBLIC_URL}/portfolio/kanbas-demo.mp4`,
        title: "Kanbas Demo",
      },
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/kanbas-quiz.webp`,
        alt: "Kanbas Quiz",
      },
    ],
    buttons: [
      {
        type: "live",
        href: "https://cheerful-parfait-c509f6.netlify.app/#/Kanbas/Dashboard",
        available: false,
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
    ],
    description: [
      "A clone of the Learning Management System Canvas that allows users to create, edit, and delete courses, modules, and quizzes, and includes a user login and management system.",
      "The backend is connected to a MongoDB cluster that stores all course content, quiz data, and user information.",
      "Built from scratch for my Web Development course.",
    ],
  },
  coveyPhoto: {
    category: "code",
    title: "Covey.Photo",
    subtitle: "Virtual 2D Photobooth",
    badges: [
      "React",
      "Chakra UI",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "REST API",
      "Jest",
      "Heroku",
      "Netlify",
    ],
    media: [
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/covey-logo.webp`,
        alt: "Covey.Photo logo",
        fit: "contain",
      },
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/covey-town.svg`,
        alt: "Covey Town",
        fit: "contain",
      },
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/covey-booth.webp`,
        alt: "Covey Photo Studio",
        fit: "contain",
      },
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/covey-wall.webp`,
        alt: "Covey Photo Wall",
        fit: "contain",
      },
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/covey.webp`,
        alt: "Covey Photo Example",
        fit: "contain",
      },
    ],
    buttons: [
      { type: "live", href: "https://spring24-project-team-303.onrender.com/" },
      { type: "code", available: false },
    ],
    description: [
      "A virtual photobooth extension of the 2D game Covey.Town, allowing players to log in, customize outfits and backgrounds, take individual or group photos, and share them on a Photo Wall with likes and comments.",
      "Players earn digital currency through engagement, which can be spent on props. All photos and player inventories are stored in a PostgreSQL database to persist across sessions.",
      "Booth and wall designed as modular interactable areas using an MVC-style architecture.",
    ],
  },
  imageProcessor: {
    category: "code",
    title: "Image Processor",
    subtitle: "Mini GUI and Scripting Application",
    badges: ["Java", "Swing", "JUnit", "JAR"],
    media: [
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/ip-bird.webp`,
        alt: "Birds from Image Processor",
      },
      {
        type: "video",
        src: `${process.env.PUBLIC_URL}/portfolio/ip-demo.mp4`,
        title: "Image Processor Demo",
      },
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/ip-diagram.webp`,
        alt: "Image Processor Diagram",
      },
    ],
    buttons: [
      {
        type: "code",
        href: "https://github.com/ashlynnbraisted/image-processor",
      },
    ],
    description: [
      "A basic image processing tool built with MVC architecture and the Command design pattern.",
      "The app manages images in multiple formats (JPG, PNG, PPM) and allows a variety of transformations, including brightness adjustment, flips, blur/sharpen, sepia, downscaling, masking, and RGB channel manipulation.",
      "Users can interact via a GUI, a console for interactive commands, or scripting. The tool also supports saving/loading images and a live histogram visualization.",
    ],
  },
  cacophonyCrossing: {
    category: "code",
    title: "Cacophony Crossing",
    subtitle: "Noise-Responsive Urban Pedestrian Game",
    badges: ["Java", "Processing"],
    media: [
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/cc-mockup.webp`,
        alt: "Cacophony Crossing Homepage",
      },
      {
        type: "video",
        src: `${process.env.PUBLIC_URL}/portfolio/cc-demo.mp4`,
        title: "Cacophony Crossing Demo",
      },
    ],
    buttons: [
      {
        type: "code",
        href: "https://github.com/ashlynnbraisted/cacophony-crossing",
      },
    ],
    description: [
      "A site-specific mobile application minigame inspired by Crossy Road where players navigate lanes of traffic including bikes, cars, buses, and trains on Huntington Avenue.",
      "Real-time ambient sound from the user’s environment dynamically increases obstacle speed in-game. The game uses lane-based movement, animated sprites, and win/loss conditions based on reaching the top or colliding with vehicles. Players can also pick up headphones on their route, which temporarily reduce the detected noise level.",
      "All visual elements, including the players, background, and vehicles were hand-drawn in Illustrator.",
    ],
  },
  ribbles: {
    category: "code",
    title: "Ribbles",
    subtitle: "Interactive Public Art Installation",
    badges: ["Java", "Processing", "JUnit"],
    media: [
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/ribbles.webp`,
        alt: "Ribbles Installation",
      },
      {
        type: "video",
        src: `${process.env.PUBLIC_URL}/portfolio/ribbles-2.mp4`,
        title: "Ribbles Demo",
      },
      {
        type: "video",
        src: `${process.env.PUBLIC_URL}/portfolio/ribbles.mp4`,
        title: "Ribbles Demo",
      },
    ],
    buttons: [
      {
        type: "info",
        href: "https://ars.electronica.art/futurelab/en/projects-northeastern-university-2022/",
      },
    ],
    description: [
      "A large-scale public art piece on the facade of Ars Electronica at FutureLab in Linz, Austria alongside two other programmers over the course of three days. We built an interactive game of tag that played across all five sides of the museum exterior.",
      "Integrated with Pharus API, a laser motion-tracking system, to turn people’s movements on the courtyard of the museum into exploding circles of light on the building’s facade when they collided.",
    ],
  },
  personalMediaJournal: {
    category: "code",
    title: "Personal Media Journal",
    subtitle: "Media Tracking Application",
    badges: [
      "Python",
      "Flask",
      "MySQL",
      "DataGrip",
      "Docker",
      "AppSmith",
      "Postman",
      "REST API",
    ],
    media: [
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/pmj-demo.webp`,
        alt: "Personal Media Journal Demo",
      },
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/pmj-diagram1.webp`,
        alt: "Personal Media Journal Global ER Diagram",
        fit: "contain",
      },
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/pmj-diagram2.webp`,
        alt: "Personal Media Journal Schema Diagram",
        fit: "contain",
      },
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/pmj-diagram3.webp`,
        alt: "Personal Media Journal Relational Diagram",
        fit: "contain",
      },
    ],
    buttons: [
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
    ],
    description: [
      "A proof-of-concept media app emphasizing backend architecture and data integration, featuring a minimal UI for demonstrating key functionality such as mood-based recommendations, review tracking, and personalized profiles.",
      "Deliverables included user stories, personas, ER and relational diagrams, a complete database schema, and a REST API matrix ensuring all features were supported by the backend.",
    ],
  },
  braisted: {
    category: "code",
    title: "Braisted.com",
    subtitle: "Personal Website",
    badges: ["JavaScript", "React", "Chakra UI", "GitHub Pages"],
    media: [
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/pw-logo.svg`,
        alt: "Personal Website Logo",
        fit: "contain",
      },
    ],
    buttons: [
      { type: "code", href: "https://github.com/ashlynnbraisted/braisted.com" },
    ],
    description: [
      "You're on it right now!",
      "I designed and developed this website as both a creative space and a personal portfolio. The codebase is built for reusability, making it easy to add new projects as I create them.",
    ],
  },
  swap: {
    category: "uiux",
    title: "Swap",
    subtitle: "Senior Capstone",
    badges: ["Figma", "InDesign", "Illustrator"],
    media: [
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/swap-mockup.webp`,
        alt: "Swap Site",
      },
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/swap-component.webp`,
        alt: "Swap Component Library",
      },
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/swap-ads.webp`,
        alt: "Swap Ads",
      },
    ],
    buttons: [
      {
        type: "figma",
        href: "https://www.figma.com/proto/t9yJfdGes4qnykWObiqJpa/Swap-Capstone?node-id=293-751&t=pucFbrA6L8O9qUO5-1",
      },
    ],
    description: [
      "For my Senior Capstone, I designed a high-fidelity prototype for Swap, an e-commerce platform that lets users exchange goods within their community instead of buying and selling.",
      "Alongside the prototype, I developed a component library for the site and created an ad campaign for the New York City subway.",
    ],
  },
  cookbook: {
    category: "uiux",
    title: "CookBook",
    subtitle: "AI Grocery & Cooking Assistant App",
    badges: ["Figma"],
    media: [
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/cookbook-mockup.webp`,
        alt: "CookBook",
      },
    ],
    buttons: [
      {
        type: "figma",
        href: "https://www.figma.com/proto/FM2ekiDuqMBaCxBs8NilMO/High-Fidelity-Prototype?page-id=17%3A4&node-id=182-21714&viewport=768%2C576%2C0.2&t=OZzh0LJCpjv6nrTp-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=182%3A21714",
      },
    ],
    description: [
      "A high-fidelity Figma prototype designed to simplify grocery shopping and cooking by helping users plan meals, manage ingredients, and explore recipes.",
      "The project included conducting focus groups, Wizard of Oz testing, timed usability studies, and over ten interviews to optimize usability. I designed interactive screens for the home and pantry, schedule, AI chat, recipe explorer, and user profile, ensuring a cohesive and intuitive user experience.",
    ],
  },
  rsi: {
    category: "uiux",
    title: "Regional Snowfall Index",
    subtitle: "Redesigning Government Climate Data",
    badges: ["Figma", "InDesign"],
    media: [
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/RSI-landing.webp`,
        alt: "RSI Landing Page",
      },
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/RSI-original.webp`,
        alt: "RSI Original Site",
      },
      {
        type: "image",
        src: `${process.env.PUBLIC_URL}/portfolio/RSI-brochure.webp`,
        alt: "RSI Brochure",
      },
    ],
    description: [
      `I reimagined the Regional Snowfall Index page of the NOAA website to improve usability and accessibility in my Interaction Design II course.`,
      "My redesign emphasizes clarity and user value, turning complex data into an intuitive experience.",
      "Additionally, I created a supporting brochure to guide users through the site’s current interface.",
    ],
  },
};

export default portfolioData;
