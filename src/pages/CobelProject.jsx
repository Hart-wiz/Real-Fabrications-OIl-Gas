import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import slide4 from "../assets/slide4.jpg";
import pipeline from "../assets/pipeline.webp";
import offshore from "../assets/offshore.png";
import CobelProjectCard from "../components/CobelProjectCard";
import green3 from "../assets/green3.jpg";

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
      image: pipeline,
      title: "Cross Country Pipeline",
      progress: 70,
      article:
        "Our Cross-Country Pipeline portfolio consists of long-term contract for installation of new pipeline of varying sizes from 6” to 30” and flow medium involving Engineering, Procurement, Installation and commissioning works. We meticulously handle associated dewatering, lagoon building and related Environmental requirements. We give special focus on the specific external/internal coatings, downhill/uphill/dolly mix welding processes, lowering, Pipeline Pre-commissioning/commissioning works including the Base Line Survey works. We anticipate the risk of existing pipeline crossings, road crossings and fenced third party property crossings and initiate required early actions/approvals as required to meet the tight pipeline project schedules. Our work covers all disciplines not limited to Civil, Mechanical, Piping, Electrical, Instrumentation, Communication, Control System and Loss Prevention. ",
    },
    {
      image: green3,
      title: "Brownfield and Greenfield",
      progress: 70,
      article:
        "We deliver major Brownfield and Greenfield projects to help our customers to get the most out of their assets. we have delivered a wide range of brownfield and Greenfield Engineering, Procurement, Construction and Commissioning services to help our customers to maximize efficiency, maintain asset integrity and extend life for onshore and offshore assets. \n Our brownfield capability covers: \n•	Major and minor shutdown management\n•	Facilities upgrades\n•	Major modifications\n•	Compressor upgrades\n•	Minor modifications\n•	Tie-ins to trunklines\n•	Flange hook ups\n•	Flowline projects\n•	Commissioning and start up.\nOur Greenfield Capability includes following major Projects\n•	CNG Stations\n•	Pipeline Project\n•	Diesel Filling Station and Mini Nitrogen Plant\n•	Seawater Pump House",
    },
  ];

  return (
    <div>
      <Nav />
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
