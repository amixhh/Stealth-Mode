"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FooterLinks = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 rounded-lg overflow-hidden">
                                     <Image
                       src="/legallyai-logo.png"
                       alt="Legally AI Logo"
                       width={40}
                       height={40}
                       className="w-full h-full object-cover"
                     />
              </div>
              <span className="text-xl font-bold">Legally AI</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-sm">
              Making legal help accessible to every Indian through AI-powered solutions.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Powered by</span>
              <Image
                src="/indianKanoon.png"
                alt="IndianKanoon"
                width={120}
                height={30}
                className="h-6 w-auto"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('why-legally-ai')} 
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/amishh"
                        target="_blank"
                        rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </a>
                  </li>
              </ul>
            </div>

          {/* Legal */}
                           <div>
                   <h3 className="font-semibold text-lg mb-4">Legal</h3>
                   <ul className="space-y-2">
                     <li>
                       <Link href="/terms" className="text-gray-400 hover:text-white transition-colors no-underline">
                Terms of Use
              </Link>
                     </li>
                     <li>
                       <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors no-underline">
                Privacy Policy
              </Link>
                     </li>
                     <li>
                        <Link href="/help" className="text-gray-400 hover:text-white transition-colors no-underline">
                          Help Center
                        </Link>
                      </li>
                   </ul>
              </div>
            </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Legally AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com/in/amishh"
                  target="_blank"
                  rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLinks;