import React from "react";
import Image from "next/image";
import SatvaLogo from "../../public/images/logo-sattva.png";
import QoodoLogo from "../../public/images/logo-qoodo.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-dark pt-10 pb-5 relative flex justify-center items-center overflow-hidden text-center lg:text-start">
      <div className="absolute w-[1000px] h-[1000px] bg-[#F6D685] rounded-full blur-[300px] opacity-10 -left-100 -bottom-20" />
      <div className="absolute w-[200px] h-[200px] bg-[#F6D685] rounded-full blur-[80px] opacity-40 " />
      <div className="absolute w-[1000px] h-[1000px] bg-[#F6D685] rounded-full blur-[300px] opacity-10  -right-100 -top-100" />

      <div className="max-w-screen-2xl px-8 2xl:px-4 flex flex-col w-full">
        <div className="w-full flex flex-col  items-center lg:items-start">
          <h3 className=" text-3xl xl:text-5xl font-semibold text-white mb-4">
            Biztonság és szakértelem
          </h3>

          <h3 className="text-3xl xl:text-5xl font-semibold text-primary mb-4">
            kompromisszumok nélkül.
          </h3>
        </div>

        <div className="w-full mt-0 lg:mt-20 grid  grid-cols-1 lg:grid-cols-3 pb-10 border-b-2 border-b-primary z-10">
          <div className="flex flex-col items-center lg:items-start my-10 lg:my-0">
            <h5 className="text-lg text-primary font-semibold">
              Szolgáltatások
            </h5>

            <ul className="text-base text-white  mt-5 flex flex-col items-center lg:items-start">
              <li className="mb-2">
                <a href="#HACCP">HACCP</a>
              </li>
              <li className="mb-2">
                <a href="#Kockázatértékelés">Kockázatértékelés</a>
              </li>
              <li className="mb-2">
                <a href="#Munka-es-tuzvedelem">Munka és tűzvédelem</a>
              </li>
              <li className="mb-2">
                <a href="#Audit">Audit</a>
              </li>
              <li className="mb-2">
                <a href="#Oktatas">Oktatás</a>
              </li>
              <li className="text-primary">Adatvédelmi Irányelvek</li>
            </ul>
          </div>

          <div className="flex justify-center items-center">
            <Image src={SatvaLogo} alt="LOGO" />
          </div>

          <div className="flex flex-col items-center my-10 lg:my-0 lg:items-end">
            <div className="flex flex-col items-center lg:items-start">
              <h5 className="text-lg text-primary font-semibold">Kapcsolat</h5>

              <ul className="text-base text-white  mt-5">
                <li className="mb-2">
                  <a href="tel:+36302483007" className="hover:underline ">
                    +36 30 248 3007
                  </a>
                </li>
                <li className="mb-2">
                  <a href="mailto:info@sattva.hu" className="hover:underline">
                    info@sattva.hu
                  </a>
                </li>
              </ul>

              <h5 className="text-lg text-primary font-semibold mt-5">
                Ajánlott alkalmazás
              </h5>

              <Image src={QoodoLogo} alt="LOGO" className="w-[160px] mt-5" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 lg:flex-row  justify-between mt-5 z-10">
          <p className="text-white/70 text-base">
            Copyright © Sattva Guidance Kft. 2025, All Rights Reserved
          </p>

          <div className="flex space-x-3">
            <a
              href="#"
              className="p-2 flex items-center justify-center bg-primary rounded-md"
            >
              <FaFacebookF className="w-4 h-4 text-dark" />
            </a>
            <a
              href="#"
              className="p-2 flex items-center justify-center bg-primary rounded-md"
            >
              <FaTwitter className="w-4 h-4 text-dark" />
            </a>
            <a
              href="#"
              className="p-2 flex items-center justify-center bg-primary rounded-md"
            >
              <FaInstagram className="w-4 h-4 text-dark" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
