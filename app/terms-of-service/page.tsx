import Link from "next/link"
import { Utensils } from "lucide-react"

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Utensils className="h-6 w-6 text-rose-600" />
            <span className="text-xl font-bold">DineTwist</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">Last Updated: May 17, 2025</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to DineTwist. These Terms of Service ("Terms") govern your use of the DineTwist mobile application
              and website (collectively, the "Service") operated by DineTwist Ltd ("we," "us," or "our").
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of
              the Terms, you may not access the Service.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Definitions</h2>
            <p>For the purpose of these Terms:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>"User" refers to any individual who accesses or uses the Service.</li>
              <li>
                "Content" refers to all information, text, graphics, photos, or other materials uploaded, downloaded, or
                appearing on the Service.
              </li>
              <li>"Restaurant Partner" refers to any restaurant that has agreed to participate in our Service.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Account Registration</h2>
            <p>
              To use certain features of the Service, you must register for an account. When you register, you agree to
              provide accurate, current, and complete information about yourself.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to access the Service and for any
              activities or actions under your password. We encourage you to use a strong password (using a combination
              of upper and lower case letters, numbers, and symbols) with your account.
            </p>
            <p>
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming
              aware of any breach of security or unauthorized use of your account.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Service Description</h2>
            <p>
              DineTwist is a platform that connects couples for surprise social dining experiences at partner
              restaurants. The Service includes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Matching users with compatible dining partners based on preferences and interests</li>
              <li>Selecting restaurants for dining experiences</li>
              <li>Facilitating reservations at partner restaurants</li>
              <li>Providing in-app communication tools and dining games</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. User Conduct</h2>
            <p>As a user of the Service, you agree not to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Use the Service in any way that violates any applicable law or regulation</li>
              <li>
                Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a
                person or entity
              </li>
              <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
              <li>Collect or store personal data about other users without their consent</li>
              <li>Harass, abuse, or harm another person through the Service</li>
              <li>Use the Service for any purpose other than its intended purpose</li>
              <li>Create multiple accounts or use the Service on behalf of someone else without their consent</li>
              <li>Provide false or misleading information in your profile</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Reservations and Cancellations</h2>
            <p>
              When you accept a dining match, we will make a reservation at the selected restaurant on your behalf. By
              accepting a match, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Arrive at the restaurant at the scheduled time</li>
              <li>Notify us as soon as possible if you need to cancel</li>
              <li>Respect the restaurant's policies and other diners</li>
            </ul>
            <p>
              Cancellation Policy: You may cancel a reservation up to 24 hours before the scheduled dining time without
              penalty. Late cancellations or no-shows may result in restrictions on future bookings or charges as per
              the restaurant's policy.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Payments and Fees</h2>
            <p>
              DineTwist offers subscription plans with different features and benefits. By selecting a subscription
              plan, you agree to pay the applicable fees.
            </p>
            <p>
              All payments are processed securely through our payment processors. We do not store your payment
              information on our servers.
            </p>
            <p>
              Subscription fees are billed in advance on a monthly or annual basis, depending on your selected plan. You
              can cancel your subscription at any time, but we do not provide refunds for the current billing period.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive
              property of DineTwist and its licensors. The Service is protected by copyright, trademark, and other laws.
            </p>
            <p>
              Our trademarks and trade dress may not be used in connection with any product or service without the prior
              written consent of DineTwist.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. User Content</h2>
            <p>
              You retain all rights to any content you submit, post, or display on or through the Service ("User
              Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to
              use, reproduce, modify, adapt, publish, translate, and distribute it in any media.
            </p>
            <p>You represent and warrant that:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                You own the content or have the right to use it and grant us the rights and license as provided in these
                Terms
              </li>
              <li>
                The content does not violate the privacy rights, publicity rights, copyrights, contract rights, or any
                other rights of any person or entity
              </li>
            </ul>
            <p>
              We reserve the right to remove any User Content that violates these Terms or is otherwise objectionable in
              our sole discretion.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Privacy</h2>
            <p>
              Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms, explains how
              we collect, use, and protect your personal information. By using the Service, you agree to the collection
              and use of information in accordance with our Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, DineTwist and its directors, employees, partners, agents,
              suppliers, or affiliates shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible
              losses, resulting from:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your access to or use of or inability to access or use the Service</li>
              <li>Any conduct or content of any third party on the Service</li>
              <li>Any content obtained from the Service</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">12. Disclaimer</h2>
            <p>
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE"
              basis. The Service is provided without warranties of any kind, whether express or implied, including, but
              not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement,
              or course of performance.
            </p>
            <p>DineTwist does not warrant that:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>The Service will function uninterrupted, secure, or available at any particular time or location</li>
              <li>Any errors or defects will be corrected</li>
              <li>The Service is free of viruses or other harmful components</li>
              <li>The results of using the Service will meet your requirements</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">13. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without
              regard to its conflict of law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
              rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
              provisions of these Terms will remain in effect.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">14. Dispute Resolution</h2>
            <p>
              Any disputes arising out of or relating to these Terms or the Service shall first be attempted to be
              resolved through good faith negotiations. If such negotiations fail, both parties agree to submit to the
              exclusive jurisdiction of the courts of the United Kingdom.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">15. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material, we will provide at least 30 days' notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion.
            </p>
            <p>
              By continuing to access or use our Service after any revisions become effective, you agree to be bound by
              the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">16. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>
              Email: legal@dinetwist.com
              <br />
              Address: 123 Dining Street, London, UK
              <br />
              Phone: +44 20 1234 5678
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} DineTwist. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-6">
            <Link href="/" className="text-sm text-gray-600 hover:text-rose-600">
              Home
            </Link>
            <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-rose-600">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-gray-600 hover:text-rose-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
