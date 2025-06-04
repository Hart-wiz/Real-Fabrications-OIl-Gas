import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import slide4 from "../assets/slide4.jpg";
import offshore from "../assets/offshore.jpg";
import CobelProjectCard from "../components/CobelProjectCard";

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
      <Nav />
      <main>
        <img src={slide4} alt="" className="h-90 w-screen" />
        <h1 className="text-black text-center font-mono text-wrap text-3xl py-6 flex flex-row justify-center">
          <a
            href="/cobel"
            className="text-black p-1 text-sm mr-5 bg-blue-300 border-3 border-blue-500 cursor-pointer  max-md:mr-0 "
          >
            ⇦back
          </a>
          COBEL FACILITY CONSTRUCTION
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
              <li>All types of Oil and Gas plant modifications</li>
              <li>Mechanical rotating & static equipment installation</li>
              <li>Shutdown works</li>
              <li>Piping welding and installation</li>
              <li>Pipelines installation</li>
              <li>
                All civil works including buildings, roads, foundations, etc.
              </li>
              <li>Electrical equipment installation</li>
              <li>Electrical wiring and termination</li>
              <li>
                Instrumentation & control equipment installation including
                wiring and termination
              </li>
              <li>Telecommunication equipment installation</li>
              <li>Offshore and onshore heavy lifting</li>
              <li>Critical activities execution such as hot taps</li>
              <li>Pre-commissioning and commissioning support</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CobelConstruction;
