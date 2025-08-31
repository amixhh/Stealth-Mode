import { Navbar } from "../components/sections/navbar";
import FooterLinks from "../components/sections/footer-links";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAF7F4] pt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">Terms of Use</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using Legally AI, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">2. Description of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Legally AI provides AI-powered legal assistance, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Legal advice and consultation</li>
                <li>Document analysis and summarization</li>
                <li>Legal query responses</li>
                <li>Constitutional and legal research assistance</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">3. User Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">You agree to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Provide accurate and truthful information</li>
                <li>Use the service for lawful purposes only</li>
                <li>Not attempt to reverse engineer or hack the platform</li>
                <li>Respect intellectual property rights</li>
                <li>Not use the service for unauthorized legal practice</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">4. Disclaimer of Legal Advice</h2>
              <p className="text-gray-700 leading-relaxed">
                Legally AI provides general legal information and assistance but does not constitute formal legal advice. For specific legal matters, we recommend consulting with a qualified legal professional. Our AI responses are for informational purposes only and should not be relied upon as legal counsel.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                Legally AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">6. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                The service and its original content, features, and functionality are and will remain the exclusive property of Legally AI and its licensors. The service is protected by copyright, trademark, and other laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">7. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">8. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be interpreted and governed by the laws of India, without regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">9. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">10. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Use, please contact us through our platform or at the contact information provided in our footer.
              </p>
            </div>

            <div className="border-t pt-6">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
        <FooterLinks />
      </main>
    </>
  );
}
