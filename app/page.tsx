import React from "react";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Regulations from "./components/Regulations";
import Haccp from "./components/Haccp";
import RiskAssessment from "./components/RiskAssessment";
import FireProtection from "./components/FireProtection";
import Audit from "./components/Audit";

import Education from "./components/Education";
import Legislation from "./components/Legislation";
import Contact from "./components/Contact";
import Philosophy from "./components/Philosophy";
import RecommendedApp from "./components/RecommendedApp";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Page = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 z-50 w-full">
        <Header />
      </div>

      {/* Full-Screen Hero Section */}
      <section className="w-full h-screen ">
        <Hero />
      </section>
      {/* Main Content (Centered) */}
      <div id="kezdolap">
        <Partners />
      </div>

      <div id="szabalyok">
        <Regulations />
      </div>

      <div id="haccp">
        <Haccp />
      </div>

      <div id="kockazatertekeles">
        <RiskAssessment />
      </div>

      <div id="tuzvedelem">
        <FireProtection />
      </div>

      <div id="audit">
        <Audit />
      </div>

      <div id="oktatas">
        <Education />
      </div>

      <div id="jogszabalyok">
        <Legislation />
      </div>

      <div id="filozofia">
        <Philosophy />
      </div>

      <div id="ajanlott-app">
        <RecommendedApp />
      </div>

      <div id="kapcsolat">
        <Contact />
      </div>

      <div id="footer">
        <Footer />
      </div>

      {/** <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
      </div> */}
    </div>
  );
};

export default Page;
