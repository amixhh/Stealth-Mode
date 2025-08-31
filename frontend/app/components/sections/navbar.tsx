'use client';

import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F4]/60 backdrop-blur-2xl border-b border-gray-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-3 no-underline cursor-pointer"
            >
              <div className="h-12 w-12 rounded-lg overflow-hidden">
                                       <Image
                         src="/legallyai-logo.png"
                         alt="Legally AI Logo"
                         width={48}
                         height={48}
                         className="w-full h-full object-cover"
                       />
              </div>
              <span className="text-2xl font-bold text-gray-900">Legally AI</span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-black transition-colors cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-black transition-colors cursor-pointer"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('why-legally-ai')}
              className="text-gray-700 hover:text-black transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('footer')}
              className="text-gray-700 hover:text-black transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Authentication Buttons */}
          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton mode="modal" forceRedirectUrl="/chat">
                <button className="text-gray-700 hover:text-black transition-colors">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal" forceRedirectUrl="/chat">
                <button className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};
