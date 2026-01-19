import type { Metadata } from "next";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import Button from "@/app/ui/components/shared/Button";

export const metadata: Metadata = {
  title: "Privacy Policy – TruBot AI",
  description:
    "Learn how TruBot AI collects, uses, and protects your personal information. Our comprehensive privacy policy ensures your data security and compliance with global regulations.",
  keywords: [
    "Privacy Policy",
    "Data Protection",
    "GDPR Compliance",
    "Personal Information",
    "Data Security",
    "TruBot AI Privacy",
  ],
};

const Page = () => {
  return (
    <PageLayout id="privacy-policy">
      <div className="text-center mb-16">
        <h1
          id="privacy-policy-heading"
          className="text-5xl font-heading font-bold text-navy mb-6 leading-tight"
        >
          Privacy Policy
        </h1>
        <p className="text-navy/70 text-lg max-w-3xl mx-auto font-body mb-6">
          Last updated: April 1, 2025
        </p>

        <p className="text-navy/80 max-w-4xl mx-auto font-body text-lg leading-relaxed">
          TruBot AI (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
          committed to protecting your privacy. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your information when you use
          our website, products, and services.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-0 space-y-12 text-navy/80 leading-relaxed font-body fade-in">
        {/* Information We Collect */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            1. Information We Collect
          </h2>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            1.1 Personal Information
          </h3>
          <p className="mb-4">
            We may collect personal identification information including but not
            limited to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Name and contact information (email address, phone number)</li>
            <li>Company name and job title</li>
            <li>Billing and payment information</li>
            <li>Account credentials and preferences</li>
            <li>Communication history and support requests</li>
          </ul>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            1.2 Usage Information
          </h3>
          <p className="mb-4">
            We automatically collect certain information about your use of our
            services:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>IP address and device information</li>
            <li>Browser type and version</li>
            <li>Operating system and platform</li>
            <li>Pages visited and time spent</li>
            <li>Referral sources and navigation patterns</li>
            <li>Error logs and performance data</li>
          </ul>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            1.3 Customer Data
          </h3>
          <p className="mb-4">
            When you use our AI services, we may process data that you submit
            through our platform, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Customer conversations and interactions</li>
            <li>Business process data and workflows</li>
            <li>Integration data from third-party services</li>
            <li>Analytics and performance metrics</li>
          </ul>
        </section>

        {/* How We Use Information */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            2. How We Use Your Information
          </h2>

          <p className="mb-4">
            We use the collected information for the following purposes:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Service Provision:</strong> To provide, maintain, and
              improve our AI services
            </li>
            <li>
              <strong>Customer Support:</strong> To respond to inquiries and
              provide technical assistance
            </li>
            <li>
              <strong>Account Management:</strong> To manage your account and
              process payments
            </li>
            <li>
              <strong>Communication:</strong> To send service updates, security
              alerts, and marketing communications (with your consent)
            </li>
            <li>
              <strong>Analytics:</strong> To analyze usage patterns and improve
              our services
            </li>
            <li>
              <strong>Security:</strong> To detect and prevent fraud, abuse, and
              security threats
            </li>
            <li>
              <strong>Compliance:</strong> To comply with legal obligations and
              enforce our terms
            </li>
          </ul>
        </section>

        {/* Information Sharing */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            3. Information Sharing and Disclosure
          </h2>

          <p className="mb-4">
            We do not sell, trade, or rent your personal information. We may
            share your information in the following circumstances:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Service Providers:</strong> With trusted third-party
              vendors who assist in operating our services
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law or to
              protect our rights and safety
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger,
              acquisition, or sale of assets
            </li>
            <li>
              <strong>Consent:</strong> With your explicit consent for specific
              purposes
            </li>
          </ul>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            4. Data Security
          </h2>

          <p className="mb-4">
            We implement appropriate technical and organizational measures to
            protect your information:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and updates</li>
            <li>Access controls and authentication measures</li>
            <li>Employee training on data protection</li>
            <li>Incident response and breach notification procedures</li>
          </ul>
        </section>

        {/* Data Retention */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            5. Data Retention
          </h2>

          <p className="mb-4">
            We retain your personal information for as long as necessary to
            provide our services, comply with legal obligations, resolve
            disputes, and enforce our agreements. The retention period varies
            based on the type of data and its purpose.
          </p>
        </section>

        {/* International Transfers */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            6. International Data Transfers
          </h2>

          <p className="mb-4">
            Your information may be transferred to and processed in countries
            other than your own. We ensure appropriate safeguards are in place
            for such transfers, including:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              Standard contractual clauses approved by the European Commission
            </li>
            <li>Adequacy decisions for certain countries</li>
            <li>Other appropriate safeguards as required by applicable law</li>
          </ul>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            7. Your Rights
          </h2>

          <p className="mb-4">
            Depending on your location, you may have the following rights
            regarding your personal information:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Access:</strong> Request access to your personal
              information
            </li>
            <li>
              <strong>Rectification:</strong> Request correction of inaccurate
              data
            </li>
            <li>
              <strong>Erasure:</strong> Request deletion of your personal
              information
            </li>
            <li>
              <strong>Portability:</strong> Request a copy of your data in a
              portable format
            </li>
            <li>
              <strong>Objection:</strong> Object to certain processing
              activities
            </li>
            <li>
              <strong>Restriction:</strong> Request limitation of processing
            </li>
            <li>
              <strong>Withdrawal:</strong> Withdraw consent where processing is
              based on consent
            </li>
          </ul>

          <p className="mb-4">
            To exercise these rights, please contact us using the information
            provided below.
          </p>
        </section>

        {/* Cookies and Tracking */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            8. Cookies and Tracking Technologies
          </h2>

          <p className="mb-4">
            We use cookies and similar tracking technologies to enhance your
            experience, analyze usage, and provide personalized content. You can
            control cookie settings through your browser preferences.
          </p>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            Types of Cookies We Use:
          </h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> Required for basic website
              functionality
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how
              visitors use our site
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Used for advertising and
              marketing purposes
            </li>
            <li>
              <strong>Preference Cookies:</strong> Remember your settings and
              preferences
            </li>
          </ul>
        </section>

        {/* Third-Party Services */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            9. Third-Party Services
          </h2>

          <p className="mb-4">
            Our services may integrate with third-party services. These services
            have their own privacy policies, and we encourage you to review
            them. We are not responsible for the privacy practices of
            third-party services.
          </p>
        </section>

        {/* Children's Privacy */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            10. Children&apos;s Privacy
          </h2>

          <p className="mb-4">
            Our services are not intended for children under 18 years of age. We
            do not knowingly collect personal information from children under
            18. If we become aware that we have collected such information, we
            will take steps to delete it promptly.
          </p>
        </section>

        {/* Changes to Policy */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            11. Changes to This Privacy Policy
          </h2>

          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify
            you of any material changes by posting the new policy on our website
            and updating the &quot;Last updated&quot; date. We encourage you to
            review this policy periodically.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            12. Contact Us
          </h2>

          <p className="mb-4">
            If you have any questions about this Privacy Policy or our data
            practices, please contact us:
          </p>

          <div className="bg-gray-soft p-8 rounded-xl border border-gray-200 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-heading font-semibold text-navy min-w-[80px]">
                  Email:
                </span>
                <Button
                  label="contact@trubotai.com"
                  href="mailto:contact@trubotai.com"
                  variant="link"
                  target="_blank"
                  className="pr-0 pl-0 text-electric hover:text-teal"
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="font-heading font-semibold text-navy min-w-[80px]">
                  Support:
                </span>
                <Button
                  label="support@trubotai.com"
                  href="mailto:support@trubotai.com"
                  variant="link"
                  target="_blank"
                  className="pr-0 pl-0 text-electric hover:text-teal"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Legal Basis */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            13. Legal Basis for Processing (GDPR)
          </h2>

          <p className="mb-4">
            For users in the European Union, our processing of personal data is
            based on:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Consent:</strong> When you explicitly agree to our
              processing
            </li>
            <li>
              <strong>Contract:</strong> When processing is necessary to provide
              our services
            </li>
            <li>
              <strong>Legitimate Interest:</strong> When processing is necessary
              for our business interests
            </li>
            <li>
              <strong>Legal Obligation:</strong> When required by applicable law
            </li>
          </ul>
        </section>

        {/* Complaints */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            14. Complaints and Supervisory Authorities
          </h2>

          <p className="mb-4">
            If you believe our processing of your personal data violates data
            protection laws, you have the right to lodge a complaint with your
            local data protection authority. For EU residents, you can find your
            supervisory authority at the{" "}
            <a
              href="https://edpb.europa.eu/"
              className="text-electric font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              European Data Protection Board website
            </a>
            .
          </p>
        </section>

        {/* Disclaimer */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            15. Disclaimer
          </h2>

          <p className="mb-4">
            By using our services, you acknowledge and agree that we may access,
            process, and store your information in accordance with our Privacy
            Policy and applicable laws. While we take reasonable technical and
            organizational measures to protect your information, we do not
            warrant that unauthorized access, breaches, or other security
            incidents will never occur. We shall not be liable for any loss,
            damage, or unauthorized disclosure of information resulting from
            circumstances beyond our reasonable control, including but not
            limited to cyberattacks, network failures, or actions of third
            parties.
          </p>
        </section>

        {/* AI Output Disclaimer */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            AI Output Disclaimer
          </h2>

          <p className="mb-4">
            TruBot AI Platform and its products i.e TruSocial utilizes
            artificial intelligence and machine learning technologies that may
            generate outputs based on patterns, algorithms, and data inputs.
            TruBot AI does not guarantee the accuracy, completeness,
            reliability, or legality of any such outputs. You are solely
            responsible for reviewing, verifying, and determining the
            appropriateness of any AI-generated content before relying on,
            publishing, distributing, or otherwise using it. TruBot AI shall not
            be liable for any loss, damage, or claim arising from your use of or
            reliance on AI-generated outputs.
          </p>
        </section>

        {/* Data Ownership & Responsibility */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            Data Ownership &amp; Responsibility
          </h2>

          <p className="mb-4">
            You represent and warrant that you have all necessary rights,
            licenses, and permissions to submit, upload, or otherwise transmit
            data to the TruBot AI Platform and its products i.e TruSocial, and
            that such data does not and will not violate any applicable laws,
            regulations, third-party rights (including intellectual property
            rights), or confidentiality obligations. You are solely responsible
            for the legality, reliability, integrity, and accuracy of any data
            you provide.
          </p>
        </section>

        {/* Force Majeure Clause */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            Force Majeure Clause
          </h2>

          <p className="mb-4">
            TruBot AI Platform and its products i.e TruSocial, shall not be
            liable for any delay or failure to perform due to causes beyond its
            reasonable control, including but not limited to acts of Nature,
            labor disputes, war, terrorism, government actions, internet or
            telecommunications failures, or natural disasters.
          </p>
        </section>

        {/* Copyright Infringement Policy */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            Copyright Infringement Policy
          </h2>

          <p className="mb-4">
            TruBot AI Platform and its products i.e TruSocial, respects
            intellectual property rights. If you believe that your work has been
            copied in a way that constitutes copyright infringement, please
            submit a notification in accordance with the Respective
            Department/Authorities.
          </p>
        </section>
      </div>
    </PageLayout>
  );
};

export default Page;
