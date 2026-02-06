import React from "react";
import Image from "next/image";
import Image2 from "../../public/images/Images/Image2.jpg";
import Background from "../../public/images/Images/Background1.png";

import ButtonOutline from "./ui/ButtonOutline";
import Button from "./ui/Button";
const RiskAssessment = () => {
  const points = [
    "Munkahelyi kockázatértékelés: 20.000 Ft-tól",
    "Kémiai kockázatértékelés: 20.000 Ft-tól",
    "Egyéni védőeszközök juttatási rendje: 20.000 Ft-tól",
    "Orvosi vizsgálatok rendje: 20.000 Ft-tól (külön ajánlat)",
    "Munkavédelmi szabályzat: 20.000 Ft-tól",
  ];

  return (
    <div className="py-8 md:py-12 relative bg-dark text-white border-b-2 border-b-primary">
      <div className="mx-auto px-3 sm:px-8 lg:px-12 flex flex-col justify-center items-center">
        <div className="max-w-screen-2xl flex flex-row justify-end w-full mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-mono uppercase text-primary text-center">
            kockázatértékelés
          </h2>
        </div>

        <div className="w-full border-t-2 border-t-primary flex flex-col items-center justify-center sm:px-8 relative">
          <div className="flex items-center justify-center">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-no-repeat bg-cover bg-center z-[-1]"
              style={{ backgroundImage: `url(${Background.src})` }}
            ></div>

            <div className="max-w-screen-2xl flex flex-col lg:flex-row justify-between items-stretch gap-x-16">
              {/* Image */}
              <div className="flex-1 flex items-center mt-8 md:mt-0 sm:pr-8 lg:border-r-2 lg:border-r-primary pt-8 pb-8">
                <div className="w-full h-full select-none">
                  <Image
                    src={Image2}
                    width={300}
                    height={500}
                    className="w-full h-full object-cover"
                    alt="Image"
                  />
                </div>
              </div>

              {/* Left Side Content */}
              <div className="flex-1 pt-8 sm:pt-12 pb-8">
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-primary mb-3">
                  Minél gyorsabban azonosítod a kockázatokat, annál biztosabban
                  növekszel.
                </h3>

                <p className="text-sm sm:text-base font-normal mb-3">
                  A kockázatértékelésben a szakembereink minőségileg és
                  mennyiségileg értékelik a munkavállalók egészségét és
                  biztonságát veszélyeztető kockázatokat, különös tekintettel az
                  alkalmazott munkaeszközökre, veszélyes anyagokra és
                  keverékekre, a munkavállalókat érő terhelésekre, valamint a
                  munkahelyek kialakítására.
                </p>

                <p className="text-sm sm:text-base font-normal mb-3">
                  A kockázatértékelés során azonosítjuk a várható
                  veszélyeket (veszélyforrásokat, veszélyhelyzeteket), valamint
                  a veszélyeztetettek körét, felbecsüljük a veszély jellege
                  (baleset, egészségkárosodás) szerint a veszélyeztetettség
                  mértékét.
                </p>

                <p className="text-sm sm:text-base font-normal mb-3">
                  Tartalmi követelménye:
                </p>

                <ul className="space-y-2 list-none mb-6">
                  {points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-white rounded-full block shrink-0 mt-2"></span>
                      <p className="text-sm sm:text-base font-normal">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4 mb-8">
                  <Button text="Megrendelem" href="#kapcsolat" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAssessment;
