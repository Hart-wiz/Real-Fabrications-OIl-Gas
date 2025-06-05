import React from "react";
import MyLeafletMap from "../components/MyLeafletMap";
import Form from "../components/Form";

import Footer from "../components/Footer";
import OtherNav from "../components/OtherNav";

const Contact = () => {
  return (
    <div>
      <OtherNav companyName="OIL & GAS" />
      <main className="p-9 pt-30 text-black flex gap-6  max-md:items-center justify-center flex-row-reverse max-md:flex-col-reverse">
        <section>
          <h1 className="font-bold text-xl p-3">Find US Here </h1>
          <div className="w-xl max-md:w-screen px-3 z-0">
            <MyLeafletMap />
          </div>
        </section>
        <section className="w-full">
          <h1 className="font-bold text-xl py-3">Contact Us </h1>
          <Form />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
