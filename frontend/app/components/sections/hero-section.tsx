"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser, SignInButton, UserButton } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  const handleGetStarted = () => {
    if (isSignedIn) {
      router.push('/chat');
    }
    // If not signed in, the SignInButton will handle the flow
    // and redirect to /chat after sign in (as configured in .env.local)
  };

  return (
    <section className="bg-[#FAF7F4] text-gray-900">
      <div className="mt-16 w-full">
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pt-24 pb-16 text-center sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl">
          <h1 className="text-[56px] font-bold leading-[1.1]">
          AI-Powered <span className="font-serif font-normal italic">Legal Assistant</span> for Every <span className=" font-extrabold">INDIAN</span>
          </h1>
        </div>
        <div className="mt-6 w-full max-w-[620px]">
          <p className="text-xl leading-[1.5] text-gray-600">
          Reimagining access to justice — making legal help simple, affordable, and accessible for every citizen.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {isSignedIn && user ? (
            <>
              <button
                onClick={handleGetStarted}
                className="inline-flex h-12 items-center justify-center rounded-full bg-black px-7 text-base font-medium text-white transition-colors hover:bg-gray-800 no-underline"
              >
                Get Started
              </button>
            </>
          ) : (
            <>
              <SignInButton mode="modal" forceRedirectUrl="/chat">
                <button
                  className="inline-flex h-12 items-center justify-center rounded-full bg-black px-7 text-base font-medium text-white transition-colors hover:bg-gray-800 no-underline"
                >
                  Get Started
                </button>
              </SignInButton>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;