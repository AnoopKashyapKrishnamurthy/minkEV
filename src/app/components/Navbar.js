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

  return (
    <div className="relative bg-black text-white">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-[9999] flex items-center justify-between px-4 py-2 bg-transparent h-16 sm:h-20">
        {/* Logo */}
        <div onClick={() => { router.push('/'); setMenuOpen(false); }} className="flex items-center">
          <Image src="/Animal_logo.svg" alt="Mink EV Logo" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>

        {/* Menu Toggle */}
        <div className="cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <Image
            src={menuOpen ? "/HomeMenuClose.png" : "/HomeMenu.png"}
            alt="Menu Toggle"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
        </div>
      </div>

      {/* Menu Modal */}
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
