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

type NavLink = { href: string; label: string };
type NavLabelOnly = { label: string; href?: never };
type NavItem = NavLink | NavLabelOnly;
type SubmenuItem = { label: string; submenu: NavLink[] };

interface NavSection {
  key: string;
  label: string;
  href?: string;
  type: "links" | "industries" | "products";
  links: NavItem[] | SubmenuItem[];
}

const navSections: NavSection[] = [
  { key: "products", label: "Products", href: "/products", type: "products", links: productLinkList },
  { key: "solutions", label: "Solutions", href: "/solutions", type: "industries", links: solutionLinkList },
  { key: "partners", label: "Partners", href: "/partners", type: "links", links: partnerLinkList },
  { key: "company", label: "Company", type: "links", links: companyLinkList },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<Record<string, boolean>>({});
  const [mobileSubmenu, setMobileSubmenu] = useState<Record<string, boolean>>({});

  const toggleDropdown = (key: string) => {
    setMobileDropdown((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleSubmenu = (key: string) => {
    setMobileSubmenu((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const dropdownItemClass =
    "block px-4 py-2 text-sm text-navy rounded-md hover:bg-gray-50 hover:text-electric transition-all";

  return (
    <header role="banner" className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Go to homepage">
          <Image
            src="/images/logo.png"
            alt="TruBot AI Logo"
            className="rounded-full transition-transform duration-300 group-hover:rotate-6"
            width={40}
            height={40}
            priority
          />
          <span className="text-base sm:text-lg font-heading font-bold text-navy">TruBot AI</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
          {navSections.map(({ key, label, href, type, links }) => (
            <div key={key} className="relative group">

              {/* Trigger */}
              <span className="flex items-center gap-1 cursor-pointer font-medium text-navy hover:text-electric transition-colors">
                {href
                  ? <Link href={href} className="hover:text-electric transition-colors">{label}</Link>
                  : label
                }
                <FaChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
              </span>

              {/* Dropdown */}
              <div
                className="absolute top-full left-0 mt-2 bg-white shadow-xl border border-gray-100 rounded-xl p-2 z-50
                           opacity-0 invisible group-hover:opacity-100 group-hover:visible
                           translate-y-1 group-hover:translate-y-0
                           transition-all duration-200 ease-out"
                style={{ minWidth: type === "products" ? "560px" : "220px" }}
              >
                {type === "products" ? (
                  /* Products: grouped columns */
                  <div className="flex gap-2">
                    {(links as SubmenuItem[]).map(({ label: groupLabel, submenu }) => (
                      <div key={groupLabel} className="flex-1 min-w-[160px]">
                        <p className="px-4 py-2 text-xs font-bold text-navy uppercase tracking-wider border-b border-gray-100 mb-1">
                          {groupLabel}
                        </p>
                        {submenu.length > 0 ? (
                          submenu.map(({ href: subHref, label: subLabel }) => (
                            <Link key={subHref} href={subHref} className={dropdownItemClass}>
                              {subLabel}
                            </Link>
                          ))
                        ) : (
                          <p className="px-4 py-2 text-xs text-gray-400 italic">Coming soon</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : type === "industries" ? (
                  /* Solutions: labels only */
                  <ul>
                    {(links as NavLabelOnly[]).map(({ label: itemLabel }, i) => (
                      <li key={i} className="px-4 py-2 text-sm text-navy rounded-md">
                        {itemLabel}
                      </li>
                    ))}
                  </ul>
                ) : (
                  /* Links: standard nav links */
                  <ul>
                    {(links as NavLink[]).map(({ href: itemHref, label: itemLabel }) => (
                      <li key={itemHref}>
                        <Link href={itemHref} className={dropdownItemClass}>
                          {itemLabel}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex gap-2">
          <Button
            href="/digitalAssets"
            label="Buy Digital Assets"
            ariaLabel="Buy Digital Assets with TruBot AI"
            variant="primary"
            animate
          />
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
          className="lg:hidden text-2xl text-navy focus:outline-none"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`inline-block transition-transform duration-300 ${menuOpen ? "rotate-90" : ""}`}>
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden w-full bg-white px-4 py-6 flex flex-col gap-3" aria-label="Mobile navigation">
          {navSections.map(({ key, label, type, links }) => (
            <div key={key} className="border border-gray-100 rounded-md overflow-hidden">
              <button
                onClick={() => toggleDropdown(key)}
                className="w-full flex justify-between items-center py-3 px-4 font-semibold text-navy"
                aria-expanded={mobileDropdown[key]}
              >
                {label}
                <FaChevronDown className={`text-xs transition-transform duration-300 ${mobileDropdown[key] ? "rotate-180" : ""}`} />
              </button>

              {mobileDropdown[key] && (
                <div className="px-4 pb-4 space-y-1">
                  {type === "products" ? (
                    (links as SubmenuItem[]).map(({ label: groupLabel, submenu }) => (
                      <div key={groupLabel}>
                        <button
                          onClick={() => toggleSubmenu(groupLabel)}
                          className="w-full flex justify-between items-center py-2 text-sm font-bold text-navy"
                        >
                          {groupLabel}
                          <FaChevronDown className={`text-xs transition-transform duration-300 ${mobileSubmenu[groupLabel] ? "rotate-180" : ""}`} />
                        </button>
                        {mobileSubmenu[groupLabel] && (
                          <ul className="pl-3 space-y-1">
                            {submenu.length > 0 ? (
                              submenu.map(({ href, label: subLabel }) => (
                                <li key={href}>
                                  <Link
                                    href={href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block py-1 text-sm text-navy hover:text-electric"
                                  >
                                    {subLabel}
                                  </Link>
                                </li>
                              ))
                            ) : (
                              <li className="py-1 text-xs text-gray-400 italic">Coming soon</li>
                            )}
                          </ul>
                        )}
                      </div>
                    ))
                  ) : type === "industries" ? (
                    (links as NavLabelOnly[]).map(({ label: itemLabel }, i) => (
                      <p key={i} className="py-1 text-sm text-navy">{itemLabel}</p>
                    ))
                  ) : (
                    (links as NavLink[]).map(({ href, label: itemLabel }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-1 text-sm text-navy hover:text-electric"
                      >
                        {itemLabel}
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
          ))}

          <div className="mt-4 space-y-3">
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