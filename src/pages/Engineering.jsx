import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import slide4 from "../assets/slide4.webp";
import offshore from "../assets/offshore.webp";
import CobelProjectCard from "../components/CobelProjectCard";

const Engineering = () => {
  const content = [
    {
      image: offshore,
      title: "Engineering and Design Services",
      progress: 95,
      article:
        " house engineering department supports new projects as well Rig upgrades and refurbishment work. We utilize the latest available software to analyze data, guaranteeing accurate results and providing clients with necessary computation and certifications according to API requirements. We design and analyze our systems through all stages of projects from concept to delivery and have in-house capabilityfor conceptual studies, basic designs and detailed design.Our engineers work with the Supply Chain Management, Operations and Installations to ensure that the hardware wesupply meet all design requirements and fully satisfies our clients.",
    },
  ];

  return (
    <div>
      <Nav />
      <main>
        <img src={slide4} alt="" className="h-90 w-screen" />
        <h1 className="text-black text-center font-mono text-3xl py-6 flex flex-row justify-center">
          Engineering and Design
        </h1>

        <section className="flex gap-1 m-9 flex-col max-md:m-0">
          {content.map((content) => (
            <CobelProjectCard
              image={content.image}
              title={content.title}
              article={content.article}
              progress={content.progress}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Engineering;
