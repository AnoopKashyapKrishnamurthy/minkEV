"use client";
import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import PrivacyPolicyContent from "../components/utils/PrivacyPolicyContent";


export default function Footer() {
  const [formStatus, setFormStatus] = useState("");
  const [modalContent, setModalContent] = useState(null); // null, "PRIVACY", "TERMS"

  const socialLinks = [
    { Icon: FaXTwitter, href: "https://x.com/MinkElectric" },
    { Icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61566290847127" },
    { Icon: FaInstagram, href: "https://www.instagram.com/ev.mink/" },
    { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/minkev/" },
    { Icon: FaWhatsapp, href: "" },
    { Icon: FaYoutube, href: "https://www.youtube.com/@MinkEV" },
  ];

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

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (modalContent) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [modalContent]);

  return (
    <div className="bg-gradient-to-tr from-black via-[#0a0a0a] to-[#0f0f0f] text-gray-300 text-sm relative">
      {/* Main Footer */}
      <footer className="pt-16 pb-8 px-6 md:px-20 border-b border-gray-800">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/mink_text.svg" alt="Mink EV Logo" className="h-10 invert" />
          </div>

          {/* Address and Email */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-400 text-xs mb-2 uppercase">Registered Address</h4>
              <p className="leading-relaxed">
                Stadt Electric Private Limited<br />
                No 73, Scarlet Begonias,<br />
                JP Nagar 3rd Phase,<br />
                Bengaluru - 560078
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-400 text-xs mb-2 uppercase">Email</h4>
              <p>contact@minkev.com</p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-gray-400 text-xs mb-4 uppercase">Company</h4>
            <ul className="space-y-2">
              {[{ label: "About Us", href: "/about-us" }, { label: "Product", href: "/product" }].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-lime-400 transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="font-semibold text-gray-400 text-xs mb-4 uppercase">Subscribe to Newsletter</h4>
            <p className="mb-4">Learn more about India's first urban compact mini car (MINK)</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="hidden" name="access_key" value="9dd6aae1-452f-459f-8cd2-f6d595cc9558" />

              <div className="flex w-full">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email*"
                  disabled={formStatus === "LOADING"}
                  className="flex-grow p-2 rounded-l bg-[#1c1c1c] placeholder-gray-400 focus:outline-none disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={formStatus === "LOADING"}
                  className="bg-white text-black px-4 py-2 text-sm rounded-r hover:bg-gray-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "LOADING" ? "Submitting..." : "Subscribe"}
                </button>
              </div>

              <div className="flex items-start gap-2 text-gray-500 text-xs">
                <input type="checkbox" id="captcha" required className="mt-1" disabled={formStatus === "LOADING"} />
                <label htmlFor="captcha">
                  By checking this box, you agree to receive communications from MINK EV. You may unsubscribe at any time.
                </label>
              </div>

              {formStatus === "SUCCESS" && (
                <p className="text-green-400 text-xs mt-2">✅ Thank you for subscribing!</p>
              )}
              {formStatus === "ERROR" && (
                <p className="text-red-400 text-xs mt-2">❌ Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </footer>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-4 gap-4">
        <div className="text-xs text-gray-500">
          © Copyright 2025, All Rights Reserved by MinkEV
        </div>

        <div className="flex gap-2 text-xs text-gray-500 justify-center">
          <button onClick={() => setModalContent("PRIVACY")} className="hover:text-gray-300 underline">Privacy Policy</button>
          <span>|</span>
          <button onClick={() => setModalContent("TERMS")} className="hover:text-gray-300 underline">Terms of Use</button>
        </div>

        <div className="flex items-center space-x-4 text-gray-400 text-lg">
          {socialLinks.map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              <Icon className="cursor-pointer" />
            </a>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="relative bg-[#1a1a1a] max-w-2xl w-full rounded-lg overflow-hidden">

            <button
              className="absolute top-4 right-4 text-white-400 hover:text-red-600 z-20 transition-all duration-200 pr-4"
              onClick={() => setModalContent(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8" // Bigger size, adjust as needed
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Scrollable Content Area */}
            <div className="max-h-[80vh] overflow-y-auto p-6 pt-14">
              {/* Added extra padding-top (pt-14) so text doesn't hide behind close button */}

              <h2 className="text-xl font-bold mb-4">
                {modalContent === "PRIVACY" ? "Mink EV" : "Mink EV"}
              </h2>

              <div className="space-y-4 text-sm leading-relaxed">
                {modalContent === "PRIVACY" ? (
                  <div
                    className="space-y-4 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: PrivacyPolicyContent }}
                  ></div>
                ) : (
                  <>
                    <p>By using our site, you agree to the following terms and conditions.</p>
                    <p>Content may not be reused without permission. All rights reserved.</p>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
