import React from "react";
import Footer from "../components/Footer";
import OtherNav from "../components/OtherNav";
import banner from "../assets/manpower-banner.png";

const ManpowerProvision = () => {
  return (
    <div>
      <OtherNav
        companyName="MANPOWER SERVICES"
        className="text-sm text-orange-700"
      />
      <main className="bg-white py-12 px-6 md:px-20 text-gray-800">
        <img src={banner} alt="" className="h-90 w-full" />
        <div className="max-w-5xl mx-auto space-y-10">
          <h1 className="text-4xl font-bold text-center text-blue-900">
            Technical – Skilled & Unskilled Manpower Provision
          </h1>

          <p className="text-lg leading-relaxed text-justify">
            At{" "}
            <span className="font-semibold text-blue-800">
              Real Fabrications Oil & Gas Services
            </span>
            , we understand that the success of any project depends heavily on
            the quality of its workforce. We provide reliable, qualified, and
            experienced technical manpower — both skilled and unskilled — to
            support diverse operations across the oil & gas, marine, and
            construction sectors.
          </p>
          <div className="flex justify-between flex-wrap">
            {/* Skilled Manpower */}
            <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                🛠️ Skilled Manpower
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Mechanical and Electrical Technicians</li>
                <li>Certified Welders and Fabricators (TIG, MIG, SMAW)</li>
                <li>QA/QC Inspectors & NDT Technicians</li>
                <li>Instrumentation and Control Engineers</li>
                <li>Offshore & Onshore Crane Operators</li>
                <li>Marine Engineers & Deckhands</li>
                <li>Safety Officers (NEBOSH Certified)</li>
                <li>Riggers and Scaffolders</li>
              </ul>
            </section>

            {/* Unskilled Manpower */}
            <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                🧹 Unskilled & Support Manpower
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>General Laborers</li>
                <li>Helpers and Cleaners</li>
                <li>Site Attendants</li>
                <li>Security Personnel</li>
                <li>Logistics Support Hands</li>
              </ul>
            </section>
          </div>

          {/* Why Choose Us */}
          <section className="bg-white text-justify py-6">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              ✅ Why Choose Our Manpower Services?
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-2xl ">
              <li>
                Trained to meet international safety and performance standards
              </li>
              <li>Fully vetted and verified before deployment</li>
              <li>Available for short-term and long-term contracts</li>
              <li>Deployable offshore or onshore, locally or regionally</li>
              <li>Backed by 24/7 administrative and logistics support</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ManpowerProvision;
