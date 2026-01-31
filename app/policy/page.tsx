import React from "react";
import ButtonOutline from "../components/ui/ButtonOutline";
import Background from "../../public/images/Images/Background3.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PhoneCall } from "lucide-react";
const page = () => {
  const laws = [
    {
      title: "Hazai Törvények",
      points: [
        "2008. évi XLVI. törvény az élelmiszerláncról és hatósági felügyeletéről",
        "2005. évi CLXIV. törvény a kereskedelemről",
        "2009. évi LXXVI. törvény a szolgáltatási tevékenység megkezdésének és folytatásának általános szabályairól",
        "1993. évi X. törvény a termékfelelősségről",
        "1997. évi CLIV. törvény az egészségügyről",
        "2011. évi LXXXI. törvény az egyes egészségügyi tárgyú törvények módosításáról",
        "1991. évi XI. törvény az egészségügyi hatósági és igazgatási tevékenységről",
        "1997. évi LXXVIII. törvény az épített környezet alakításáról és védelméről",
        "1999. évi XLII. törvény a nemdohányzók védelméről és a dohánytermékek fogyasztásának, forgalmazásának egyes szabályairól",
        "1996. évi LV. törvény a vad védelméről, a vadgazdálkodásról, valamint a vadászatról",
        "1997. évi XI. törvény a védjegyek és a földrajzi árujelzők oltalmáról",
        "2016. évi CL. törvény az általános közigazgatási rendtartásról",
      ],
    },

    {
      title: "Kormányrendeletek",
      points: [
        "210/2009. (IX. 29.) Korm. rendelet a kereskedelmi tevékenységek végzésének feltételeiről",
        "201/2001. (X. 25.) Korm. rendelet az ivóvíz minőségi követelményeiről és az ellenőrzés rendjéről",
        "55/2009. (III. 13.) Korm. rendelet a vásárokról és a piacokról",
        "253/1997. (XII. 20.) Korm. rendelet az országos településrendezési és építési követelményekről",
        "259/2002. (XII. 18.) Korm. rendelet a gyermekjóléti és gyermekvédelmi szolgáltató tevékenység engedélyezéséről, valamint a gyermekjóléti és gyermekvédelmi vállalkozói engedélyről",
        "94/2002. (V. 5.) Korm. rendelet a csomagolásról és a csomagolási hulladék kezelésének részletes szabályairól",
        "343/2006. (XII. 23.) Korm. rendelet az építésügyi és az építésfelügyeleti hatóságok kijelöléséről és működési feltételeiről",
        "194/2008. (VII. 31.) Korm. rendelet az élelmiszerlánc felügyeletével összefüggő bírságok kiszámításának módjáról és mértékéről",
        "193/2009. (IX. 15.) Korm. rendelet az építésügyi hatósági eljárásokról és az építésügyi hatósági ellenőrzésről",
        "158/2009. (VII. 30.) Korm. rendelet a mezőgazdasági termékek és az élelmiszerek, valamint a szeszes italok földrajzi árujelzőinek oltalmára irányuló eljárásról és a termékek ellenőrzéséről",
        "239/2009. (X. 20.) Korm. rendelet a szálláshely-szolgáltatási tevékenység folytatásának részletes feltételeiről és a szálláshely-üzemeltetési engedély kiadásának rendjéről",
      ],
    },

    {
      title: "Miniszteri rendeletek",
      points: [
        "41/1997. (V. 28.) FM rendelet az Állat-egészségügyi Szabályzat kiadásáról",
        "46/1999. (V. 19.) FVM rendelet az egyes állat-egészségügyi igazgatási szolgáltatások díjáról",
        "81/2002. (IX. 4.) FVM rendelet a zoonózisok elleni védekezés állat-egészségügyi feladatairól",
        "71/2003. (VI. 27.) FVM rendelet az állati hulladékok kezelésének és a hasznosításukkal készült termékek forgalomba hozatalának állat-egészségügyi szabályairól",
        "57/2004. (IV. 24.) FVM rendelet a Magyar Élelmiszerkönyv nemzeti termékleírásokat tartalmazó kötelező előírásairól",
        "79/2004. (V. 4.) FVM rendelet a vad védelméről, a vadgazdálkodásról, valamint a vadászatról szóló 1996. évi LV. törvény végrehajtásának szabályairól",
        "67/2011. (VII. 13.) VM rendelet az élelmiszerek ionizáló sugárzással való kezelésének szabályairól",
        "19/2005. (III. 22.) FVM rendelet az emberi fogyasztásra szánt állati eredetű termékek előállítására, feldolgozására, forgalmazására és behozatalára vonatkozó állat-egészségügyi követelmények megállapításáról",
        "66/2006. (IX. 15.) FVM rendelet az állati eredetű élelmiszerekre vonatkozó egyes élelmiszer-higiéniai szabályokról",
        "15/2008. (II. 15.) FVM rendelet a hagyományos különleges terméknek minősülő mezőgazdasági termékek és élelmiszerek elismerésének és ellenőrzésének rendjéről",
        "152/2009. (XI. 12.) FVM rendelet a Magyar Élelmiszerkönyv kötelező előírásairól",
        "180/2009. (XII. 29.) FVM rendelet a szalmonellózis elleni védekezés egyes szabályairól",
        "179/2009. (XII. 29.) FVM rendelet a fertőző szivacsos agyvelőbántalmak megelőzéséről, az ellenük való védekezésről, illetve leküzdésükről",
        "3/2010. (VII. 5.) VM rendelet az élelmiszer-előállítással és -forgalmazással kapcsolatos adatszolgáltatásról és nyomon követhetőségről",
        "52/2010. (IV. 30.) FVM rendelet a kistermelői élelmiszer-termelés, -előállítás és -értékesítés feltételeiről",
        "57/2010. (V. 7.) FVM rendelet az élelmiszerek forgalomba hozatalának, valamint előállításának engedélyezéséről, illetve bejelentéséről",
        "43/2011. (V. 26.) VM rendelet az elejtett vad kezelésének és értékesítésének élelmiszer-higiéniai feltételeiről",
        "47/2011. (V. 31.) VM rendelet az élelmiszer-vállalkozás működéséhez szükséges szakképesítés meghatározásáról",
        "1/1996. (I. 9.) FM-NM-IKM együttes rendelet az élelmiszerekről szóló 1995. évi XC. törvény végrehajtásáról",
        "19/2004. (II. 26.) FVM-ESZCSM-GKM együttes rendelet az élelmiszerek jelöléséről",
        "68/2007. (VII. 26.) FVM-EüM-SZMM rendelet az élelmiszer-előállítás és forgalomba hozatal egyes élelmiszer-higiéniai feltételeiről és az élelmiszerek hatósági ellenőrzéséről",
        "62/2011. (VI. 30.) VM rendelet a vendéglátó-ipari termékek előállításának és forgalomba hozatalának élelmiszerbiztonsági feltételeiről",
        "38/2003. (VII. 7.) ESzCsM-FVM-KvVM együttes rendelet a biocid termékek előállításának és forgalomba hozatalának feltételeiről",
        "33/2010. (V. 13.) EüM-FVM együttes rendelet az élelmiszerekkel kapcsolatos tápanyag-összetételre és egészségre vonatkozó állításokkal kapcsolatos egyes szabályokról",
        "16/2008. (VIII. 30.) NFGM rendelet a gépek biztonsági követelményeiről és megfelelőségének tanúsításáról",
        "21/2010. (V. 14.) NFGM rendelet az egyes ipari és kereskedelmi tevékenységek gyakorlásához szükséges képesítésekről",
        "18/1998. (VI. 3.) NM rendelet a fertőző betegségek és a járványok megelőzése érdekében szükséges járványügyi intézkedésekről",
        "33/1998. (VI. 24.) NM rendelet a munkaköri, szakmai, illetve személyi higiénés alkalmasság orvosi vizsgálatáról és véleményezéséről",
        "17/1999. (VI. 16.) EüM rendelet az élelmiszerek vegyi szennyezettségének megengedhető mértékéről",
        "4/1998. (XI. 11.) EüM rendelet az élelmiszerekben előforduló mikrobiológiai szennyeződések megengedhető mértékéről",
        "62/2003. (X. 27.) ESZCSM rendelet az élelmiszer-eredetű megbetegedések esetén követendő eljárásról",
        "36/2004. (IV. 26.) ESZCSM rendelet a különleges táplálkozási célú élelmiszerekről",
        "27/2004. (IV. 24.) ESZCSM rendelet a testtömegcsökkentés céljára szolgáló, csökkentett energiatartalmú étrendben felhasználásra szánt élelmiszerekről",
        "37/2004. (IV. 26.) ESZCSM rendelet az étrend-kiegészítőkről",
        "2/2010. (I. 26.) EüM rendelet az egészségügyi kártevőirtó tevékenységről és az egészségügyi kártevőirtó tevékenység engedélyezésének részletes szabályairól",
        "37/2007. (XII. 13.) ÖTM rendelet az építésügyi hatósági eljárásokról, valamint a telekalakítási és az építészeti-műszaki dokumentációk tartalmáról",
        "107/2011. (XI. 10.) VM rendelet az étkezési célra forgalomba kerülő vadon termett gombák gyűjtéséről, feldolgozásáról, forgalomba hozataláról",
        "56/1997. (VIII. 14.) FM–IKIM–NM együttes rendelet az élelmiszerek megsemmisítésének feltételeiről és módjáról",
        "3/2002. (II. 8.) SZCSM–EüM együttes rendelet a munkahelyek munkavédelmi követelményeinek minimális szintjéről",
      ],
    },

    {
      title: "EK / EU rendeletek",
      points: [
        "Az Európai Parlament és a Tanács 178 / 2002 / EK rendelete az élelmiszerjog általános elveiről és követelményeiről, az Európai Élelmiszerbiztonsági Hatóság létrehozásáról és az élelmiszer-biztonságra vonatkozó eljárások megállapításáról",
        "Az Európai Parlament és a Tanács 852 / 2004 / EK rendelete az élelmiszerhigiéniáról",
        "Az Európai Parlament és a Tanács 853 / 2004 / EK rendelete az állati eredetű élelmiszerek különleges higiéniai szabályainak megállapításáról",
        "Az Európai Parlament és a Tanács 882 / 2004 / EK rendelete a takarmány- és élelmiszerjog, valamint az állat-egészségügyi és az állatok kíméletére vonatkozó szabályok követelményeinek történő megfelelés ellenőrzésének biztosítása céljából végzett hatósági ellenőrzésekről",
        "Az Európai Parlament és a Tanács 1935 / 2004 / EK rendelete (2004. október 27.) az élelmiszerekkel rendeltetésszerűen érintkezésbe kerülő anyagokról és tárgyakról, valamint a 80 / 590 / EGK és a 89 / 109 / EGK irányelv hatályon kívül helyezéséről",
        "A Bizottság 37 / 2005 / EK rendelete (2005. január 12.) az emberi fogyasztásra szánt gyorsfagyasztott élelmiszerek hőmérsékletének a szállítóeszközökben, raktárakban és tárolókban történő ellenőrzéséről",
        "A Bizottság 2073 / 2005 / EK rendelete az élelmiszerek mikrobiológiai kritériumairól",
        "Az Európai Parlament és a Tanács 1069 / 2009 / EK rendelete (2009. október 21.) a nem emberi fogyasztásra szánt állati melléktermékekre és a belőlük származó termékekre vonatkozó egészségügyi szabályok megállapításáról és az 1774 / 2002 / EK rendelet hatályon kívül helyezéséről (állati melléktermékekre vonatkozó rendelet) (2011. március 4-től kell alkalmazni)",
        "A Bizottság 10 / 2011 / EK rendelete (2011. január 14.) az élelmiszerekkel rendeltetésszerűen érintkezésbe kerülő műanyagokról és műanyag tárgyakról (2011. május 1-jétől lépett hatályba) Helyesbítés az élelmiszerekkel rendeltetésszerűen érintkezésbe kerülő műanyagokról és műanyag tárgyakról szóló, 2011. január 14-i 10 / 2011 / EK bizottsági rendelethez",
        "A Bizottság 142 / 2011 / EU rendelete (2011. február 25.) a nem emberi fogyasztásra szánt állati melléktermékekre és a belőlük származó termékekre vonatkozó egészségügyi szabályok megállapításáról szóló 1069 / 2009 / EK európai parlamenti és tanácsi rendelet végrehajtásáról, valamint a 97 / 78 / EK tanácsi irányelvnek az egyes minták és tételek határon történő állat-egészségügyi ellenőrzése alóli, az irányelv szerinti mentesítése tekintetében történő végrehajtásáról (2011. március 4-től kell alkalmazni)",
      ],
    },
  ];

  return (
    <div className="relative">
      <div className="fixed top-0 z-50 w-full">
        <Header />
      </div>

      <div className="pt-30 md:pt-40 relative pb-40">
        <div className="mx-auto px-3 sm:px-8 lg:px-12 flex flex-col justify-center items-center">
          <div className="max-w-screen-2xl flex flex-row justify-start  w-full sm:mb-8">
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-mono uppercase bg-gradient-to-tr from-[#20201F] to-[#666666] text-transparent bg-clip-text text-center">
              jogszabályok
            </h2>
          </div>

          <div className="w-full  flex flex-col items-center justify-center sm:px-8 relative">
            {/* Background Image */}
            <div
              className="absolute bg-no-repeat bg-center  "
              style={{ backgroundImage: `url(${Background.src})` }}
            ></div>

            <div className="w-full max-w-screen-2xl flex flex-col">
              {/* Left Side Content */}

              <h3 className="text-2xl lg:text-3xl xl:text-5xl font-semibold text-primary mb-4">
                A Haccp rendszerre vonatkozó jogszabályi háttér
              </h3>

              {laws.map((law, index) => (
                <div key={index} className="mb-10">
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-mono capitalize bg-gradient-to-tr from-[#20201F] to-[#666666] text-transparent bg-clip-text text-start my-10">
                    {law.title}
                  </h2>

                  <ul className="space-y-3 list-none mb-4">
                    {law.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <p className="text-base sm:text-lg ">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="flex items-center gap-4 mt-10 sm:mt-20">
                <ButtonOutline text="Vissza a kezdőlapra" href="/" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer">
        <Footer />
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <a href="tel:+36302483007">
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-primary shadow-lg">
            <PhoneCall className="w-6 h-6 text-black" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default page;
