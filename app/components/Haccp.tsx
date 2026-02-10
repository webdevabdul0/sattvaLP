import React from "react";
import Image from "next/image";
import Image1 from "../../public/images/Images/Image1.png";
import Background from "../../public/images/Images/Background1.png";

import ButtonOutline from "./ui/ButtonOutline";
const Haccp = () => {
  const points = [
    "Személyreszabott, professzionális HACCP* kézikönyv a területi hatósági ellenőrök igényeinek megfelelően,",
    "garanciális dokumentációkészítés,",
    "folyamatos support, segítségnyújtás és teljeskörű tanácsadás,",
    "revízió lehetőségek biztosítása,",
    "referenciáink,",
    "több mint 15 éves tapasztalat a vendéglátásban és a minőségbiztosítás területén.",
  ];

  return (
    <div className="py-8 md:py-12 relative">
      <div className="mx-auto px-3 sm:px-8 lg:px-12 flex flex-col justify-center items-center">
        <div className="max-w-screen-2xl flex flex-row justify-start w-full mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-mono uppercase bg-gradient-to-tr from-[#20201F] to-[#666666] text-transparent bg-clip-text text-center">
            haccp
          </h2>
        </div>

        <div className="w-full bg-black/10 flex flex-col items-center justify-center px-3 sm:px-8 relative">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center z-[-1]"
            style={{ backgroundImage: `url(${Background.src})` }}
          ></div>

          <div className="flex items-center justify-center">
            <div className="sm:max-w-screen-2xl flex flex-col lg:flex-row justify-between items-stretch gap-x-16">
              {/* Left Side Content */}
              <div className="sm:flex-1 pt-8 sm:pt-12">
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-mono mb-3">
                  Amiért minket válassz:
                </h3>

                <ul className="space-y-2 list-none mb-4">
                  {points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-dark rounded-full block shrink-0 mt-2"></span>
                      <p className="text-sm sm:text-base font-normal">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>

                <p className="text-sm sm:text-base font-normal mb-3">
                  A Haccp kézikönyvet egy alapos felmérés után szakembereink a kapott információk alapján az egységedre szabottan alakítják ki.
                </p>

                <p className="text-sm sm:text-base font-semibold mb-4">
                  * Ennek ára az egységtől függően 25.000 Ft-tól kezdődik.
                </p>

                <p className="text-sm sm:text-base font-normal mb-6">
                  Ha bármi kérdésed van hívj minket bizalommal, vagy töltsd ki és küldd el az ajánlatkérő űrlapot, és kollégánk rövidesen kapcsolatba lép veled.
                </p>

                <div className="flex items-center gap-4 mb-8">
                  <ButtonOutline text="Ajánlatot kérek" href="#kapcsolat" />
                  <ButtonOutline text="Hívlak a részletekért" href="tel:+36302483007" />
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 flex items-center mt-8 lg:mt-0">
                <div className="w-full h-full select-none">
                  <div className="relative w-full h-[300px] sm:h-[500px] lg:h-[600px]">
                    <Image
                      src={Image1}
                      alt="Image"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm font-normal my-6 md:my-8 max-w-screen-2xl">
            * A HACCP a veszélyelemzés és a kritikus szabályozási pontok rendszere, egy tudományosan megalapozott és módszeres rendszer, amely az élelmiszer biztonságáról való gondoskodás érdekében megállapítja a jellemző veszélyeket és kijelöli a szabályozásukra szolgáló intézkedéseket. Az általunk készített HACCP kézikönyv tartalmazza az Ön egységére vonatkozó összes kockázatot, szabályozást, technológiai leírást és cselekvési tervet a beszerzéstől a hulladékok kezeléséig kompletten. Egyéb információk: https://portal.nebih.gov.hu/-/vendeglatas-ghp
          </p>
        </div>
      </div>
    </div>
  );
};

export default Haccp;
