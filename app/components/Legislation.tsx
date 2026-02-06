import React from "react";
import Image from "next/image";
import Image6 from "../../public/images/Images/Image6.jpg";
import Background from "../../public/images/Images/Background1.png";

import ButtonOutline from "./ui/ButtonOutline";
import Button from "./ui/Button";
const Legislation = () => {
  const points = [
    "Elkerülhetők a súlyos bírságok és hatósági szankciók",
    "Biztosított a munkavállalók és fogyasztók védelme",
    "Megőrizhető a vállalkozás hírneve és piaci stabilitása",
  ];

  return (
    <div className="py-8 md:py-12 relative bg-dark text-white border-b-2 border-b-primary">
      <div className="mx-auto px-3 sm:px-8 lg:px-12 flex flex-col justify-center items-center">
        <div className="max-w-screen-2xl flex flex-row justify-end w-full mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-mono uppercase text-primary text-center">
            jogszabályok
          </h2>
        </div>

        <div className="w-full border-t-2 border-t-primary flex flex-col items-center justify-center sm:px-8 relative">
          <div className="flex items-center justify-center">
            {/* Background Image */}

            <div className="max-w-screen-2xl flex flex-col lg:flex-row justify-between items-stretch gap-x-16">
              {/* Image */}
              <div className="flex-1 flex items-center mt-8 md:mt-0 lg:pr-8 lg:border-r-2 lg:border-r-primary pt-8 pb-8">
                <div className="w-full h-full select-none">
                  <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                    <Image
                      src={Image6}
                      alt="Image"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Left Side Content */}
              <div className="flex-1 pt-8 sm:pt-12 pb-8">
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-primary mb-3">
                  A Haccp rendszerre vonatkozó jogszabályi háttér
                </h3>

                <p className="text-sm sm:text-base font-normal mb-3">
                  Az élelmiszerbiztonsági, munkavédelmi és tűzvédelmi előírások
                  folyamatosan változnak, ezért elengedhetetlen a naprakész
                  tájékozódás. Itt megtalálod a legfontosabb jogszabályokat és
                  előírásokat, amelyek segítenek a megfelelőség biztosításában.
                </p>

                <p className="text-sm sm:text-base font-semibold mb-3">
                  Miért fontos a jogszabályi megfelelés?
                </p>

                <ul className="space-y-2 list-none mb-4">
                  {points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-white rounded-full block shrink-0 mt-2"></span>
                      <p className="text-sm sm:text-base font-normal">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>

                <p className="text-sm sm:text-base font-normal mb-6">
                  A legfrissebb és releváns jogszabályokat egy külön oldalon
                  gyűjtöttük össze, hogy könnyen elérhetőek és átláthatóak
                  legyenek.
                </p>

                <div className="flex items-center gap-4 mb-8">
                  <Button text="Elolvasom a jogszabályokat" href="/policy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legislation;
