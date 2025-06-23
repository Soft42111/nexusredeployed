import React from "react";

const ScrollToBottomButton: React.FC = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToBottom}
      className="fixed bottom-24 right-6 z-50 bg-violet-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-violet-700 transition"
    >
      ↓
    </button>
  );
};

export default ScrollToBottomButton;
