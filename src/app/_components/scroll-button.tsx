import React from "react";
import { FaChevronDown } from "react-icons/fa";

type ScrollButtonProps = {
  scrollViewName: string;
};

export const ScrollButton: React.FC<ScrollButtonProps> = ({
  scrollViewName,
}) => {
  const scrollToView = (viewName: string) => () => {
    const element = document.getElementById(viewName);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full mt-4 mb-16 flex flex-col items-center z-[10]">
      <button
        type="button"
        aria-label={`Scroll to ${scrollViewName}`}
        className="p-3 rounded-full hover:bg-gray-900 transition-colors"
        onClick={scrollToView(scrollViewName)}
      >
        <FaChevronDown size={16} />
      </button>
    </div>
  );
};
