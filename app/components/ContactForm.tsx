"use client";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Check } from "lucide-react";

export default function ContactForm() {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    "HACCP",
    "Kockázatértékelés",
    "Tűzvédelem",
    "Munkavédelem",
    "Audit",
    "Oktatás",
  ];

  return (
    <div className="flex-[1.4] flex items-center">
      <div className="w-full h-full select-none">
        <div className="relative w-full md:h-[900px] flex items-center justify-center">
          <form className="p-8 rounded-lg w-full  h-full">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="w-full">
                <label className="block text-lg font-medium">Vezeték név</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-black focus:outline-none py-2"
                />
              </div>
              <div className="w-full">
                <label className="block text-lg font-medium">Keresztnév</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-black focus:outline-none py-2"
                />
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-20">
              <div className="w-full">
                <label className="block text-lg font-medium">Email</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-black focus:outline-none py-2"
                />
              </div>
              <div className="w-full">
                <label className="block text-lg font-medium">Telefonszám</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-black focus:outline-none py-2"
                />
              </div>
            </div>

            {/* Radio Buttons */}
            <div className="mt-20">
              <label className="block text-lg font-medium mb-2">Tárgy?</label>
              <div className="flex flex-wrap gap-4">
                {options.map((item) => (
                  <label
                    key={item}
                    className="flex items-center space-x-2 cursor-pointer w-full sm:w-auto"
                  >
                    <input
                      type="radio"
                      name="subject"
                      value={item}
                      className="hidden"
                      onChange={() => setSelected(item)}
                    />
                    <div
                      className={`w-6 h-6 flex items-center justify-center rounded-full border ${
                        selected === item
                          ? "bg-black border-black"
                          : "border-gray-400"
                      }`}
                    >
                      {selected === item && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span className="text-lg">{item}</span>
                  </label>
                ))}
              </div>
            </div>
            {/* Message Field */}
            <div className="mt-20 w-full">
              <label className="block text-lg font-medium">
                Üzenet / Rendelés
              </label>
              <textarea
                placeholder="Írd ide az üzeneted..."
                className="w-full bg-transparent border-b border-black focus:outline-none py-2 resize-none"
                rows="1"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-10 sm:mt-20 flex justify-start">
              <button className="bg-[#D4A647] text-white px-6 py-3 flex items-center gap-2 rounded-full hover:bg-[#C4973B] transition">
                Küldés <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
