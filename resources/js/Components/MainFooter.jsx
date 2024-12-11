"use client";

import { useState } from "react";

export function Footer() {
  const {
    logo,
    inputPlaceholder,
    button,
    termsAndConditions,
    footerText,
    columnLinks,
    footerLinks,
  } = {
    logo: {
      url: "#",
      src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
      alt: "Logo image",
    },
    inputPlaceholder: "Enter your email",
    button: {
      title: "Subscribe",
      variant: "secondary",
      size: "sm",
    },
    termsAndConditions: `
    <p class='text-xs'>
      By subscribing you agree to with our 
      <a href='#' class='underline'>Privacy Policy</a>.
    </p>
    `,
    columnLinks: [
      {
        title: "About Us",
        links: [
          { title: "Our Story", url: "#" },
          { title: "Membership", url: "#" },
          { title: "Courses & Partners", url: "#" },
          { title: "Contact Us", url: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { title: "Blog", url: "#" },
          { title: "Events", url: "#" },
          { title: "FAQ", url: "#" },
          { title: "Support", url: "#" },
        ],
      },
      {
        title: "Legal",
        links: [
          { title: "Privacy Policy", url: "#" },
          { title: "Terms of Service", url: "#" },
          { title: "Cookie Settings", url: "#" },
        ],
      },
    ],
    footerText: `&copy; ${new Date().getFullYear()} ChauChau Golf. All rights reserved.`,
    footerLinks: [
      { title: "Privacy Policy", url: "#" },
      { title: "Terms of Service", url: "#" },
      { title: "Cookies Settings", url: "#" },
    ],
  };

  const [emailInput, setEmailInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      emailInput,
    });
  };

  return (
    <footer className="bg-viridiangreen px-[5%] py-12 text-white md:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-[2fr_1fr]">
          {/* Logo and Links Section */}
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8">
            <div className="col-span-full mb-8">
              <a href="/" className="text-2xl font-bold text-tahitigold">
                ChauChau Golf
              </a>
            </div>
            
            {columnLinks.map((column, index) => (
              <div key={index} className="flex flex-col space-y-4">
                <h3 className="font-semibold text-tahitigold">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.url}
                        className="text-sm text-white/90 transition-colors hover:text-tahitigold"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="lg:pl-8">
            <h3 className="mb-4 font-semibold text-tahitigold">Stay Updated</h3>
            <p className="mb-4 text-sm text-white/90">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
            <form
              className="mb-3 flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder={inputPlaceholder}
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="flex-1 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder-white/50 focus:border-tahitigold focus:outline-none focus:ring-1 focus:ring-tahitigold"
              />
              <button
                type="submit"
                className="rounded-md bg-tahitigold px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-tahitigold/90"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-white/70">
              By subscribing you agree to our{" "}
              <a href="#" className="text-tahitigold hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 text-sm text-white/70 md:flex-row md:space-y-0">
            <p dangerouslySetInnerHTML={{ __html: footerText }} />
            <div className="flex space-x-6">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="hover:text-tahitigold"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
