import React from "react";
import Image from "next/image";
import Image8 from "../../public/images/Images/Image8.png";
import logo from "../../public/images/logo-qoodo.png";

import ButtonOutline from "./ui/ButtonOutline";
import Button from "./ui/Button";
const RecommendedApp = () => {
  const points1 = [
    "Automatikus naprakészség: Folyamatosan frissíti a jogszabályokat, így mindig biztos lehetsz benne, hogy vállalkozásod megfelel a legújabb előírásoknak.",
    "Felhasználóbarát felület: Könnyen kezelhető, intuitív design, amely megkönnyíti a napi adminisztratív feladatok elvégzését.",
    "Idő- és költségmegtakarítás: Automatizált folyamatokkal csökkenti az adminisztratív terheket, lehetővé téve, hogy több időt fordíts a vállalkozásod fejlesztésére.",
  ];
  const points2 = [
    "Dokumentációk kezelése: Segít a szükséges dokumentumok, mint például a HACCP kézikönyv, naplók és jelentések kezelésében, biztosítva azok könnyű hozzáférhetőségét és naprakészségét.",
    "Auditok és ellenőrzések: Egyszerűsíti az auditok és ellenőrzések lebonyolítását, nyomon követését, és segít a szükséges intézkedések dokumentálásában.",
    "Képzések és oktatások: Elérhetőek a szükséges oktatási anyagok és tesztek, amelyek segítenek a munkavállalók képzésében és a tudatosság növelésében.",
  ];

  return (
    <div className="py-8 md:py-12 relative bg-dark text-white border-b-2 border-b-primary">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-center">
        <div className="max-w-screen-2xl flex flex-col md:flex-row justify-between w-full mb-6">
          <Image
            src={logo}
            alt="Image"
            className="w-[150px] md:w-[300px] mb-5 md:mb-0"
          />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-mono uppercase text-primary text-center">
            Ajánlott alkalmazás
          </h2>
        </div>

        <div className="w-full border-t-2 border-t-primary flex flex-col items-center justify-center px-3 sm:px-8 relative">
          <div className="flex items-center justify-center">
            {/* Background Image */}

            <div className="max-w-screen-2xl flex flex-col lg:flex-row justify-between items-stretch gap-x-16">
              {/* Image */}
              <div className="flex-1 flex items-center mt-8 md:mt-0 lg:pr-8 pt-8 pb-8">
                <div className="w-full h-full select-none">
                  <div className="relative w-[130%] h-60 sm:h-80 md:h-[400px] lg:h-[500px] left-[-20%]">
                    <div className="w-full h-full hidden sm:flex"></div>
                    <Image
                      src={Image8}
                      alt="Image"
                      className="sm:absolute top-0 left-0 w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Left Side Content */}
              <div className="flex-1 pt-8 sm:pt-12 pb-8">
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-primary mb-3">
                  Ismerd meg a Qoodo alkalmazást: a minőségirányítás új eszköze!
                </h3>

                <p className="text-sm sm:text-base font-normal mb-3">
                  A Qoodo egy innovatív alkalmazás, amely megkönnyíti a HACCP
                  rendszerek kezelését és a minőségirányítási folyamatokat.
                  Segít a napi feladatok, auditok, ellenőrzések és dokumentációk
                  egyszerűsítésében, biztosítva, hogy vállalkozásod mindig a
                  legfrissebb jogszabályoknak megfelelően működjön.
                </p>

                <p className="text-sm sm:text-base font-semibold mb-3">
                  Miért válaszd a Qoodot?
                </p>

                <ul className="space-y-2 list-none mb-4">
                  {points1.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-white rounded-full block shrink-0 mt-2"></span>
                      <p className="text-sm sm:text-base font-normal">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>

                <p className="text-sm sm:text-base font-semibold mb-3">
                  Hogyan segíthet a Qoodo a minőségirányításban?
                </p>

                <ul className="space-y-2 list-none mb-6">
                  {points2.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-white rounded-full block shrink-0 mt-2"></span>
                      <p className="text-sm sm:text-base font-normal">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                  <Button text="Kérj ingyenes konzultációt!" href="#kapcsolat" />
                  <ButtonOutline text="Próbáld ki az alkalmazást!" href="https://qoodo.com" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedApp;
