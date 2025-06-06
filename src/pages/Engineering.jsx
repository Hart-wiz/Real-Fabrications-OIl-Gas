import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import check from "../assets/check.svg";
import slide4 from "../assets/slide4.webp";
import offshore from "../assets/offshore.webp";
import CobelProjectCard from "../components/CobelProjectCard";
import OtherNav from "../components/OtherNav";

const Engineering = () => {
  const content = [
    {
      image: offshore,
      title: "Engineering and Design Services",
      progress: 95,
      article: [
        "House engineering department supports new projects as well as rig upgrades and refurbishment work.",
        "We utilize the latest available software to analyze data, guaranteeing accurate results.",
        "We provide clients with necessary computations and certifications according to API requirements.",
        "We design and analyze our systems through all stages of projects from concept to delivery.",
        "We have in-house capability for conceptual studies, basic designs, and detailed design.",
        "Our engineers collaborate with Supply Chain, Operations, and Installations teams.",
        "We ensure the hardware we supply meets all design requirements and satisfies our clients.",
      ],
    },
  ];

  return (
    <div>
      <OtherNav className="text-sm text-orange-700" />
      <main>
        <section className="flex gap-1 m-9 flex-col max-md:m-0 px-20 pb-30 max-md:px-4">
          {content.map((item, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-90 object-cover mb-4 max-md:h-70"
              />
              <h1 className="text-black text-center font-mono text-3xl py-6 flex flex-row justify-center">
                Engineering and Design
              </h1>
              <h2 className="text-xl font-bold mb-4">{item.title}</h2>
              <ul className="text-gray-700 space-y-3">
                {item.article.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <img src={check} alt="check" className="w-5 h-5 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {/* <div className="mt-4 text-sm text-gray-500">
                Progress:
                <progress max="100" value={item.progress}></progress>%
              </div> */}
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Engineering;
