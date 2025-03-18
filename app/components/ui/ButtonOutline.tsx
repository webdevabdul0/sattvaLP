import React from "react";
import { ArrowUpRight } from "lucide-react";

const Button = ({ text }: { text: string }) => {
  return (
    <div>
      <button className="px-3 sm:px-6 py-3 rounded-full border border-primary flex flex-row gap-2 items-center justify-center  text-sm sm:text-base font-semibold hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
        {text}
        <ArrowUpRight className="h-3 w-3  sm:w-6 sm:h-6 " />
      </button>
    </div>
  );
};

export default Button;
