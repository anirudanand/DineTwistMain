import Link from "next/link"
import { Utensils } from "lucide-react"

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">Last Updated: May 17, 2025</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              DineTwist ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you use our mobile application and website
              (collectively, the "Service").
            </p>
            <p>
              We adhere to the General Data Protection Regulation (GDPR) and other applicable data protection laws.
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
              please do not access the Service.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Data Controller</h2>
            <p>
              DineTwist is the data controller responsible for your personal data. If you have any questions about this
              Privacy Policy, including any requests to exercise your legal rights, please contact us at:
            </p>
            <p>
              Email: privacy@dinetwist.com
              <br />
              Address: 123 Dining Street, London, UK
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Information We Collect</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Personal Data</h3>
            <p>We may collect the following types of personal data:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Identity Data: first name, last name, username or similar identifier, profile picture</li>
              <li>Contact Data: email address, telephone number, address</li>
              <li>Profile Data: your preferences, interests, feedback, and survey responses</li>
              <li>Usage Data: information about how you use our Service</li>
              <li>Location Data: your geographic location (with your consent)</li>
              <li>Dietary Preferences: information about your food preferences and dietary restrictions</li>
              <li>Communication Data: your preferences for receiving communications from us</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Special Categories of Personal Data</h3>
            <p>
              We may collect information about dietary restrictions which could reveal information about your health or
              religious beliefs. We only process this information with your explicit consent and for the specific
              purpose of matching you with appropriate dining experiences.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. How We Collect Your Data</h2>
            <p>We collect data through:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Direct interactions: when you create an account, complete your profile, or contact us</li>
              <li>Automated technologies: when you use our app, we may automatically collect technical data</li>
              <li>
                Third parties: we may receive data from analytics providers or social media platforms if you choose to
                link your account
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. How We Use Your Data</h2>
            <p>We use your personal data for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>To create and manage your account</li>
              <li>To provide our core service of matching you with compatible dining partners and restaurants</li>
              <li>To process and manage reservations</li>
              <li>To communicate with you about your bookings and our services</li>
              <li>To improve our Service based on your feedback and usage patterns</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Legal Basis for Processing</h2>
            <p>We process your personal data on the following legal bases:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Performance of a contract: processing necessary to provide the Service to you</li>
              <li>Legitimate interests: to improve our Service and business operations</li>
              <li>Consent: where you have explicitly agreed to the processing of your data</li>
              <li>Legal obligation: where we need to comply with a legal or regulatory obligation</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Data Sharing</h2>
            <p>We may share your personal data with:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Other users: limited profile information shared with your dining matches</li>
              <li>Restaurant partners: to facilitate reservations</li>
              <li>Service providers: who perform services on our behalf (e.g., payment processing, hosting)</li>
              <li>Legal authorities: when required by law or to protect our rights</li>
            </ul>
            <p>
              We require all third parties to respect the security of your personal data and to treat it in accordance
              with the law.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. International Transfers</h2>
            <p>
              We may transfer your data outside the European Economic Area (EEA). When we do, we ensure a similar degree
              of protection by implementing appropriate safeguards, such as:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Using specific contracts approved by the European Commission</li>
              <li>Transferring to countries deemed to provide adequate protection</li>
              <li>Using providers who are certified under approved certification mechanisms</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Data Security</h2>
            <p>
              We have implemented appropriate security measures to prevent your personal data from being accidentally
              lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees,
              agents, contractors, and other third parties who have a business need to know.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfill the purposes we collected it
              for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
            <p>
              To determine the appropriate retention period, we consider the amount, nature, and sensitivity of the
              data, the potential risk of harm from unauthorized use or disclosure, the purposes for which we process
              the data, and whether we can achieve those purposes through other means.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Your Legal Rights</h2>
            <p>Under the GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Withdraw consent where we rely on consent to process your data</li>
            </ul>
            <p>
              You can exercise these rights by contacting us at privacy@dinetwist.com. You will not have to pay a fee to
              access your personal data or to exercise any of your other rights. However, we may charge a reasonable fee
              if your request is clearly unfounded, repetitive, or excessive.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">12. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our Service and hold certain
              information. Cookies are files with a small amount of data which may include an anonymous unique
              identifier.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">12.1 Types of Cookies We Use</h3>
            <p>We use the following types of cookies:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Strictly Necessary Cookies:</strong> These cookies are essential for the website to function
                properly and cannot be switched off in our systems. They are usually only set in response to actions
                made by you which amount to a request for services, such as setting your privacy preferences, logging
                in, or filling in forms.
              </li>
              <li>
                <strong>Preference Cookies:</strong> These cookies enable the website to provide enhanced functionality
                and personalization. They may be set by us or by third-party providers whose services we have added to
                our pages.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> These cookies allow us to count visits and traffic sources so we can
                measure and improve the performance of our site. They help us to know which pages are the most and least
                popular and see how visitors move around the site.
              </li>
              <li>
                <strong>Marketing Cookies:</strong> These cookies may be set through our site by our advertising
                partners. They may be used by those companies to build a profile of your interests and show you relevant
                advertisements on other sites.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">12.2 Cookie Consent</h3>
            <p>
              When you first visit our website, you will be presented with a cookie consent banner that allows you to
              accept or reject different categories of cookies. You can change your cookie preferences at any time by
              clicking on the "Manage Cookies" button at the bottom of our website.
            </p>
            <p>
              We only use non-essential cookies (Preference, Analytics, and Marketing) if you have given your consent.
              You can withdraw your consent at any time by changing your cookie preferences.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">12.3 How to Control Cookies</h3>
            <p>
              In addition to our cookie consent tool, you can set your browser to refuse all or some browser cookies, or
              to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some
              parts of this website may become inaccessible or not function properly.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">13. Children's Privacy</h2>
            <p>
              Our Service is not intended for children under the age of 18. We do not knowingly collect personal data
              from children under 18. If you are a parent or guardian and you are aware that your child has provided us
              with personal data, please contact us.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">14. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
              are effective when they are posted on this page.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">15. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>
              Email: privacy@dinetwist.com
              <br />
              Address: 123 Dining Street, London, UK
              <br />
              Phone: +44 20 1234 5678
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">16. Complaints</h2>
            <p>
              You have the right to make a complaint at any time to your local data protection authority. We would,
              however, appreciate the chance to deal with your concerns before you approach the authority, so please
              contact us in the first instance.
            </p>

            <p>
              For users in the European Union, you can find your national data protection authority on the European
              Commission website:{" "}
              <a
                href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                className="text-rose-600 hover:underline"
              >
                https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
              </a>
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
