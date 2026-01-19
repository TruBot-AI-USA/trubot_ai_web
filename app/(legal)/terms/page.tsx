import Link from "next/link";
import type { Metadata } from "next";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import Button from "@/app/ui/components/shared/Button";

export const metadata: Metadata = {
  title: "Terms of Service – TruBot AI",
  description:
    "Review the comprehensive terms and conditions for using TruBot AI's services, platform, and AI solutions. Understand your rights and obligations.",
  keywords: [
    "Terms of Service",
    "Terms and Conditions",
    "Legal Agreement",
    "Service Terms",
    "TruBot AI Terms",
    "Platform Terms",
  ],
};

const Page = () => {
  return (
    <PageLayout id="terms-of-service">
      <div className="text-center mb-16">
        <h1
          id="terms-of-service-heading"
          className="text-5xl font-heading font-bold text-navy mb-6 leading-tight"
        >
          Terms of Service
        </h1>
        <p className="text-navy/70 text-lg max-w-3xl mx-auto font-body mb-6">
          Effective starting: April 1, 2025
        </p>
        <p className="text-navy/80 max-w-4xl mx-auto font-body text-lg leading-relaxed">
          TruBot AI and its products i.e TruSocial (&quot;TruBot,&quot;
          &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) provides an online
          software platform that enables businesses to build, deploy, and manage
          AI-powered chatbots, voicebots, and automation solutions.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-0 space-y-12 text-navy/80 leading-relaxed font-body fade-in">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            1. Introduction and Acceptance
          </h2>

          <p className="mb-4">
            These Terms of Service (&quot;Terms&quot;) govern your use of our
            website located at{" "}
            <Link
              href="https://www.trubotai.com"
              className="text-electric font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.trubotai.com
            </Link>{" "}
            and other websites owned (
            <Link
              href="https://trusocial.trubotai.com"
              className="text-electric font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://trusocial.trubotai.com
            </Link>
            ) or operated by TruBot AI (the &quot;Website(s)&quot;), our AI
            platform, APIs, and services (collectively, the &quot;TruBot AI
            Platform&quot;).
          </p>

          <p className="mb-4">
            <strong>
              PLEASE READ THESE TERMS CAREFULLY TO ENSURE THAT YOU UNDERSTAND
              EACH PROVISION.
            </strong>{" "}
            These Terms contain important provisions, including a mandatory
            individual arbitration and class action/jury trial waiver provision
            that requires the use of arbitration on an individual basis to
            resolve disputes.
          </p>

          <p className="mb-4">
            By using or continuing to use the TruBot AI Platform and its
            products i.e TruSocial or by clicking &quot;Sign Up&quot; or similar
            buttons, you agree to use the TruBot AI Platform and its products
            i.e TruSocial solely in accordance with these Terms, and you agree
            that you are bound by and are a party to these Terms.
          </p>

          <p className="mb-4">
            You warrant that you are at least eighteen (18) years old and that
            you have the legal capacity to agree to and be bound by these Terms.
            If you access or use the TruBot AI Platform and its products i.e
            TruSocial, on behalf of a company, principal, or other entity, you
            represent that you have authority to bind such entity and its
            affiliates to these Terms.
          </p>
        </section>

        {/* Accounts and Registration */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            2. Accounts and Registration
          </h2>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            2.1 Account Creation
          </h3>
          <p className="mb-4">
            You need to create a TruBot AI account to use our services.
          </p>
          <p className="mb-4">
            For our product TruSocial, you need to create a TruSocial account to
            use our services.
          </p>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            2.2 Account Responsibilities
          </h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              You are solely responsible for the activity that occurs on your
              account
            </li>
            <li>
              You must keep your password, account credentials, and accounts
              secure
            </li>
            <li>
              You must notify TruBot AI and its products i.e TruSocial
              immediately of any unauthorized use
            </li>
            <li>You may never use another user&apos;s account</li>
            <li>Your login may only be used by one person</li>
            <li>
              Accounts registered by &quot;bots&quot; or other automated methods
              are not permitted
            </li>
          </ul>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            2.3 Account Termination
          </h3>
          <p className="mb-4">
            We may terminate or suspend your account at any time, with or
            without cause, with or without notice, effective immediately.
          </p>
        </section>

        {/* Use of Services */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            3. Use of Services
          </h2>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            3.1 Permitted Use
          </h3>
          <p className="mb-4">
            You may use the TruBot AI Platform and its products i.e TruSocial
            only for lawful purposes and in accordance with these Terms. You
            agree not to use the services:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              In any way that violates any applicable federal, state, local, or
              international law or regulation
            </li>
            <li>
              To transmit, or procure the sending of, any advertising or
              promotional material
            </li>
            <li>
              To impersonate or attempt to impersonate TruBot AI, Trubot AI
              products i.e TruSocial, a TruBot AI employee, or any other person
              or entity
            </li>
            <li>
              To engage in any other conduct that restricts or inhibits
              anyone&apos;s use or enjoyment of the services
            </li>
          </ul>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            3.2 Prohibited Activities
          </h3>
          <p className="mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              Use the services to create, transmit, or store any content that is
              illegal, harmful, threatening, abusive, or defamatory
            </li>
            <li>
              Attempt to gain unauthorized access to any part of the services or
              systems
            </li>
            <li>
              Interfere with or disrupt the services or servers connected to the
              services
            </li>
            <li>
              Use the services for any commercial purpose without our express
              written consent
            </li>
            <li>
              Reverse engineer, decompile, or disassemble any portion of the
              services
            </li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            4. Intellectual Property Rights
          </h2>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            4.1 Our Rights
          </h3>
          <p className="mb-4">
            The TruBot AI Platform and its products i.e TruSocial and its entire
            contents, features, and functionality (including but not limited to
            all information, software, text, displays, images, video, and audio,
            and the design, selection, and arrangement thereof) are owned by
            TruBot AI, its licensors, or other providers of such material and
            are protected by copyright, trademark, patent, trade secret, and
            other intellectual property or proprietary rights laws.
          </p>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            4.2 License Grant
          </h3>
          <p className="mb-4">
            Subject to these Terms, we grant you a limited, non-exclusive,
            non-transferable, revocable license to use the TruBot AI Platform
            and its products i.e TruSocial for your business purposes.
          </p>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            4.3 Your Content
          </h3>
          <p className="mb-4">
            You retain ownership of any content you create or upload to the
            TruBot AI and its products i.e TruSocial Platform. By uploading
            content, you grant us a worldwide, non-exclusive, royalty-free
            license to use, reproduce, modify, and distribute your content
            solely for the purpose of providing our services to you.
          </p>
        </section>

        {/* Privacy and Data */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            5. Privacy and Data Protection
          </h2>

          <p className="mb-4">
            Your privacy is important to us. Our collection and use of personal
            information is governed by our{" "}
            <Link
              href="/privacy"
              className="text-electric font-medium hover:underline"
            >
              Privacy Policy
            </Link>
            , which is incorporated into these Terms by reference.
          </p>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            5.1 Data Processing
          </h3>
          <p className="mb-4">
            When you use our AI services, we may process data that you submit
            through our platform. We process this data in accordance with our
            Privacy Policy and applicable data protection laws.
          </p>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            5.2 Data Security
          </h3>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to
            protect your data against unauthorized access, alteration,
            disclosure, or destruction.
          </p>
        </section>

        {/* Payment Terms */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            6. Payment Terms
          </h2>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            6.1 Fees and Billing
          </h3>
          <p className="mb-4">
            You agree to pay all fees associated with your use of the TruBot AI
            Platform and its products i.e TruSocial. Fees are billed in advance
            on a monthly or annual basis, as applicable. All fees are
            non-refundable except as expressly stated in these Terms.
          </p>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            6.2 Payment Methods
          </h3>
          <p className="mb-4">
            We accept payment through various methods as indicated on our
            website. You authorize us to charge your payment method for all fees
            incurred.
          </p>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            6.3 Late Payments
          </h3>
          <p className="mb-4">
            Late payments may result in suspension or termination of your
            account. We reserve the right to charge interest on overdue amounts.
          </p>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            6.4 Refund Policy
          </h3>
          <p className="mb-4">
            We do not provide refunds for partial months of service or for
            unused time. Refunds may be provided at our sole discretion in
            exceptional circumstances.
          </p>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            6.5 Subscriptions Policy
          </h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              Fees for Products are set forth on our website or agreed upon in a
              separate contract.
            </li>
            <li>
              Subscription payments are billed monthly/annually and are
              non-refundable unless otherwise stated.
            </li>
            <li>
              We reserve the right to modify pricing with or without prior
              notice.
            </li>
            <li>
              We may suspend or terminate access if payments are not made on
              time.
            </li>
            <li>
              Payments are due within seven (7) days from the invoice date
              unless otherwise specified.
            </li>
          </ul>
        </section>

        {/* Service Level and Support */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            7. Service Level and Support
          </h2>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            7.1 Service Availability
          </h3>
          <p className="mb-4">
            We strive to maintain high service availability but do not guarantee
            uninterrupted access to the TruBot AI Platform and its products i.e
            TruSocial. We may perform maintenance that temporarily affects
            service availability.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              We may roll out updates, improvements, or new features from time
              to time.
            </li>
            <li>
              Planned maintenance will be communicated in advance when possible.
            </li>
          </ul>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            7.2 Support Services
          </h3>
          <p className="mb-4">
            We provide support services as described in your Pricing Plan.
            Support is available through email, chat, and other channels as we
            may specify from time to time.
          </p>
        </section>

        {/* Termination */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            8. Termination
          </h2>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            8.1 Termination by You
          </h3>
          <p className="mb-4">
            You may terminate your account at any time by contacting us or
            through your account settings. Upon termination, your right to use
            the services will immediately cease.
          </p>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            8.2 Termination by Us
          </h3>
          <p className="mb-4">
            We may terminate or suspend your account immediately, without prior
            notice or liability, for any reason whatsoever, including without
            limitation if you breach the Terms.
          </p>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            8.3 Effect of Termination
          </h3>
          <p className="mb-4">
            Upon termination, your right to use the services will cease
            immediately. We may delete your account and data, though we may
            retain certain information as required by law or for legitimate
            business purposes.
          </p>
        </section>

        {/* Disclaimers */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            9. Disclaimers
          </h2>

          <p className="mb-4">
            THE TRUBOT AI PLATFORM AND ITS PRODUCTS I.E TRUSOCIAL IS PROVIDED ON
            AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. TRUBOT AI
            AND ITS PRODUCTS I.E TRUSOCIAL MAKES NO WARRANTIES, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>

          <p className="mb-4">
            We do not warrant that the services will be uninterrupted, secure,
            or error-free, or that defects will be corrected.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            10. Limitation of Liability
          </h2>

          <p className="mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, TRUBOT AI AND ITS
            PRODUCTS I.E TRUSOCIAL SHALL NOT BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING
            WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER
            INTANGIBLE LOSSES.
          </p>

          <p className="mb-4">
            IN NO EVENT SHALL TRUBOT AI AND ITS PRODUCTS I.E TRUSOCIAL&apos;S
            TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE AMOUNT PAID BY YOU
            TO TRUBOT AI AND ITS PRODUCTS I.E TRUSOCIAL IN THE TWELVE (12)
            MONTHS PRECEDING THE CLAIM.
          </p>
        </section>

        {/* Indemnification */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            11. Indemnification
          </h2>

          <p className="mb-4">
            You agree to defend, indemnify, and hold harmless TruBot AI and its
            products i.e TruSocial and its affiliates from and against any
            claims, damages, obligations, losses, liabilities, costs, or debt
            arising from your use of the services or violation of these Terms.
          </p>
        </section>

        {/* Governing Law */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            12. Governing Law and Dispute Resolution
          </h2>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            12.1 Governing Law
          </h3>
          <p className="mb-4">
            These Terms shall be governed by and construed in accordance with
            the laws of the State of Florida, United States, without regard to
            its conflict of law principles.
          </p>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            12.2 Arbitration
          </h3>
          <p className="mb-4">
            Any dispute arising out of or relating to these Terms shall be
            resolved through binding arbitration conducted by a neutral
            arbitrator in accordance with the rules of the American Arbitration
            Association.
          </p>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            12.3 Class Action Waiver
          </h3>
          <p className="mb-4">
            You agree that any arbitration shall be conducted on an individual
            basis and not in a class, consolidated, or representative action.
          </p>
        </section>

        {/* Changes to Terms */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            13. Changes to Terms
          </h2>

          <p className="mb-4">
            We reserve the right to modify these Terms at any time. We will
            notify you of any material changes by posting the new Terms on our
            website and updating the &quot;Effective starting&quot; date. Your
            continued use of the services after such changes constitutes
            acceptance of the new Terms.
          </p>
        </section>

        {/* Miscellaneous */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            14. Miscellaneous
          </h2>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            14.1 Entire Agreement
          </h3>
          <p className="mb-4">
            These Terms constitute the entire agreement between you and TruBot
            AI and its products i.e TruSocial concerning the TruBot AI Platform
            and its products i.e TruSocial and supersede all prior agreements.
          </p>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            14.2 Severability
          </h3>
          <p className="mb-4">
            If any provision of these Terms is held to be invalid or
            unenforceable, the remaining provisions will continue in full force
            and effect.
          </p>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            14.3 Waiver
          </h3>
          <p className="mb-4">
            No waiver of any term of these Terms shall be deemed a further or
            continuing waiver of such term or any other term.
          </p>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 leading-tight">
            14.4 Assignment
          </h3>
          <p className="mb-4">
            You may not assign these Terms without our prior written consent. We
            may assign these Terms without restriction.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-navy mb-6 leading-tight">
            15. Contact Information
          </h2>

          <p className="mb-4">
            If you have any questions about these Terms, please contact us:
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
      </div>
    </PageLayout>
  );
};

export default Page;
