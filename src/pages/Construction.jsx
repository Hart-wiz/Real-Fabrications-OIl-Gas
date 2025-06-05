import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import slide4 from "../assets/slide4.jpg";
import offshore from "../assets/offshore.png";
import CobelProjectCard from "../components/CobelProjectCard";
import OtherNav from "../components/OtherNav";

const CobelConstruction = () => {
  const content = [
    {
      image: offshore,
      title: "FABRICATION & CONSTRUCTION SERVICES",
      progress: 90,
      article:
        "Real Fabrications Oil & Gas Services provides fabrication and construction services and has been providing services for the oil and gas industry in Nigeria since 2008, We have been involved with most of the large EPC projects awarded in the country since then. The quality and standard of the services we deliver defines Mustang Offshore. Real Fabrication Oil & Gas ensures that it delivers world class service in an ethically acceptable manner with adherence to the highest safety standards and sensitivity to our environment. ",
    },
  ];

  return (
    <div>
      <OtherNav />
      <main>
        <img src={slide4} alt="" className="h-90 w-screen" />
        <h1 className="text-black text-center font-mono text-wrap text-3xl py-6 flex flex-row justify-center">
          FABRICATIONS & CONSTRUCTION
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

          <div className="text-black pl-40 w-screen max-md:pl-0 max-md:px-3">
            <h2 className="text-black text-2xl font-bold py-9 max-md:text-lg max-md:px-4 ">
              We offer multidisciplinary construction and installation services
              not limited to the following –
            </h2>
            <ul className=" list-disc list-inside max:md:px-4 ">
              <ul>
                <li>Offshore and onshore fabrication</li>
                <li>Subsea structures</li>
                <li>Production of pressure vessels</li>
                <li>Offshore support services</li>

                <li>
                  <strong>Offshore and Onshore Fabrication:</strong>
                  <ul>
                    <li>Jackets</li>
                    <li>Flare booms</li>
                    <li>Helidecks</li>
                    <li>Riser protectors for FPSOs</li>
                    <li>Structural decks</li>
                    <li>Living quarters</li>
                  </ul>
                </li>

                <li>
                  <strong>Prefabrication:</strong>
                  <ul>
                    <li>Piping spools</li>
                    <li>Structural supports for onshore development</li>
                    <li>Pig launchers</li>
                  </ul>
                </li>

                <li>
                  <strong>Welding Capabilities:</strong>
                  <ul>
                    <li>SMAW</li>
                    <li>Orbital welding</li>
                    <li>TIG welding</li>
                    <li>SAW</li>
                  </ul>
                </li>

                <li>
                  <strong>Subsea Structures:</strong>
                  <ul>
                    <li>Suction piles</li>
                    <li>Water injection systems</li>
                    <li>Production and gas manifolds</li>
                  </ul>
                </li>
              </ul>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CobelConstruction;
