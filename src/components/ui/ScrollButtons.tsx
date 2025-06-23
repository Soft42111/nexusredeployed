import { useEffect, useState } from "react";

const ScrollButtons: React.FC = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <button
      onClick={isTop ? scrollToBottom : scrollToTop}
      className={`fixed bottom-6 right-6 z-50 px-4 py-2 rounded-full shadow-lg transition-all duration-300
        ${isTop
          ? "bg-purple-600 text-white hover:bg-purple-700"
          : "bg-white text-purple-700 border border-purple-500 hover:bg-purple-100"}
      `}
    >
      {isTop ? "↓" : "↑"}
    </button>
  );
};

export default ScrollButtons;
// This component combines both scroll-to-top and scroll-to-bottom functionality