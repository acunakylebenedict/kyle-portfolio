import { Button } from "@/Components/Button";
import { Menu, X, Mail, Phone, MapPin, Facebook, Linkedin, Clipboard, Check } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "acunakylebenedict@gmail.com" },
  { icon: Phone, label: "Mobile", value: "0966 599 2791" },
  { icon: MapPin, label: "Location", value: "Pagsanjan, Laguna" },
  { icon: Facebook, label: "Facebook", value: "Kyle", href: "https://www.facebook.com/share/17u19Ugqiv/?mibextid=wwXIfr" },
  { icon: Linkedin, label: "LinkedIn", value: "Kyle Benedict S. Acuña", href: "http://linkedin.com/in/kyle-benedict-acuña-872038342" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowContact(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopy = (item, index) => {
    navigator.clipboard.writeText(item.value);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">KBSA</a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Dropdown */}
        <div className="relative hidden md:block" ref={dropdownRef}>
          <Button size="sm" onClick={() => setShowContact(!showContact)}>
            Contact Me
          </Button>

          {showContact && (
            <div className="absolute right-0 mt-3 w-80 glass rounded-xl p-4 border border-primary/20 shadow-xl animate-fade-in">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const isClickable = !!item.href;
                const canCopy = item.label !== "Location"; // Location cannot be copied

                return (
                  <div key={index} className="flex items-center justify-between mb-3 last:mb-0 gap-3">
                    <div className="flex items-center gap-3">
                      <Icon size={18} />
                      {isClickable ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition">
                          {item.label}: {item.value}
                        </a>
                      ) : (
                        <span className="text-sm font-medium">{item.label}: {item.value}</span>
                      )}
                    </div>

                    {canCopy && (
                      <button
                        onClick={() => handleCopy(item, index)}
                        className="p-1 rounded-full hover:bg-primary/20 transition"
                      >
                        {copiedIndex === index ? <Check size={16} /> : <Clipboard size={16} />}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Mobile Button */}
        <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenuOpen(prev => !prev)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Contact */}
            <div className="border-t border-primary/20 pt-4 flex flex-col gap-2">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const isClickable = !!item.href;
                const canCopy = item.label !== "Location";

                return (
                  <div key={index} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Icon size={18} />
                      {isClickable ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition">
                          {item.label}: {item.value}
                        </a>
                      ) : (
                        <span className="text-sm">{item.label}: {item.value}</span>
                      )}
                    </div>

                    {canCopy && (
                      <button
                        onClick={() => handleCopy(item, index)}
                        className="p-1 rounded-full hover:bg-primary/20 transition"
                      >
                        {copiedIndex === index ? <Check size={16} /> : <Clipboard size={16} />}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};