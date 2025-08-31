import { Navbar } from "../components/sections/navbar";
import FooterLinks from "../components/sections/footer-links";

export default function HelpPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAF7F4] pt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">Help Center</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            {/* Getting Started */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-6">Getting Started</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-black pl-4">
                  <h3 className="text-lg font-semibold text-black mb-2">How to Sign Up</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Click the "Sign Up" button in the top right corner. You can sign up using your email address or Google account. Once registered, you'll be redirected to the chat interface where you can start using Legally AI.
                  </p>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <h3 className="text-lg font-semibold text-black mb-2">First Time Setup</h3>
                  <p className="text-gray-700 leading-relaxed">
                    After signing up, you can immediately start asking legal questions. No additional setup is required. Your account will be automatically configured for optimal performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Using Legally AI */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-6">Using Legally AI</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-black pl-4">
                  <h3 className="text-lg font-semibold text-black mb-2">Legal Advice</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Simply type your legal question in the chat interface. Our AI is trained on Indian laws and can provide guidance on various legal matters including contracts, property disputes, employment issues, and more.
                  </p>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <h3 className="text-lg font-semibold text-black mb-2">Document Analysis</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Upload legal documents (PDF, DOC, DOCX) and our AI will analyze them, extract key points, and provide summaries. Supported formats include contracts, agreements, legal notices, and court documents.
                  </p>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <h3 className="text-lg font-semibold text-black mb-2">Legal Queries</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ask specific questions about Indian laws, constitutional provisions, or legal procedures. Our AI can search through legal databases and provide accurate, up-to-date information.
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-6">Features & Capabilities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-black mb-2">✓ 24/7 Availability</h3>
                  <p className="text-sm text-gray-600">Access legal assistance anytime, anywhere</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-black mb-2">✓ Free Consultation</h3>
                  <p className="text-sm text-gray-600">No charges for basic legal guidance</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-black mb-2">✓ Document Upload</h3>
                  <p className="text-sm text-gray-600">Support for multiple file formats</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-black mb-2">✓ Indian Law Focus</h3>
                  <p className="text-sm text-gray-600">Trained specifically on Indian legal system</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-black mb-2">✓ Secure & Private</h3>
                  <p className="text-sm text-gray-600">Your data is protected and confidential</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-black mb-2">✓ Instant Responses</h3>
                  <p className="text-sm text-gray-600">Get answers within seconds</p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-black mb-2">Is Legally AI free to use?</h3>
                  <p className="text-gray-700">Yes, basic legal consultation and document analysis are completely free. We believe in making legal help accessible to everyone.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-black mb-2">Can I trust the legal advice provided?</h3>
                  <p className="text-gray-700">Our AI is trained on comprehensive Indian legal databases and provides accurate information. However, for complex legal matters, we recommend consulting with a qualified lawyer.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-black mb-2">What file formats are supported for document upload?</h3>
                  <p className="text-gray-700">We support PDF, DOC, DOCX, and TXT files. The maximum file size is 10MB per document.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-black mb-2">Is my data secure?</h3>
                  <p className="text-gray-700">Absolutely. We use enterprise-grade encryption and security measures to protect your personal information and legal documents.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-black mb-2">Can I use Legally AI for court cases?</h3>
                  <p className="text-gray-700">While we can provide information and guidance, we recommend consulting with a qualified lawyer for actual court representation and complex legal proceedings.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-black mb-2">How accurate is the legal information?</h3>
                  <p className="text-gray-700">Our AI is trained on official Indian legal databases and is regularly updated. However, laws can change, so we recommend cross-verifying critical information.</p>
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-6">Need More Help?</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  If you couldn't find the answer you're looking for, we're here to help!
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>LinkedIn:</strong> 
                    <a 
                      href="https://linkedin.com/in/amishh" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-black hover:underline ml-1"
                    >
                      Connect with us
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-6">Tips for Better Results</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-black mb-2">Be Specific</h3>
                  <p className="text-sm text-gray-700">Provide detailed context for more accurate responses</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-black mb-2">Use Clear Language</h3>
                  <p className="text-sm text-gray-700">Write your questions in simple, clear terms</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-black mb-2">Include Relevant Details</h3>
                  <p className="text-sm text-gray-700">Mention relevant dates, locations, and circumstances</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-black mb-2">Ask Follow-up Questions</h3>
                  <p className="text-sm text-gray-700">Don't hesitate to ask for clarification or more details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterLinks />
      </main>
    </>
  );
}
