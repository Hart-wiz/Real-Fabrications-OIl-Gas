import React from "react";
import OtherNav from "../components/OtherNav";
import Footer from "../components/Footer";
import banner from "../assets/safety-equipment.webp";
import Nav from "../components/Nav";

const SafetyEquip = () => {
  return (
    <>
      <OtherNav
        companyName="MARINE LOGISTICS"
        className="text-sm text-orange-700"
      />
      <div className="bg-white text-gray-800 px-6 py-12 md:px-20">
        <img src={banner} alt="" className="h-90 w-full max-md:h-70" />
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8">
            Marine Safety Equipment & Offshore PPE Services
          </h1>

          {/* Overview */}
          <p className="mb-10 text-lg leading-relaxed">
            We are a major provider of marine safety equipment and offshore
            personal protective equipment (PPE), supplying high-quality products
            and services to leading marine service companies. All equipment
            complies with international standards, and we offer hands-on
            workforce training to ensure correct usage.
          </p>

          {/* Marine Safety Equipment */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Marine Safety Equipment and Systems
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Life-Saving Appliances:
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Inflatable Life Rafts</li>
                  <li>Lifeboats</li>
                  <li>Rescue Boats</li>
                  <li>Life Jackets</li>
                  <li>Work Vests</li>
                  <li>Immersion Suits</li>
                  <li>Life Buoys</li>
                  <li>Emergency Food Rations and Water</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Fire Safety & Suppression Systems:
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Fire Extinguishers</li>
                  <li>Fireman Suits</li>
                  <li>Breathing Apparatus</li>
                  <li>EEBD (Emergency Escape Breathing Devices)</li>
                  <li>Fixed CO₂ Systems</li>
                  <li>Halon Systems</li>
                  <li>Dry Powder Systems</li>
                  <li>Foam Systems</li>
                  <li>Fire Alarm Systems</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Signaling & Accessories:
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Marine Distress Signals</li>
                  <li>Safety Lights and Electronics</li>
                  <li>Marine Safety Stickers</li>
                  <li>IMO Photoluminescent Signage</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Offshore PPE */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Offshore PPE Supply & Training
            </h2>
            <p className="mb-6">
              We supply essential PPE for offshore operations and train
              personnel on proper usage to ensure safety and compliance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Head Protection:</strong> Hard hats to guard against
                  falling objects and impacts.
                </li>
                <li>
                  <strong>Eye Protection:</strong> Safety goggles and face
                  shields for splash and glare protection.
                </li>
                <li>
                  <strong>Hearing Protection:</strong> Earplugs or earmuffs to
                  reduce noise exposure.
                </li>
                <li>
                  <strong>Respiratory Protection:</strong> Masks and respirators
                  for fume and gas protection.
                </li>
              </ul>

              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Hand Protection:</strong> Cut- and chemical-resistant
                  gloves.
                </li>
                <li>
                  <strong>Body Protection:</strong> Flame-resistant clothing for
                  fire safety.
                </li>
                <li>
                  <strong>Foot Protection:</strong> Steel-toe, slip-resistant
                  safety boots.
                </li>
                <li>
                  <strong>Fall Protection:</strong> Safety harnesses and fall
                  arrest equipment.
                </li>
                <li>
                  <strong>Survival Gear:</strong> Life vests, immersion suits,
                  and survival suits.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SafetyEquip;
