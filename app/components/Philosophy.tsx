import React from "react";
import Image from "next/image";
import Image7 from "../../public/images/Images/Image7.jpg";
import Background from "../../public/images/Images/Background2.png";

import ButtonOutline from "./ui/ButtonOutline";
const Philosophy = () => {
  const points1 = [
    "Fizikai tisztaság („clean”): A környezetünk és munkaterületünk rendezettsége, biztonságossága.",
    "Tudati tisztaság („pure”): Az önkontroll, az értékek tisztelete és a hosszú távú gondolkodás.",
  ];

  const points2 = [
    "Fizikai tisztaság („clean”): A környezetünk és munkaterületünk rendezettsége, biztonságossága.",
    "Rajas (szenvedély, növekedés): A fejlődésre való törekvés, de kontroll nélkül.",
    "Sattva (tudatosság, fenntarthatóság): A tisztánlátás, szabálykövetés és hosszú távú siker alapja.",
  ];

  const points3 = [
    "Fogyasztói oldalról: Biztosítani kell a kiváló minőségű, biztonságos termékeket.",
    "Munkáltatói oldalról: Meg kell teremteni az egészséges és fenntartható munkakörnyezetet.",
    "Hatósági oldalról: A szabályok betartása és a minőség bizonyíthatósága elengedhetetlen.",
  ];

  return (
    <div className="py-8 md:py-12 relative">
      <div className="mx-auto px-3 sm:px-8 lg:px-12 flex flex-col justify-center items-center">
        <div className="max-w-screen-2xl flex flex-row justify-start w-full mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-mono uppercase bg-gradient-to-tr from-[#20201F] to-[#666666] text-transparent bg-clip-text text-center">
            Sattva filozófia
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
                  Tudatosság, Minőség és Fenntartható Siker
                </h3>

                <p className="text-sm sm:text-base font-normal mb-3">
                  Mindennapjainkban és munkánk során a tökéletességre törekszünk
                  – legyen szó higiéniai előírásokról, szabályok betartásáról
                  vagy tudatos működésről. A „Sattva" ezt az egyensúlyt
                  képviseli: a tisztaságot, a fenntarthatóságot és a folyamatos
                  fejlődést.
                </p>
                <p className="text-sm sm:text-base font-normal mb-3">
                  Az élet minősége szorosan összefügg a tisztasággal és a
                  tudatossággal, amely két szinten is megnyilvánul:
                </p>

                <ul className="space-y-2 list-none mb-4">
                  {points1.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-dark rounded-full block shrink-0 mt-2"></span>
                      <p className="text-sm sm:text-base font-normal">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>

                <p className="text-sm sm:text-base font-normal mb-3">
                  A szanszkrit filozófia három minőséget különböztet meg:
                </p>

                <ul className="space-y-2 list-none mb-4">
                  {points2.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-dark rounded-full block shrink-0 mt-2"></span>
                      <p className="text-sm sm:text-base font-normal">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>

                <p className="text-sm sm:text-base font-normal mb-3">
                  E filozófia a modern vállalkozások működésében is megjelenik:
                </p>

                <ul className="space-y-2 list-none mb-4">
                  {points3.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-dark rounded-full block shrink-0 mt-2"></span>
                      <p className="text-sm sm:text-base font-normal">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>

                <p className="text-sm sm:text-base font-normal mb-6">
                  A siker nem a véletlen műve, hanem egy tudatosan felépített
                  folyamat eredménye. A Sattva küldetése, hogy szakértelmével,
                  tanácsadásával és oktatásaival támogassa ügyfeleit ezen az
                  úton – segítve őket a fenntartható működés és a hosszú távú
                  eredmények elérésében.
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 flex items-center mt-8 lg:mt-0">
                <div className="w-full h-full select-none">
                  <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                    <Image
                      src={Image7}
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

export default Philosophy;
