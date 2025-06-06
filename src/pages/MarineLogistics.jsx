import React from "react";
import Footer from "../components/Footer";
import OtherNav from "../components/OtherNav";
import CobelProjectCard from "../components/CobelProjectCard";

import charter from "../assets/vessel-charter.webp";
import crew from "../assets/crew-transfer.webp"; // Replace with your actual image
import cargo from "../assets/cargo-handling.webp";
import operation from "../assets/marine-base.webp";

const MarineLogistics = () => {
  const content = [
    {
      image: charter,
      title: "Marine Vessel Chartering & Management",
      progress: 95,
      article:
        "We provide and manage a wide range of marine vessels, including Platform Supply Vessels (PSVs), Anchor Handling Tug Supply (AHTS) vessels, crew boats & security patrol vessels, barges, and tugboats. Our vessels are certified and managed for safety, performance, and operational efficiency across offshore logistics tasks.",
    },
    {
      image: crew,
      title: "Personnel Transportation & Crew Changes",
      progress: 90,
      article:
        "We coordinate safe, scheduled transportation of offshore personnel using certified vessels equipped for comfort and safety. This ensures timely crew rotations and staff deployments to offshore platforms and rigs while maintaining international safety standards.",
    },
    {
      image: cargo,
      title: "Offshore Cargo Handling & Material Transport",
      progress: 92,
      article:
        "We manage secure logistics of critical cargo including drilling materials, pipes, chemicals, tools, and consumables. Our fleet ensures fast and safe transit between marine bases and offshore assets with precision and reliability.",
    },
    {
      image: operation,
      title: "Marine Base Operations & Emergency Response",
      progress: 93,
      article:
        "We operate full-service marine support bases with warehousing, inventory control, container handling, loading, fueling, and coordination. We also maintain standby emergency support including firefighting, oil spill response, and search and rescue.",
    },
  ];

  return (
    <div>
      <OtherNav
        companyName="MARINE LOGISTICS"
        className="text-sm text-orange-700"
      />

      <main className="pt-30">
        <h1 className="text-black text-center font-mono text-3xl py-6 flex justify-center">
          Marine & Offshore Logistic Support Services
        </h1>
        <section className="flex flex-col gap-6 m-6 max-md:m-0 md:mx-20">
          {content.map((item, index) => (
            <CobelProjectCard
              key={index}
              image={item.image}
              title={item.title}
              article={item.article}
              progress={item.progress}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MarineLogistics;
