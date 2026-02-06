import React from "react";
import Image from "next/image";
import Image7 from "../../public/images/Images/Image7.jpg";
import Background from "../../public/images/Images/Background2.png";
import { Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import ButtonOutline from "./ui/ButtonOutline";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <div className=" pt-10 md:pt-20 pb-20 relative  mx-auto   max-w-screen-2xl flex items-center justify-center w-full">
      <div className="w-full flex flex-col lg:flex-row justify-between px-3 sm:px-8 lg:px-12 2xl:px-0">
        {/* Left Side Content */}
        <div className="flex-1 py-10 sm:py-20 px-10 flex flex-col lg:justify-between bg-dark relative overflow-hidden">
          <div className="absolute bottom-0 right-0">
            {/* Container for the circles */}
            <div className="relative ">
              {/* First Circle - Dark Gray (#1A1A1A) */}
              <div className="absolute w-100 h-100 bg-[#1A1A1A] rounded-full -top-70 -right-30"></div>

              {/* Second Circle - Lighter Gray (#484848) with 50% Opacity */}
              <div className="absolute w-48 h-48 bg-[#484848] opacity-30 rounded-full bottom-30 right-30"></div>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-4xl lg:text-5xl xl:text-6xl font-mono uppercase text-primary text-start">
              kapcsolat
            </h2>

            <div className="mt-6 sm:mt-10 lg:mt-20">
              <p className="text-sm sm:text-base mb-4 text-white">
                Kérdésed van? <br /> Hívj minket bizalommal az alábbi számon,
                vagy töltsd ki és küldd el az ajánlatkérő űrlapot, és kollégánk
                rövidesen kapcsolatba lép veled.
              </p>

              <p className="text-sm sm:text-base text-white mb-4 lg:mb-0">
                Kérlek, írd meg ha sürgős dokumentáció készítésről van szó, mert
                akkor prioritásba veszünk, hogy elkészülhessen az anyag a kívánt
                határidővel.
              </p>
            </div>
          </div>

          <div className="flex flex-col z-10 gap-10 text-primary mt-6 sm:mt-10 lg:mt-0 text-sm sm:text-base font-semibold">
            <div className="flex flex-row items-center gap-5 ">
              <Phone className="w-8 h-8" />
              <a href="tel:+36302483007" className="hover:underline ">
                +36 30 248 3007
              </a>
            </div>

            <div className="flex flex-row items-center gap-5">
              <Mail className="w-8 h-8 " />
              <a href="mailto:info@sattva.hu" className="hover:underline">
                info@sattva.hu
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-row gap-10 mt-6 sm:mt-10 lg:mt-0 z-10">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-primary"
            >
              <FaFacebookF className="w-5 h-5 text-dark" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-primary"
            >
              <FaInstagram className="w-5 h-5 text-dark" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-primary"
            >
              <FaLinkedinIn className="w-5 h-5 text-dark" />
            </a>
          </div>
        </div>

        {/* Image */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
