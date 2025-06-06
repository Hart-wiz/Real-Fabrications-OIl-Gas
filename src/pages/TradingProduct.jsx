import React from "react";
import Footer from "../components/Footer";
import OtherNav from "../components/OtherNav";
import banner from "../assets/oil-trade.png";

const TradingProduct = () => {
  return (
    <div>
      <OtherNav
        companyName="TRADING & HSE"
        className="text-sm text-orange-700"
      />
      <main className="bg-white py-12 px-6 md:px-20 text-gray-800">
        <img src={banner} alt="banner oilfield " className=" h-90 w-full" />
        <div className="max-w-5xl mx-auto space-y-10">
          <h1 className="text-4xl font-bold text-center text-blue-900">
            Trading in Oilfield Products & HSE Management
          </h1>

          {/* Intro */}
          <p className="text-lg leading-relaxed text-justify">
            At{" "}
            <span className="font-semibold text-blue-800">
              Real Fabrications Oil & Gas Services
            </span>
            , we are actively engaged in the trading and supply of high-quality
            oilfield equipment and safety systems essential for upstream,
            midstream, and downstream operations. Our goal is to provide
            reliable products and promote safe practices in every environment we
            serve.
          </p>

          {/* Oilfield Products */}
          <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              🛢️ Oilfield Equipment & Product Trading
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Drilling tools and tubulars</li>
              <li>Production chemicals and additives</li>
              <li>Wellhead components and valves</li>
              <li>Hoses, fittings, flanges, and gaskets</li>
              <li>Pipes, pumps, generators, compressors</li>
              <li>Instrumentation and control devices</li>
              <li>
                Spare parts and MRO (Maintenance, Repair & Operations) supplies
              </li>
            </ul>
          </section>

          {/* HSE Section */}
          <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              🛡️ HSE Management & Commitment
            </h2>
            <p className="text-gray-700 mb-4">
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
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TradingProduct;
