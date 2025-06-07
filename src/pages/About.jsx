import React from "react";
import poster from "../assets/realfabposter.png";
import check from "/check.svg";

import Footer from "../components/Footer";
import OtherNav from "../components/OtherNav";

const About = () => {
  return (
    <div>
      <OtherNav companyName="OIL & GAS" className="text-sm text-orange-700" />
      <main className="text-blue-950 flex justify-between   text-sm px-30 py-30 max-md:flex-col max-md:items-center">
        <section className="w-[400px] mx-10 space-y-4 max-md:w-[300px] max-md:mx-0">
          <div className="w-[400px]  space-y-4 max-md:w-[300px]">
            <img
              src={poster}
              alt="poster"
              className="w-[400px] max-md:w-[300px]"
            />
            <h2 className="text-xl">CRN: 8538117</h2>
            <p className="font-bold text-justify">
              Real Fabrications Oil & Gas Limited is a trusted Nigerian company
              delivering high-quality services across the oil and gas value
              chain. Since 1998, we have supported major onshore and offshore
              projects with expertise in engineering, fabrication, construction,
              and logistics.
            </p>
            <p className="text-justify">
              <b className="text-blue-900 text-justify">
                🛡️ HSE Management & Commitment <br />
              </b>
              We maintain an uncompromising commitment to Health, Safety, and
              Environmental (HSE) performance across all our operations. Our HSE
              management strategy includes:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Adherence to national and international safety standards</li>
              <li>Regular HSE audits and performance evaluations</li>
              <li>On-site safety supervision and equipment inspections</li>
              <li>
                Employee training in emergency response and environmental care
              </li>
              <li>Deployment of PPE and advanced protective systems</li>
              <li>Proactive risk identification and mitigation</li>
            </ul>
          </div>
        </section>
        <section className="w-[400px] m-8 max-md:w-[300px] ">
          <h2 className="mb-4 font-bold text-xl text-blue-900">
            We offer a wide range of services, including:
          </h2>
          <ul className="list-disc space-y-5">
            <li className="text-justify">
              <b className="text-blue-900 tex">
                Engineering & Design Services: –
              </b>
              Our in-house team uses advanced design software and adheres to API
              standards, ensuring accurate project execution from concept
              through delivery.
            </li>
            <li className="text-justify">
              <b className="text-blue-900 text-justify">
                Fabrication & Construction:–{" "}
              </b>
              From offshore jackets and helidecks to piping spools and pressure
              vessels, we serve top EPC contractors and IOCs with certified
              welding and construction capabilities.
            </li>
            <li className="text-justify">
              <b className="text-blue-900 text-justify">
                {" "}
                Marine & Offshore Logistics: –{" "}
              </b>
              We provide reliable support services that meet the complex demands
              of offshore environments.
            </li>
            <li className="text-justify">
              <b className="text-blue-900">Manpower Supply: –</b>
              Skilled and unskilled professionals are sourced and managed to
              support short and long-term project needs.
            </li>
            <li className="text-justify">
              <b className="text-blue-900">Trading & Procurement: –</b>
              We supply oilfield products, safety equipment, and building
              materials, meeting both industrial and commercial demands.
            </li>
            <li className="text-justify">
              <b className="text-blue-900 text-justify">
                Operations & Maintenance: –
              </b>
              Our team ensures seamless operation and optimal maintenance of
              critical systems and equipment.
            </li>
            <li className="text-justify">
              <b className="text-blue-900 text-justify">
                HSE Management & Commitment: –
              </b>
              We maintain an uncompromising commitment to Health, Safety, and
              Environmental (HSE) performance across all our operations.
            </li>
          </ul>
          <div className="pt-9 italic font-mono text-lg text-justify">
            Our operations are driven by a commitment to safety, quality, and
            environmental responsibility.
          </div>
        </section>

        {/* <section className="w-[400px] m-8  space-y-5 max-md:w-[300px] text-justify">
          <div>
            <h1 className=" font-bold text-xl mb-4 text-blue-900">Mission</h1>
            <p>
              Our mission is to consistently deliver exceptional quality,
              attention to details and timely delivery with the environment in
              mind that exceeds all of our clients' expectations on every
              project we undertake.
            </p>
          </div>
          <div>
            <h1 className=" font-bold text-xl mb-4 text-blue-900">VALUES</h1>
            <p>
              Our mission is embodied in five core values that guide every
              project we undertake.
            </p>
            <ul className="space-y-3 font-bold italic mt-5">
              <li className="flex gap-3 items-center">
                <img src={check} alt="" />
                Quality
              </li>
              <li className="flex gap-3 items-center">
                <img src={check} alt="" />
                Service
              </li>
              <li className="flex gap-3 items-center">
                <img src={check} alt="" />
                Integrity
              </li>
              <li className="flex gap-3 items-center">
                <img src={check} alt="" />
                Innovation
              </li>
              <li className="flex gap-3 items-center">
                <img src={check} alt="" />
                Efficiency
              </li>
            </ul>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default About;
