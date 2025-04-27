"use client";
import { useState } from "react";
import Link from 'next/link';
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa6';

export default function MenuPage({ onClose }) {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("LOADING");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormStatus("SUCCESS");
        e.target.reset();
      } else {
        setFormStatus("ERROR");
      }
    } catch (error) {
      console.error(error);
      setFormStatus("ERROR");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-white px-6 sm:px-10 py-16 overflow-hidden">
      {/* Main Content */}
      <main className="flex flex-col space-y-16">
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row justify-between w-full gap-20">
            {/* Left Section - Navigation */}
            <div className="space-y-14">
              <nav className="space-y-14">
                {/* Your Links (no changes) */}
                <div>
                  <Link href="/" className="group flex items-center text-4xl font-semibold" onClick={onClose}>
                    <span className="group-hover:text-lime-400 transition-colors">Home</span>
                  </Link>
                </div>
                <div>
                  <Link href="/product" className="group flex items-center text-4xl font-semibold mb-2" onClick={onClose}>
                    <span className="group-hover:text-lime-400 transition-colors">Product</span>
                  </Link>
                  <div className="ml-1 space-x-6 text-base text-gray-400">
                    <Link href="/product#features" onClick={onClose} className="hover:text-white transition-colors">Features</Link>
                    {/* <Link href="/product#faq" onClick={onClose} className="hover:text-white transition-colors">FAQ</Link> */}
                  </div>
                </div>
                <div>
                  <Link href="/about-us" className="group flex items-center text-4xl font-semibold mb-2" onClick={onClose}>
                    <span className="group-hover:text-lime-400 transition-colors">About us</span>
                  </Link>
                  <div className="ml-1 space-x-6 text-base text-gray-400">
                    <Link href="/about-us#team" onClick={onClose} className="hover:text-white transition-colors">Team</Link>
                    <Link href="/about-us#careers" onClick={onClose} className="hover:text-white transition-colors">Careers</Link>
                    {/* <Link href="/about-us#contact" onClick={onClose} className="hover:text-white transition-colors">Contact</Link> */}
                    <Link href="/about-us#vision" onClick={onClose} className="hover:text-white transition-colors">Vision</Link>
                    <Link href="/about-us#mission" onClick={onClose} className="hover:text-white transition-colors">Mission</Link>
                  </div>
                </div>
              </nav>
            </div>

            {/* Right Section - Socials + Newsletter */}
            <div className="w-full max-w-md space-y-10 lg:mt-auto lg:self-end">
              <div>
                <h3 className="text-base font-medium mb-3">Follow us on</h3>
                <div className="flex flex-wrap gap-4 text-white text-lg">
                  {[
                    { icon: <FaFacebook />, href: "https://www.facebook.com/profile.php?id=61566290847127" },
                    { icon: <FaXTwitter />, href: "https://x.com/MinkElectric" },
                    { icon: <FaInstagram />, href: "https://www.instagram.com/ev.mink/" },
                    { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/minkev/" },
                    { icon: <FaWhatsapp />, href: "" },
                    { icon: <FaYoutube />, href: "https://www.youtube.com/@MinkEV" },
                  ].map(({ icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-400 transition-colors duration-200"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter Form updated */}
              <form onSubmit={handleSubmit} className="flex items-center border-b border-gray-600 pb-1">
                <input type="hidden" name="access_key" value="9dd6aae1-452f-459f-8cd2-f6d595cc9558" />
                <input type="hidden" name="subject" value="New Newsletter Subscription" />

                <input
                  type="email"
                  name="email"
                  placeholder="Your e-mail address"
                  required
                  disabled={formStatus === "LOADING"}
                  className="bg-transparent outline-none w-full text-base placeholder-gray-400 disabled:opacity-50"
                />

                <button
                  type="submit"
                  disabled={formStatus === "LOADING"}
                  className="ml-2"
                >
                  {formStatus === "LOADING" ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      ></path>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 5L21 12M21 12L14 19M21 12H3"
                        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </form>

              {/* Feedback below form */}
              {formStatus === "SUCCESS" && (
                <p className="text-green-400 text-xs mt-2 text-center">✅ Thank you for subscribing!</p>
              )}
              {formStatus === "ERROR" && (
                <p className="text-red-400 text-xs mt-2 text-center">❌ Something went wrong. Please try again.</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
