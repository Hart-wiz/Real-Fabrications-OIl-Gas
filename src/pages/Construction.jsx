import React from "react";
import OtherNav from "../components/OtherNav";
import Footer from "../components/Footer";
import banner from "../assets/construction-banner.webp";

const Construction = () => {
  return (
    <div>
      <OtherNav className="text-sm text-orange-700" />
      <div className="px-6 md:px-20 py-10 text-gray-800 bg-white">
        <img src={banner} alt="banner" className="h-99 w-full   max-md:h-70" />
        <h1 className="text-3xl font-bold mb-6 text-center text-black">
          Fabrication and Construction Services
        </h1>

        <p className="mb-4">
          <strong>Real Fabrications Oil & Gas Services</strong> has provided
          specialized fabrication and construction services to Nigeria’s oil and
          gas industry since <strong>1998</strong>. We have participated in most
          major EPC projects in the country. Our hallmark is delivering
          world-class services with high safety standards, environmental
          responsibility, and a highly skilled workforce.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Core Service Areas</h2>
        <table className="table-auto border border-gray-300 w-full mb-6">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Service Category</th>
              <th className="border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">
                Offshore & Onshore Fabrication
              </td>
              <td className="border px-4 py-2">
                Construction and prefabrication for major contractors and IOCs
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Subsea Structures</td>
              <td className="border px-4 py-2">
                Custom fabrication of subsea equipment and anchors
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Pressure Vessels</td>
              <td className="border px-4 py-2">
                Design and production of industrial pressure-containing units
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Offshore Support Services</td>
              <td className="border px-4 py-2">
                Ancillary services supporting offshore development
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Offshore and Onshore Fabrication Scope
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-2">Major Fabricated Structures:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Jackets</li>
              <li>Flare booms</li>
              <li>Helidecks</li>
              <li>Riser protectors (for FPSOs)</li>
              <li>Structural decks</li>
              <li>Living quarters</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Prefabrication Capabilities:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Piping spools</li>
              <li>Structural supports for onshore development</li>
              <li>Pig launchers</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-2">Welding Expertise</h2>
        <p className="mb-2">
          We work with various steel types including stainless steel, carbon
          steel, and duplex using multiple welding techniques:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-6">
          <li>SMAW – Shielded Metal Arc Welding</li>
          <li>Orbital Welding – Precision pipe welding</li>
          <li>TIG Welding – Tungsten Inert Gas Welding</li>
          <li>SAW – Submerged Arc Welding</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">
          Subsea Structures Fabrication
        </h2>
        <p className="mb-2">
          We fabricate advanced subsea components and manifolds for offshore oil
          and gas operations, including:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Suction piles</li>
          <li>Water injection manifolds</li>
          <li>Production manifolds</li>
          <li>Gas manifolds</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Construction;
