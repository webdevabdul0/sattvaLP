"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
}

const Button = ({ text, onClick, href }: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      // If href is an internal anchor (starts with #), scroll to it
      if (href.startsWith('#')) {
        document.getElementById(href.substring(1))?.scrollIntoView({ 
          behavior: 'smooth' 
        });
      } else {
        // Otherwise, navigate to the URL
        window.location.href = href;
      }
    }
  };

  return (
    <div>
      <button 
        onClick={handleClick}
        className="px-3 sm:px-6 py-3 rounded-full flex flex-row gap-2 items-center justify-center bg-primary text-white text-sm sm:text-base font-semibold hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
      >
        {text}
        <ArrowUpRight className="h-3 w-3  sm:w-6 sm:h-6 text-white" />
      </button>
    </div>
  );
};

export default Button;
