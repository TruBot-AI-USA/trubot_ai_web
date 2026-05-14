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
type SubmenuItem = { label: string; submenu: LinkItem[] };

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
    <li key={label} className="text-left text-sm text-navy font-medium list-none">
      {label}
    </li>
  ));

const renderProductGroups = (items: SubmenuItem[]) =>
  items.map(({ label, submenu }) => (
    <li key={label} className="text-left list-none">
      <p className="text-xs font-bold text-navy uppercase tracking-wide mb-1">{label}</p>
      <ul className="space-y-1 pl-2">
        {submenu.length > 0 ? (
          submenu.map(({ href, label: subLabel }) => (
            <li key={href} className="list-none">
              <Link href={href} className={linkClass}>
                {subLabel}
              </Link>
            </li>
          ))
        ) : (
          <li className="text-xs text-gray-400 italic">Coming soon</li>
        )}
      </ul>
    </li>
  ));

type NavSection =
  | { id: string; title: string; type: "links"; links: LinkItem[] }
  | { id: string; title: string; type: "industries"; links: IndustryItem[] }
  | { id: string; title: string; type: "products"; links: SubmenuItem[] };

const NAV_SECTIONS: NavSection[] = [
  { id: "products", title: "Products", type: "products", links: productLinkList },
  { id: "solutions", title: "Solutions", type: "industries", links: solutionLinkList },
  { id: "partners", title: "Partners", type: "links", links: partnerLinkList },
  { id: "company", title: "Company", type: "links", links: companyLinkList },
];

const renderSection = (section: NavSection): JSX.Element[] => {
  if (section.type === "products") return renderProductGroups(section.links);
  if (section.type === "industries") return renderIndustries(section.links);
  return renderLinks(section.links);
};

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

            {NAV_SECTIONS.map((section) => (
              <nav key={section.id} aria-labelledby={`footer-${section.id}-heading`}>
                <h4
                  id={`footer-${section.id}-heading`}
                  className="font-bold font-heading mb-2"
                >
                  {section.title}
                </h4>
                <ul className="space-y-2">{renderSection(section)}</ul>
              </nav>
            ))}
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden space-y-6 fade-in">
            {NAV_SECTIONS.map((section) => (
              <details key={section.id}>
                <summary
                  id={`mobile-${section.id}`}
                  className="font-bold font-heading cursor-pointer"
                >
                  {section.title}
                </summary>
                <div className="mt-2 space-y-2 pl-4">
                  {renderSection(section)}
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
            <div className="flex gap-4 text-xl text-navy" aria-label="Social Media">
              {[
                { href: "https://www.linkedin.com/company/trubotai/", label: "LinkedIn", icon: <FaLinkedin /> },
                { href: "https://twitter.com/trubotai", label: "Twitter", icon: <FaTwitter /> },
                { href: "https://www.youtube.com/channel/UCykytJyGUvapijemVYYp62w", label: "YouTube", icon: <FaYoutube /> },
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
            <Link href="/privacy" className={linkClass}>Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className={linkClass}>Terms of Service</Link>
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