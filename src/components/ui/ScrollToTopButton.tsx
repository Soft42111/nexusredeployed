'use client';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 800);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 z-50 bg-purple-600 hover:bg-purple-700 text-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full p-3 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-md [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0"
    >
      <ArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
