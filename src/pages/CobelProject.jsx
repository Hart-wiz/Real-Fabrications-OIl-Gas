import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import slide4 from "../assets/slide4.webp";
import offshore from "../assets/offshore.webp";
import CobelProjectCard from "../components/CobelProjectCard";

const CobelProject = () => {
  const content = [
    {
      image: offshore,
      title: "Offshore and Onshore Projects",
      progress: 40,
      article:
        " We  provides Offshore and Onshore construction services to major contractors and IOC's from the fabrication of: • Jackets • Flare booms • Helidecks • Riser protectors for FPSO's • Structural decks. Living quarters To the pre fabrication of: • Piping spools • Structural supports for onshore development • Pig launchers ",
    },

    {
      image: offshore,
      title: "Brownfield and Greenfield",
      progress: 70,
      article:
        "We deliver major Brownfield and Greenfield projects to help our customers to get the most out of their assets. we have delivered a wide range of brownfield and Greenfield Engineering, Procurement, Construction and Commissioning services to help our customers to maximize efficiency, maintain asset integrity and extend life for onshore and offshore assets. \n Our brownfield capability covers: \n•	Major and minor shutdown management\n•	Facilities upgrades\n•	Major modifications\n•	Compressor upgrades\n•	Minor modifications\n•	Tie-ins to trunklines\n•	Flange hook ups\n•	Flowline projects\n•	Commissioning and start up.\nOur Greenfield Capability includes following major Projects\n•	CNG Stations\n•	Pipeline Project\n•	Diesel Filling Station and Mini Nitrogen Plant\n•	Seawater Pump House",
    },
  ];

  return (
    <div>
      <OtherNav companyName="OIL & GAS" />
      <main>
        <img src={slide4} alt="" className="h-90 w-screen" />
        <h1 className="text-black text-center font-mono text-3xl py-6 flex flex-row justify-center">
          <a
            href="/"
            className="text-black p-1 text-sm mr-5 bg-blue-300 border-3 border-blue-500 cursor-pointer "
          >
            ⇦back
          </a>
          EPIC PROJECTS
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

export default CobelProject;
