import React from "react";
import Image from "next/image";
import Image3 from "../../public/images/Images/Image3.jpg";
import Background from "../../public/images/Images/Background2.png";

import ButtonOutline from "./ui/ButtonOutline";
const FireProtection = () => {
  const points = [
    "Tűzvédelmi szabályzat: 25.000 Ft-tól",
    "Kiürítésszámítás: 20.000 Ft-tól",
    "Tűzriadó terv: 5.000 Ft-tól",
    "Az érintésvédelmi jegyzőköny ára nagyban függ az egységben lévő mérési pontok számától, ezért erre külön árajánlatot tudunk adni.",
  ];

  return (
    <div className="py-8 md:py-12 relative">
      <div className="mx-auto px-3 sm:px-8 lg:px-12 flex flex-col justify-center items-center">
        <div className="max-w-screen-2xl flex flex-row justify-start w-full mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-mono uppercase bg-gradient-to-tr from-[#20201F] to-[#666666] text-transparent bg-clip-text text-center">
            tűzvédelem
          </h2>
        </div>

        <div className="w-full flex flex-col items-center justify-center sm:px-8 relative">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center z-[-1]"
            style={{ backgroundImage: `url(${Background.src})` }}
          ></div>

          <div className="flex items-center justify-center">
            <div className="max-w-screen-2xl flex flex-col lg:flex-row justify-between items-stretch gap-x-16">
              {/* Left Side Content */}
              <div className="flex-1 pt-8 sm:pt-12">
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-primary mb-3">
                  Teljes körű tűzvédelmi szolgáltatások egy helyen.
                </h3>

                <p className="text-sm sm:text-base font-normal mb-4">
                  A tűzvédelmi szabályzat elkészítéséhez szakembereinkkel
                  időpont egyeztetés után egy alapos helyszíni bejárást tartunk.
                  Az így felvett adatok alapján megírjuk a szabályzatot, amit
                  szükség szerint kiürítés számíttással és tűzriadó tervvel
                  látunk el. Az érintésvédelmi felülvizsgálat is mindig egy
                  helyszíni felméréshez van kötve.
                </p>

                <ul className="space-y-2 list-none mb-6">
                  {points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-dark rounded-full block shrink-0 mt-2"></span>
                      <p className="text-sm sm:text-base font-normal">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4 mb-8">
                  <ButtonOutline text="Megrendelem" href="#kapcsolat" />
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 flex items-center mt-8 lg:mt-0">
                <div className="w-full h-full select-none">
                  <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                    <Image
                      src={Image3}
                      alt="Image"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FireProtection;
