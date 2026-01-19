"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";

import Button from "./shared/Button";
import {
  productLinkList,
  solutionLinkList,
  partnerLinkList,
  companyLinkList,
} from "../libs/constants/site";

interface NavLink {
  href: string;
  label: string;
}

interface NavSection {
  key: string;
  label: string;
  links: NavLink[] | { label: string }[];
}

const navSections: NavSection[] = [
  { key: "products", label: "Products", links: productLinkList },
  { key: "solutions", label: "Solutions", links: solutionLinkList },
  { key: "partners", label: "Partners", links: partnerLinkList },
  { key: "company", label: "Company", links: companyLinkList },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<Record<string, boolean>>({});
  const [mobileDropdown, setMobileDropdown] = useState<Record<string, boolean>>(
    {}
  );

  const toggleDropdown = (key: string) => {
    setMobileDropdown((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const dropdownStyles =
    "absolute top-full left-0 w-64 bg-light shadow-xl border border-gray-100 rounded-xl p-3 z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 scale-95 group-hover:scale-100";

  const dropdownItemStyles =
    "block px-4 py-2 text-sm text-navy rounded-md hover:bg-gray-50 hover:text-electric transition-all";

  const navLabelStyles =
    "relative font-medium tracking-wide transition-all hover:text-electric text-navy before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-electric before:w-0 group-hover:before:w-full before:transition-all before:duration-300";

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Go to homepage"
        >
          <Image
            src="/images/logo.png"
            alt="TruBot AI Logo"
            className="rounded-full transition-transform duration-300 group-hover:rotate-6 group-hover:shadow-md"
            width={40}
            height={40}
            priority
          />
          <span className="text-base sm:text-lg font-heading font-bold text-navy">
            TruBot AI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-6"
          role="navigation"
          aria-label="Main navigation"
        >
          {navSections.map(({ key, label, links }) => (
            <div
              key={key}
              className="relative group"
              onMouseEnter={() => setDropdownOpen({ [key]: true })}
              onMouseLeave={() =>
                setDropdownOpen((prev) => ({ ...prev, [key]: false }))
              }
            >
              {["partners", "products", "solutions"].includes(key) ? (
                <Link
                  href={`/${key}`}
                  className={`${navLabelStyles} flex items-center gap-1`}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen[key]}
                >
                  {label}
                  <FaChevronDown
                    className={`text-xs transition-transform duration-300 ${
                      dropdownOpen[key] ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </Link>
              ) : (
                <span
                  className={`${navLabelStyles} flex items-center gap-1`}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen[key]}
                >
                  {label}
                  <FaChevronDown
                    className={`text-xs transition-transform duration-300 ${
                      dropdownOpen[key] ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </span>
              )}
              {dropdownOpen[key] && (
                <ul className={dropdownStyles} aria-label={`${label} links`}>
                  {key === "solutions"
                    ? (links as { label: string }[]).map(({ label }) => (
                        <li key={label} className={dropdownItemStyles}>
                          {label}
                        </li>
                      ))
                    : (links as NavLink[]).map(({ href, label }) => (
                        <li key={href}>
                          <Link href={href} className={dropdownItemStyles}>
                            {label}
                          </Link>
                        </li>
                      ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex gap-2">
          <Button
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3GU3FqaXzxYUNEFvVUp1AAFUErY1k6klqKYNbU0X2tC7RZ_3AGQSuMjUeIeQ_4yCrjej7YLAEV"
            target="_blank"
            rel="noopener noreferrer"
            label="Book a Demo"
            ariaLabel="Schedule a TruBot AI demo"
            variant="primary"
            animate
          />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="lg:hidden text-2xl text-navy focus:outline-none transition-transform duration-300"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`inline-block transition-transform duration-300 ${
              menuOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          className="lg:hidden w-full bg-white px-4 py-6 flex flex-col gap-3 items-center text-center fade-in slide-in-up"
          aria-label="Mobile navigation"
        >
          {navSections.map(({ key, label, links }) =>
            key === "solutions" ? (
              <Link
                key={key}
                href="/solutions"
                className="w-full py-3 px-4 border border-gray-100 rounded-md font-semibold text-navy hover:text-electric text-center"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ) : (
              <div
                key={key}
                className="w-full border border-gray-100 rounded-md overflow-hidden"
              >
                <button
                  onClick={() => toggleDropdown(key)}
                  className="w-full flex justify-center gap-2 items-center py-3 px-4 text-center font-semibold text-navy"
                  aria-haspopup="true"
                  aria-expanded={mobileDropdown[key]}
                >
                  {label}
                  <FaChevronDown
                    className={`text-xs transition-transform duration-300 ${
                      mobileDropdown[key] ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {mobileDropdown[key] && (
                  <ul className="px-4 pb-4 space-y-2">
                    {(links as NavLink[]).map(({ href, label }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          onClick={() => setMenuOpen(false)}
                          className="block py-1 text-sm text-navy hover:text-electric"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          )}

          {/* CTA Buttons */}
          <div className="mt-6 w-full space-y-3">
            <Button
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3GU3FqaXzxYUNEFvVUp1AAFUErY1k6klqKYNbU0X2tC7RZ_3AGQSuMjUeIeQ_4yCrjej7YLAEV"
              label="Book a Demo"
              ariaLabel="Book an appointment with TruBot AI"
              variant="primary"
              animate
              fullWidth
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            />
            <Button
              href="/sales"
              label="Contact Sales"
              ariaLabel="Sales TruBot AI"
              variant="outline"
              animate
              fullWidth
              onClick={() => setMenuOpen(false)}
            />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
