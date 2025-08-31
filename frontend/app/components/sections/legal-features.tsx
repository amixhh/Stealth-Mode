"use client";

const LegalFeatures = () => {
  return (
    <section className="py-20 bg-[#FAF7F4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Your Complete Legal AI Assistant
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From legal advice to document analysis, we've got everything you need to navigate the legal landscape with confidence.
          </p>
        </div>

        {/* Legal Advice Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-black mb-6">
              AI-Powered Legal Advice
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Get instant, reliable legal guidance tailored to your specific situation. Our AI understands Indian law and provides practical advice.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-black">24/7 instant legal consultation</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-black">Indian law-specific guidance</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-black">Case law and precedent analysis</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-black">Step-by-step legal procedures</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-black">Rights and remedies explanation</span>
              </li>
            </ul>
          </div>
          
          {/* MacBook Demo Screen */}
          <div className="relative">
            {/* MacBook Frame */}
            <div className="relative mx-auto w-full max-w-lg">
              {/* MacBook Body */}
              <div className="bg-gray-800 rounded-lg p-2 shadow-2xl">
                {/* Screen */}
                <div className="bg-black rounded-lg p-1">
                  <div className="bg-white rounded-lg h-72 relative overflow-hidden">
                    {/* Screen Content - Legal Advice Demo */}
                    <div className="p-4 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-black rounded-lg mr-3"></div>
                          <div className="text-sm font-medium text-black">Legally AI Assistant</div>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Chat Interface */}
                      <div className="flex-1 bg-gray-50 rounded-lg p-3 mb-3">
                        <div className="space-y-3">
                          {/* User Message */}
                          <div className="flex justify-end">
                            <div className="bg-black text-white text-xs px-3 py-2 rounded-lg max-w-[80%]">
                              "I need help with a property dispute"
                            </div>
                          </div>
                          
                          {/* AI Response */}
                          <div className="flex justify-start">
                            <div className="bg-white text-black text-xs px-3 py-2 rounded-lg max-w-[80%] shadow-sm">
                              <div className="font-medium mb-1">Legal Advice:</div>
                              <div className="space-y-1">
                                <div className="h-2 bg-gray-300 rounded w-full"></div>
                                <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                                <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                                <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Input Bar */}
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-100 rounded-full px-3 py-2 text-xs text-gray-500">
                          Type your legal question...
                        </div>
                        <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* MacBook Base */}
              <div className="bg-gray-800 rounded-lg h-2 mx-auto w-3/4 mt-1"></div>
            </div>
          </div>
        </div>

        {/* Legal Query Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* MacBook Demo Screen - Left Side */}
          <div className="relative order-2 lg:order-1">
            {/* MacBook Frame */}
            <div className="relative mx-auto w-full max-w-lg">
              {/* MacBook Body */}
              <div className="bg-gray-800 rounded-lg p-2 shadow-2xl">
                {/* Screen */}
                <div className="bg-black rounded-lg p-1">
                  <div className="bg-white rounded-lg h-72 relative overflow-hidden">
                    {/* Screen Content - Legal Query Demo */}
                    <div className="p-4 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-black rounded-lg mr-3"></div>
                          <div className="text-sm font-medium text-black">Legally AI Assistant</div>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Search Interface */}
                      <div className="flex-1 bg-gray-50 rounded-lg p-3 mb-3">
                        <div className="space-y-3">
                          {/* Search Bar */}
                          <div className="flex items-center space-x-2 mb-4">
                            <div className="flex-1 bg-white rounded-lg px-3 py-2 text-xs border">
                              "Right to Property"
                            </div>
                            <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                            </div>
                          </div>
                          
                          {/* Loading Animation */}
                          <div className="flex items-center space-x-2 mb-3">
                            <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                            <div className="text-xs text-gray-600">Fetching from Constitution...</div>
                          </div>
                          
                          {/* Results */}
                          <div className="bg-white rounded-lg p-3 border-l-4 border-blue-500">
                            <div className="text-xs font-medium text-blue-600 mb-2">Article 300A</div>
                            <div className="space-y-3">
                              <div className="h-2 bg-gray-300 rounded w-full"></div>
                              <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                              <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                            </div>
                            <div className="text-xs text-gray-500 mt-2">"No person shall be deprived of his property save by authority of law"</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* MacBook Base */}
              <div className="bg-gray-800 rounded-lg h-2 mx-auto w-3/4 mt-1"></div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-black mb-6">
              Legal Queries
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Instantly search and retrieve information from the Indian Constitution, legal statutes, and case laws with AI-powered precision.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-black">Real-time Legal Query search</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-black">Article-by-article breakdown</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-black">Related case law connections</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-black">Amendments and updates tracking</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-black">Cross-reference legal provisions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Document Summarization Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content - Left Side */}
          <div>
            <h3 className="text-3xl font-bold text-black mb-6">
              Legal Document Summarization
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Upload any legal document and get instant AI-powered summaries, key points extraction, and legal insights in seconds.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-black">Instant document analysis</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-black">Key legal points extraction</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-black">OCR Support Available</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-black">Multiple file format support</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-black">Download your Summaries with Ease</span>
              </li>
            </ul>
          </div>

          {/* MacBook Demo Screen - Right Side */}
          <div className="relative">
            {/* MacBook Frame */}
            <div className="relative mx-auto w-full max-w-lg">
              {/* MacBook Body */}
              <div className="bg-gray-800 rounded-lg p-2 shadow-2xl">
                {/* Screen */}
                <div className="bg-black rounded-lg p-1">
                  <div className="bg-white rounded-lg h-72 relative overflow-hidden">
                    {/* Screen Content - Document Summarization Demo */}
                    <div className="p-4 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-black rounded-lg mr-3"></div>
                          <div className="text-sm font-medium text-black">Document Analysis</div>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Document Upload Area */}
                      <div className="flex-1 bg-gray-50 rounded-lg p-3 mb-3">
                        <div className="space-y-3">
                          {/* Upload Zone */}
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-2 text-center">
                            <div className="w-8 h-8 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                            <div className="text-xs text-gray-600 mb-1">contract_agreement.pdf</div>
                            <div className="text-xs text-gray-500">2.3 MB • Uploaded</div>
                          </div>
                          
                          {/* Processing Status */}
                          <div className="flex items-center space-x-2 mb-3">
                            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                            <div className="text-xs text-gray-600">Analyzing document...</div>
                          </div>
                          
                          {/* Summary Results */}
                          <div className="bg-white rounded-lg p-2 border-l-4 border-green-500">
                            <div className="text-xs font-medium text-green-600 mb-2">Document Summary</div>
                            <div className="space-y-1">
                              <div className="h-2 bg-gray-300 rounded w-full"></div>
                              <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                              <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* MacBook Base */}
              <div className="bg-gray-800 rounded-lg h-2 mx-auto w-3/4 mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalFeatures;
