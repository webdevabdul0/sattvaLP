"use client";
import { ArrowRight } from "lucide-react";
import { useState, FormEvent } from "react";
import { Check } from "lucide-react";

export default function ContactForm() {
  const [selected, setSelected] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const options = [
    "HACCP",
    "Kockázatértékelés",
    "Tűzvédelem",
    "Munkavédelem",
    "Audit",
    "Oktatás",
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate that a subject is selected
    if (!selected) {
      setSubmitMessage({
        type: "error",
        text: "Kérlek válassz egy tárgyat!",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: selected,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage({
          type: "success",
          text: "Üzenet sikeresen elküldve! Hamarosan jelentkezünk.",
        });
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setSelected(null);
      } else {
        // Show detailed error message for debugging
        const errorText = data.debug 
          ? `${data.message}\n\nDebug: ${data.debug}` 
          : data.message || "Hiba történt az üzenet küldése során.";
        
        setSubmitMessage({
          type: "error",
          text: errorText,
        });
      }
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "Hiba történt az üzenet küldése során. Kérlek próbáld újra később.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex-[1.4] flex items-center">
      <div className="w-full h-full select-none">
        <div className="relative w-full md:h-[900px] flex items-center justify-center">
          <form onSubmit={handleSubmit} className="p-8 rounded-lg w-full h-full">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="w-full">
                <label className="block text-lg font-medium">Vezeték név</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-b border-black focus:outline-none py-2"
                />
              </div>
              <div className="w-full">
                <label className="block text-lg font-medium">Keresztnév</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
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
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-b border-black focus:outline-none py-2"
                />
              </div>
              <div className="w-full">
                <label className="block text-lg font-medium">Telefonszám</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
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
                      checked={selected === item}
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
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Írd ide az üzeneted..."
                className="w-full bg-transparent border-b border-black focus:outline-none py-2 resize-none"
                rows={1}
              />
            </div>

            {/* Submit Message */}
            {submitMessage && (
              <div
                className={`mt-6 p-4 rounded-lg ${
                  submitMessage.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {submitMessage.text}
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-10 sm:mt-20 flex justify-start">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#D4A647] text-white px-6 py-3 flex items-center gap-2 rounded-full hover:bg-[#C4973B] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Küldés..." : "Küldés"}{" "}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
