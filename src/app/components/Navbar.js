import { useState, useEffect } from "react";
import Image from "next/image";
import MenuPage from "./MenuPage";
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (menuOpen) {
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
    } else {
      html.style.overflow = '';
      body.style.overflow = '';
    }

    return () => {
      html.style.overflow = '';
      body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavigation = (path) => {
    router.push(path);
  };

  const handleLogoClick = () => {
    if (window.location.pathname === '/') {
      // Already on home page — just smooth scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Not on home — navigate to home
      router.push('/');
    }
  };

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 z-[9999] flex items-center justify-between px-4 py-2 h-16 sm:h-20">

        {/* Logo */}
        <div
          onClick={() => { handleLogoClick(); setMenuOpen(false); }}
          className="flex items-center cursor-pointer transition-colors duration-300 hover:text-blue-500"
        >
          <Image
            src="/Animal_logo.svg"
            alt="Mink EV Logo"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-110 invert"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <div
            onClick={() => handleNavigation('/product')}
            className="cursor-pointer text-white text-lg transition-colors duration-300 hover:text-blue-500"
            style={{
              textShadow: '0px 4px 10px rgba(0,0,0,0.9)',
            }}
          >
            Products
          </div>
          <div
            onClick={() => handleNavigation('/about-us')}
            className="cursor-pointer text-white text-lg transition-colors duration-300 hover:text-blue-500"
            style={{
              textShadow: '0px 4px 10px rgba(0,0,0,0.9)',
            }}
          >
            About Us
          </div>
        </div>

        {/* Menu Toggle (Mobile) */}
        {/* Menu Toggle (Mobile) */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-110">
            {menuOpen ? (
              // Close (X icon)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Menu (Equal icon)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 10h12M6 14h12" />
              </svg>
            )}
          </div>
        </div>


      </div>

      {/* Menu Modal (Mobile) */}
      {menuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black bg-opacity-90 pt-20 sm:pt-24">
          <div className="w-full">
            <MenuPage onClose={() => setMenuOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
