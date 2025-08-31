"use client";
import { useRouter } from "next/navigation";
import { useUser, SignInButton, UserButton } from "@clerk/nextjs";

const WhyLegallyAI = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  const handleGetStarted = () => {
    if (isSignedIn) {
      router.push('/chat');
    }
  }
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse"></span>
            Join Our Community
          </div>
          <h2 className="text-5xl font-bold text-black mb-6">
            Why Choose <span className="text-black">Legally AI</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing legal access in India with AI-powered solutions that are accessible, accurate, and secure.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">24/7</div>
            <div className="text-gray-600">Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">₹0</div>
            <div className="text-gray-600">Consultation Fee</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">100%</div>
            <div className="text-gray-600">Secure & Private</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">99%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Free & Affordable */}
            <div className="group relative p-8 bg-[#FAF7F4] rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-3">
                    Absolutely Free
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    No hefty consultation fees, legal help for everyone. Access quality legal guidance without breaking the bank. 
                    <span className="font-semibold text-black"> Save up to ₹100,000</span> compared to traditional legal services.
                  </p>
                </div>
              </div>
            </div>

            {/* Built for India */}
            <div className="group relative p-8 bg-[#FAF7F4] rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-3">
                    Built for India
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Trained on <span className="font-semibold text-black">Indian case laws</span> & the Constitution for accurate, relevant answers specific to Indian legal system.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Your Legal Companion */}
            <div className="group relative p-8 bg-[#FAF7F4] rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-3">
                    Your own Legal Companion
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Always available to guide, simplify, and clarify. Your <span className="font-semibold text-black">24/7 very own legal assistant</span> ready to help anytime, anywhere with instant responses and personalized guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* Secure & Private */}
            <div className="group relative p-8 bg-[#FAF7F4] rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-3">
                    Secure & Private
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your data stays safe and confidential with <span className="font-semibold text-black">enterprise-grade security</span> and encryption protecting your sensitive legal information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-black rounded-3xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-6">
              Join the Legal Revolution
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of the movement to make legal help accessible to every Indian. Start your journey with Legally AI today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Get Started Free
              </button> */}

              {isSignedIn && user ? (
            <>
              <button
                onClick={handleGetStarted}
                className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Get Started Free
              </button>
            </>
          ) : (
            <>
              <SignInButton mode="modal" forceRedirectUrl="/chat">
                <button
                  className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  Get Started Free
                </button>
              </SignInButton>
            </>
          )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLegallyAI;
