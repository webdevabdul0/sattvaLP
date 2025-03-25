"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link, Menu } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../public/images/logo-icon.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 pt-3 pb-2 flex items-center justify-center bg-dark/30 backdrop-blur-3xl">
      <div className="max-w-screen-2xl flex justify-between items-center w-full">
        <div className="flex items-center">
          <a href="/">
            <Image
              src={logo}
              alt="Sattva Logo"
              width={70}
              height={30}
              className="cursor-pointer"
            />
          </a>
        </div>

        {/* Navigation Links (Desktop Only) */}
        <nav className="hidden md:flex space-x-8 text-white text-base font-normal uppercase">
          <a href="/#kezdolap" className="hover:text-primary">
            ◇ Kezdőlap
          </a>
          <a href="/#haccp" className="hover:text-primary">
            HACCP
          </a>
          <a href="/#kockazatertekeles" className="hover:text-primary">
            Kockázatértékelés
          </a>
          <a href="/#tuzvedelem" className="hover:text-primary">
            Tűzvédelem
          </a>
          <a href="/#audit" className="hover:text-primary">
            Audit
          </a>
          <a href="/#oktatas" className="hover:text-primary">
            Oktatás
          </a>
          <a href="/#kapcsolat" className="hover:text-primary">
            Kapcsolat
          </a>
        </nav>

        {/* Menus Section */}
        <div className="flex items-center gap-4">
          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <Menu
              className="w-6 h-6 text-white cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
            />
          </div>

          {/* Desktop Menu Button (Dropdown) */}
          <div className="relative hidden md:block">
            <Menu
              className="w-6 h-6 text-white cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 py-6 w-56 bg-dark/80 backdrop-blur-lg rounded-2xl shadow-lg p-5 uppercase"
              >
                {/* Close Button */}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="absolute top-3 left-3 text-primary text-xl font-bold"
                >
                  ✕
                </button>

                {/* Links */}
                <div className="mt-8 space-y-4">
                  <a
                    href="/#jogszabalyok"
                    className="block text-white hover:text-primary"
                  >
                    ◇ Jogszabályok
                  </a>
                  <a
                    href="/#filozofia"
                    className="block text-white hover:text-primary"
                  >
                    Sattva Filozófia
                  </a>
                  <a
                    href="/#ajanlott-app"
                    className="block text-white hover:text-primary"
                  >
                    Ajánlatkérés
                  </a>
                  <a
                    href="/#kapcsolat"
                    className="block text-white hover:text-primary"
                  >
                    Kapcsolat
                  </a>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-600 my-4"></div>

                {/* Social Icons */}
                <div className="flex justify-center space-x-3">
                  <a
                    href="/#"
                    className="p-2 bg-primary rounded-full flex items-center justify-center"
                  >
                    <FaFacebookF className="w-3.5 h-3.5 text-dark" />
                  </a>
                  <a
                    href="/#"
                    className="p-2 bg-primary rounded-full flex items-center justify-center"
                  >
                    <FaTwitter className="w-3.5 h-3.5 text-dark" />
                  </a>
                  <a
                    href="/#"
                    className="p-2 bg-primary rounded-full flex items-center justify-center"
                  >
                    <FaInstagram className="w-3.5 h-3.5 text-dark" />
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed w-screen h-screen inset-0 bg-dark/90 backdrop-blur-2xl flex flex-col items-center justify-center text-white z-50"
        >
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 left-6 text-primary text-3xl font-bold"
          >
            ✕
          </button>

          {/* Mobile Links */}
          <nav className="text-center space-y-6 text-lg uppercase">
            <a
              href="/#kezdolap"
              className="block hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              ◇ Kezdőlap
            </a>
            <a
              href="/#haccp"
              className="block hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              HACCP
            </a>
            <a
              href="/#kockazatertekeles"
              className="block hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kockázatértékelés
            </a>
            <a
              href="/#tuzvedelem"
              className="block hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tűzvédelem
            </a>
            <a
              href="/#audit"
              className="block hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Audit
            </a>
            <a
              href="/#oktatas"
              className="block hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Oktatás
            </a>

            <a
              href="/#jogszabalyok"
              className="block  hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Jogszabályok
            </a>
            <a
              href="/#filozofia"
              className="block  hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sattva Filozófia
            </a>
            <a
              href="/#kapcsolat"
              className="block hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kapcsolat
            </a>
          </nav>

          {/* Social Icons */}
          <div className="mt-8 flex space-x-4">
            <a
              href="https://web.facebook.com/sattva.guidance/?_rdc=1&_rdr/#"
              className="p-3 bg-primary rounded-full flex items-center justify-center"
            >
              <FaFacebookF className="w-4 h-4 text-dark" />
            </a>
            <a
              href="/#"
              className="p-3 bg-primary rounded-full flex items-center justify-center"
            >
              <FaTwitter className="w-4 h-4 text-dark" />
            </a>
            <a
              href="/#"
              className="p-3 bg-primary rounded-full flex items-center justify-center"
            >
              <FaInstagram className="w-4 h-4 text-dark" />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
