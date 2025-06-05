import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import ImageSlider from "../components/ImageSlider";
import slide3 from "../assets/cobol3.png";
import slide4 from "../assets/cobol4.png";
import slide5 from "../assets/cobol5.png";
import ServiceCard from "../components/ServiceCard";
import { cobelCards } from "../assets/assets";
import ImageCard from "../components/ImageCard";
import project from "../assets/epic-projects.png";
import construction from "../assets/construction.png";
import shutdown from "../assets/shutdown.png";
import calloff from "../assets/calloff.png";
import hse from "../assets/hse.png";
import warning from "../assets/warning.jpg";
import Footer from "../components/Footer";

const Cobel = () => {
  const images = [slide3, slide4, slide5];
  const articles = [
    " Real Fabrications Oil & Gas Services has been a trusted name in Nigeria’s oil and gas industry since 2008, delivering high-quality fabrication and construction services for major EPC projects.",
    "Real Fabrication Oil & Gas ensures that it delivers world class service in an ethically acceptable manner with adherence to the highest safety standards and sensitivity to our environment. ",
    "Real Fabrications Oil & Gas Services has been delivering reliable fabrication and construction solutions to Nigeria’s oil and gas industry since 2008.",
  ];

  const cobelserve = [
    {
      image: project,
      title: "Epic Projects",
      link: "/project",
    },
    {
      image: calloff,
      title: "Call Off Services",
      link: "/calloff",
    },
    {
      image: construction,
      title: " Fabrication & Construction",
      link: "/construction",
    },
    {
      image: shutdown,
      title: "shutdown Projects",
      link: "/shutdown",
    },
    {
      image: hse,
      title: "HSE",
      link: "/hse",
    },
  ];

  return (
    <div className="text-black">
      <Nav companyName="OIL & GAS" className="text-sm text-orange-700" />
      <section className="relative">
        <ImageSlider images={images} article={articles} />
      </section>
      <div className="w-full bg-orange-700 text-white py-9">
        <h2 className="text-center text-5xl py-16 max-md:py-8">WELCOME</h2>
        <p className="px-40 text-justify max-md:text-sm max-md:px-3">
          Real Fabrications Oil & Gas Services has been a trusted name in
          Nigeria’s oil and gas industry since 2008, delivering high-quality
          fabrication and construction services for major EPIC projects. With a
          focus on safety, quality, and environmental responsibility, we support
          both onshore and offshore operations with a skilled workforce and
          advanced welding techniques. Our services include offshore and onshore
          fabrication, pressure vessel production, and complex subsea structures
          such as manifolds and suction piles. We are proud to be a reliable
          partner to top contractors and IOCs across the region.
        </p>
      </div>
      <section className="my-10" id="services">
        <section className=" ">
          <h2 className="text-4xl text-center font-thin p-9">OUR BUSINESS</h2>
          <div className="flex gap-9 justify-center flex-wrap flex-row ">
            {cobelserve.map((card) => (
              <Link to={card.link}>
                <ImageCard cardImage={card.image} title={card.title} />
              </Link>
            ))}
          </div>
        </section>
        <section className="my-15">
          <h1 className="text-center font-thin text-4xl">OUR PROJECTS</h1>
          <div>
            <main className=" px-9 py-9 max-md:px-0 max-md:py-9">
              <div className="flex gap-5 flex-wrap flex-row justify-center">
                {cobelCards.map((card) => (
                  <ServiceCard
                    image={card.image}
                    title={card.title}
                    text={card.about}
                  />
                ))}
              </div>
            </main>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Cobel;
