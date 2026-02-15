import Link from "next/link";
import React, { useState } from "react";
import { MenuItems } from "@/data/header";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const handleMobileToggle = () => {
    setIsMobileMenuOpen((prev) => {
      if (prev) {
        setMobileDropdown(null);
      }
      return !prev;
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-200">
                <img
                  src="/logos/klogo-trans.webp"
                  className="h-7 w-7 object-contain brightness-0 invert"
                  alt="The K Group logo"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900 tracking-tight">K GROUP</span>
                <span className="text-xs text-gray-500">Business Consulting</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {MenuItems.map((item) => (
                <div
                  key={item.menu}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.menu)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.submenu ? (
                    <>
                      <button
                        type="button"
                        className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                        aria-haspopup="menu"
                        aria-expanded={activeDropdown === item.menu}
                      >
                        {item.menu}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            activeDropdown === item.menu ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {activeDropdown === item.menu && (
                        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.url}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.url}
                      className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                    >
                      {item.menu}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                Get Started
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={handleMobileToggle}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-600" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-0 top-20 bg-white z-40 animate-in slide-in-from-top"
        >
          <div className="h-full overflow-y-auto pb-20">
            <nav className="flex flex-col p-6">
              {MenuItems.map((item) => (
                <div key={item.menu} className="border-b border-gray-100 last:border-0">
                  {item.submenu ? (
                    <div className="py-4">
                      <button
                        type="button"
                        onClick={() =>
                          setMobileDropdown(mobileDropdown === item.menu ? null : item.menu)
                        }
                        className="flex items-center justify-between w-full text-left"
                        aria-expanded={mobileDropdown === item.menu}
                      >
                        <span className="text-base font-semibold text-gray-900">
                          {item.menu}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 text-gray-500 transition-transform ${
                            mobileDropdown === item.menu ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {mobileDropdown === item.menu && (
                        <div className="mt-3 ml-4 space-y-3 animate-in fade-in">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.url}
                              className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setMobileDropdown(null);
                              }}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.url}
                      className="block py-4 text-base font-semibold text-gray-900 hover:text-blue-600"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setMobileDropdown(null);
                      }}
                    >
                      {item.menu}
                    </Link>
                  )}
                </div>
              ))}

              <div className="mt-6 space-y-3">
                <Link
                  href="/contact"
                  className="block w-full py-3 text-center text-gray-700 font-medium bg-gray-50 rounded-lg hover:bg-gray-100"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setMobileDropdown(null);
                  }}
                >
                  Sign In
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
