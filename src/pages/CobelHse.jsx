import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import slide4 from "../assets/slide4.webp";
import offshore from "../assets/offshore.webp";
import CobelProjectCard from "../components/CobelProjectCard";
import OtherNav from "../components/OtherNav";

const CobelHse = () => {
  const content = [
    {
      image: offshore,
      title: "Health, Safety, and Environment Management",
      progress: 95,
      article:
        " Real Fabrications Oil & Gas is committed to maintaining an incident-free workplace and providing a safe environment for everyone involved in or affected by our operations. We believe that effective health, safety, and environmental (HSE) leadership is essential to everything we do, and we uphold the highest standards across all areas of our work. Protecting the environment is a core priority for us. We take a precautionary approach by identifying and assessing potential risks and impacts at every stage of our projects—ensuring our operations remain responsible, safe, and sustainable.",
    },
  ];

  return (
    <div>
      <OtherNav />
      <main>
        <img src={slide4} alt="" className="h-90 w-screen" />
        <h1 className="text-black text-center font-mono text-3xl py-6 flex flex-row justify-center">
          Trading in Oilfield Products & HSE
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

export default CobelHse;
