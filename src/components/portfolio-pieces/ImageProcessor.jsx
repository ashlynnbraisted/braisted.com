import { Image, PortfolioCard, Video } from "..";

// A display of my Image Processor
const ImageProcessor = (props) => {
  return (
    <PortfolioCard
      title="Image Processor"
      subtitle="Mini GUI and Scripting Application"
      badges={["Java", "Swing", "JUnit", "JAR"]}
      media={[
        <Image
          src={`${process.env.PUBLIC_URL}/ip-bird.jpg`}
          alt="Birds from Image Processor"
        />,
        <Video
          title="Image Processor Demo"
          src={`${process.env.PUBLIC_URL}/ip-demo.mov`}
        />,
        <Image
          src={`${process.env.PUBLIC_URL}/ip-diagram.png`}
          alt="Image Processor Diagram"
        />,
      ]}
      buttons={[
        {
          type: "code",
          href: "https://github.com/ashlynnbraisted/image-processor",
        },
      ]}
      description={[
        "A basic image processing tool built with MVC architecture and the Command design pattern.",
        "The app manages images in multiple formats (JPG, PNG, PPM) and allows a variety of transformations, including brightness adjustment, flips, blur/sharpen, sepia, downscaling, masking, and RGB channel manipulation.",
        "Users can interact via a GUI, a console for interactive commands, or scripting. The tool also supports saving/loading images and a live histogram visualization.",
      ]}
      {...props}
    />
  );
};

export default ImageProcessor;
