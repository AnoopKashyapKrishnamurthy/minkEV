'use client';
import React from "react";
import {
    FaFacebookF,
    FaXTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
    FaYoutube
} from "react-icons/fa6";

export default function Footer() {
    return (
        <div>
            <footer className="bg-[#000000] text-white pt-14 pb-6 px-6 md:px-20">
                <div className="grid md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src="/mink.png" alt="Main Logo" className="w-10 h-10" />
                        <img src="/mink-text.png" alt="Logo Text" className="h-10 ml-3" />
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold text-sm mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            {[
                                { label: 'Product', href: '/product' },
                                { label: 'About us', href: '/about-us' },
                                { label: 'Invest', href: '/invest' },
                                { label: 'Reserve', href: '/reserve' },
                            ].map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link.href}
                                        className="hover:text-lime-400 transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>

                    {/* Help Links */}
                    <div>
                        <h4 className="font-semibold text-sm mb-4">Help</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            {['Customer Support', 'Terms & Conditions', 'Privacy Policy'].map((item, i) => (
                                <li key={i}>
                                    <a
                                        href="#"
                                        className="hover:text-lime-400 transition-colors duration-200"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-semibold text-sm mb-4">Subscribe to Newsletter</h4>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="w-full p-2 rounded-l-md text-white bg-[#1c1c1c] placeholder-gray-400 focus:outline-none"
                            />
                            <button className="bg-lime-400 text-black font-medium px-4 rounded-r-md hover:bg-lime-500 transition-all duration-200">
                                Join
                            </button>
                        </div>
                        <div className="mt-5 text-sm text-gray-300">Follow us on</div>
                        <div className="flex space-x-4 mt-2 text-lg text-white">
                            {[FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube].map(
                                (Icon, i) => (
                                    <Icon
                                        key={i}
                                        className="cursor-pointer hover:text-lime-400 transition-colors duration-200"
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom copyright section */}
                {/* Full-width white copyright section */}



            </footer>
            <div className="w-screen bg-white text-center text-xs text-gray-500 py-4 border-t border-gray-300">
                © Copyright 2025, All Rights Reserved by MinkEV
            </div>
        </div>
    );
}
