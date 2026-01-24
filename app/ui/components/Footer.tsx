import { JSX } from "react";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

import {
  productLinkList,
  partnerLinkList,
  companyLinkList,
  solutionLinkList,
} from "../libs/constants/site";

type LinkItem = { href: string; label: string };
type IndustryItem = { label: string };

type NavSection =
  | {
      id: string;
      title: string;
      links: LinkItem[];
      renderer: (items: LinkItem[]) => JSX.Element[];
    }
  | {
      id: string;
      title: string;
      links: IndustryItem[];
      renderer: (items: IndustryItem[]) => JSX.Element[];
    };

const linkClass =
  "relative inline-block text-sm transition-colors duration-300 text-navy font-medium hover:text-electric " +
  "before:content-[''] before:absolute before:bottom-0 before:left-0 " +
  "before:h-[2px] before:bg-electric before:w-0 hover:before:w-full " +
  "before:transition-all before:duration-300";

const renderLinks = (items: LinkItem[]) =>
  items.map(({ href, label }) => (
    <li key={href} className="text-left list-none">
      <Link href={href} className={linkClass}>
        {label}
      </Link>
    </li>
  ));

const renderIndustries = (items: IndustryItem[]) =>
  items.map(({ label }) => (
    <li
      key={label}
      className="text-left text-sm text-navy font-medium list-none"
    >
      {label}
    </li>
  ));

const NAV_SECTIONS: NavSection[] = [
  {
    id: "products",
    title: "Products",
    links: productLinkList,
    renderer: renderLinks,
  },
  {
    id: "solutions",
    title: "Solutions",
    links: solutionLinkList,
    renderer: renderIndustries,
  },
  {
    id: "partners",
    title: "Partners",
    links: partnerLinkList,
    renderer: renderLinks,
  },
  {
    id: "company",
    title: "Company",
    links: companyLinkList,
    renderer: renderLinks,
  },
];

const Footer = () => {
  return (
    <footer role="contentinfo" id="footer">
      <div className="bg-gray-soft text-sm font-body text-navy py-12 border-t">
        <div className="max-w-7xl mx-auto px-4">
          {/* Grid Layout */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-6 gap-10 text-left fade-in">
            <div className="col-span-2">
              <p className="font-heading font-bold text-lg">TruBot AI</p>
              <p className="mt-2 text-sm leading-relaxed">
                Building AI that works for real businesses. Automating the
                future — one workflow at a time.
              </p>
            </div>

            {NAV_SECTIONS.map(({ id, title, links, renderer }) => (
              <nav key={id} aria-labelledby={`footer-${id}-heading`}>
                <h4
                  id={`footer-${id}-heading`}
                  className="font-bold font-heading mb-2"
                >
                  {title}
                </h4>
                <ul className="space-y-2">{renderer(links as LinkItem[])}</ul>
              </nav>
            ))}
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden space-y-6 fade-in">
            {NAV_SECTIONS.map(({ id, title, links, renderer }, idx) => (
              <details key={idx}>
                <summary
                  id={`mobile-${id}`}
                  className="font-bold font-heading cursor-pointer"
                >
                  {title}
                </summary>
                <div className="mt-2 space-y-2 pl-4">
                  {renderer(links as LinkItem[])}
                </div>
              </details>
            ))}
          </div>

          {/* Contact Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-10">
            <div className="space-x-6 text-sm text-navy text-center md:text-left">
              {[
                { email: "support@trubotai.com" },
                { email: "careers@trubotai.com" },
              ].map(({ email }) => (
                <Link
                  key={email}
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 text-navy hover:text-electric text-sm font-medium"
                >
                  <FaEnvelope className="text-base" /> {email}
                </Link>
              ))}
            </div>
            <div
              className="flex gap-4 text-xl text-navy"
              aria-label="Social Media"
            >
              {[
                {
                  href: "https://www.linkedin.com/company/trubotai/",
                  label: "LinkedIn",
                  icon: <FaLinkedin />,
                },
                {
                  href: "https://twitter.com/trubotai",
                  label: "Twitter",
                  icon: <FaTwitter />,
                },
                {
                  href: "https://www.youtube.com/channel/UCykytJyGUvapijemVYYp62w",
                  label: "YouTube",
                  icon: <FaYoutube />,
                },
              ].map(({ href, label, icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:text-electric"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="text-center mt-6 text-xs space-x-4">
            <Link href="/privacy" className={linkClass}>
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className={linkClass}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-navy text-white text-center text-xs py-2" lang="en">
        © {new Date().getFullYear()} TruBot AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
