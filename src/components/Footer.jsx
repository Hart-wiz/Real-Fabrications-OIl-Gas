import React from "react";

import call from "../assets/call.webp";
import poster from "../assets/realfabposter.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <section className="footer p-6 footer-text flex gap-19 max-md:flex-col max-md:gap-5 ">
        <div className="">
          <h2>WHY CHOOSE US</h2>
          <p>
            At REAL FABRICATIONS Oil & Gas, every member of our team is
            committed to delivering operational excellence—every project, every
            day.
          </p>
        </div>

        <div className=" max-md:w-auto md:w-[700px] ">
          <h2>Location Address 1:</h2>
          <p>25 Eifans Road Off 188 Faulks Road, Aba, Abia State, Nigeria.</p>
          <p>
            <h2>Location Address 2:</h2>
            <p>
              14 Streamview Estate., Atali, PortHarcourt, Rivers State, Nigeria.
            </p>
          </p>
        </div>
        <div className="">
          <h2>CONNECT WITH US</h2>
          <ul>
            <li>info@realfabrications.com</li>

            <li>Web:www.realfabrications.com</li>
            <li>
              <div>
                <h2>CALL US</h2>
                <ul className="flex flex-row gap-3 pt-3">
                  <li className="w-9 h-9 bg-white rounded-xl">
                    <a
                      href="tel:+2347020957716"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={call} alt="" />
                    </a>
                  </li>
                  <li>
                    +2347020957716 <br />
                    +2347020289507
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="max-md:hidden ">
          <img src={poster} alt="" />
        </div>
      </section>
      <section className=" text-blue-950 px-9 py-4">
        © {currentYear} Real Fabrications Oil & Gas. All rights reserved. |
        Powered by <i>Weconetdata </i>
      </section>
    </div>
  );
};

export default Footer;
