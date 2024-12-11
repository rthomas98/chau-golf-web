"use client";

import { useState } from "react";
import { Menu } from "@headlessui/react";
import { RxChevronDown, RxChevronRight } from "react-icons/rx";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import { usePage } from '@inertiajs/react';

/**
 * @typedef {Object} ImageShape
 * @property {string} url
 * @property {string} src
 * @property {string} alt
 */

/**
 * @typedef {Object} ButtonShape
 * @property {*} children
 * @property {function} onClick
 * @property {string} className
 * @property {string} href
 */

/**
 * @typedef {Object} MegaMenuLinkShape
 * @property {string} url
 * @property {ImageShape} image
 * @property {string} title
 * @property {string} description
 * @property {ButtonShape} [button]
 */

/**
 * @typedef {Object} CategoryLinkShape
 * @property {string} title
 * @property {Array<MegaMenuLinkShape>} links
 */

/**
 * @typedef {Object} MegaMenuLinkPropsShape
 * @property {Array<CategoryLinkShape>} categoryLinks
 * @property {Object} featuredSections
 * @property {string} featuredSections.title
 * @property {Array<MegaMenuLinkShape>} featuredSections.links
 * @property {ButtonShape} button
 */

/**
 * @typedef {Object} LinkPropsShape
 * @property {string} title
 * @property {string} url
 * @property {MegaMenuLinkPropsShape} [megaMenu]
 */

export const Navbar5 = ({ logo, links, buttons, ...props }) => {
  const { url } = usePage();
  const { logo: logoProp, links: linksProp, buttons: buttonsProp } = {
    logo: Navbar5Defaults.logo,
    links: Navbar5Defaults.links,
    buttons: Navbar5Defaults.buttons,
    ...props,
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = false; // useMediaQuery("(max-width: 991px)");

  const isActive = (path) => {
    if (path === '/') {
      return url === '/';
    }
    return url.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-pearlbush bg-viridiangreen lg:min-h-18 lg:px-[5%]">
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="lg:flex">
          <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
            <a href="/" className="text-2xl font-headers text-white hover:text-tahitigold transition-colors">
              ChauChau Golf
            </a>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-white"
                animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={topLineVariants}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-white"
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={middleLineVariants}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-white"
                animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={bottomLineVariants}
              />
            </button>
          </div>
          <motion.div
            animate={isMobileMenuOpen ? "open" : "closed"}
            initial="closed"
            variants={heightVariants}
            transition={{ duration: 0.4 }}
            className="overflow-auto px-[5%] lg:ml-6 lg:flex lg:items-center lg:px-0"
          >
            <div className="space-y-4 py-6 lg:hidden">
              {linksProp.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  className={`block text-base font-medium transition-colors ${
                    isActive(link.url) 
                      ? 'text-tahitigold' 
                      : 'text-white hover:text-tahitigold'
                  }`}
                >
                  {link.title}
                </a>
              ))}
              <div className="mt-6 flex w-full flex-col gap-y-4">
                {buttonsProp.map((button, index) => (
                  <a key={index} href={button.href} className={button.className}>
                    {button.children}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          <div className="hidden lg:ml-8 lg:flex lg:items-center lg:gap-8">
            {linksProp.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className={`text-base font-medium transition-colors ${
                  isActive(link.url) 
                    ? 'text-tahitigold' 
                    : 'text-white hover:text-tahitigold'
                }`}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          {buttonsProp.map((button, index) => (
            <a key={index} href={button.href} className={button.className}>
              {button.children}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

Navbar5.propTypes = {
  logo: PropTypes.shape({
    url: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  links: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    megaMenu: PropTypes.shape({
      categoryLinks: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        links: PropTypes.arrayOf(PropTypes.shape({
          url: PropTypes.string,
          image: PropTypes.shape({
            src: PropTypes.string,
            alt: PropTypes.string,
          }),
          title: PropTypes.string,
          description: PropTypes.string,
          button: PropTypes.shape({
            children: PropTypes.node,
            className: PropTypes.string,
          }),
        })),
      })),
      featuredSections: PropTypes.shape({
        title: PropTypes.string,
        links: PropTypes.arrayOf(PropTypes.shape({
          url: PropTypes.string,
          image: PropTypes.shape({
            src: PropTypes.string,
            alt: PropTypes.string,
          }),
          title: PropTypes.string,
          description: PropTypes.string,
          button: PropTypes.shape({
            children: PropTypes.node,
            className: PropTypes.string,
          }),
        })),
      }),
      button: PropTypes.shape({
        children: PropTypes.node,
        className: PropTypes.string,
      }),
    }),
  })),
  buttons: PropTypes.arrayOf(PropTypes.shape({
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
  })),
};

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {boolean} props.isMobile
 * @param {Object} props.megaMenu
 * @param {Array<{title: string, links: Array<{url: string, image: {src: string, alt: string}, title: string, description: string, button?: {children: any, className: string}}>}>} props.megaMenu.categoryLinks
 * @param {Object} props.megaMenu.featuredSections
 * @param {Object} props.megaMenu.button
 */
const SubMenu = ({ title, isMobile, megaMenu }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <Menu>
      <Menu.Button
        className="flex w-full items-center justify-between gap-x-2 py-3 text-center text-md lg:w-auto lg:flex-none lg:justify-start lg:px-4 lg:py-6 lg:text-base"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <motion.span
          variants={{
            rotated: { rotate: 180 },
            initial: { rotate: 0 },
          }}
          animate={isDropdownOpen ? "rotated" : "initial"}
          transition={{ duration: 0.3 }}
        >
          <RxChevronDown />
        </motion.span>
      </Menu.Button>
      <Menu.Items
        as={motion.div}
        variants={{
          open: {
            visibility: "visible",
            opacity: 1,
            height: "var(--height-open, auto)",
          },
          close: {
            visibility: "hidden",
            opacity: "0",
            height: "var(--height-close, 0)",
          },
        }}
        initial="close"
        exit="close"
        animate={isDropdownOpen ? "open" : "close"}
        transition={{ duration: 0.3 }}
        className="bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-background-primary lg:absolute lg:w-[100vw] lg:border-b lg:border-border-primary lg:px-[5%] lg:[--height-close:auto]"
      >
        <div className="mx-auto flex size-full max-w-full items-center justify-between">
          <div className="w-full lg:flex">
            <div className="grid flex-1 gap-x-8 gap-y-6 py-4 pr-8 md:grid-cols-2 md:px-0 md:py-8 lg:py-8 lg:pr-8">
              {megaMenu.categoryLinks.map((group, index) => (
                <div
                  key={index}
                  className="grid auto-rows-max grid-cols-1 grid-rows-[max-content] gap-y-2 md:gap-y-4"
                >
                  <h4 className="text-sm font-semibold leading-[1.3]">{group.title}</h4>
                  {group.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                    >
                      <div className="flex size-6 flex-col items-center justify-center">
                        <img src={link.image.src} alt={link.image.alt} />
                      </div>
                      <div className="flex flex-col items-start justify-center">
                        <h5 className="font-semibold">{link.title}</h5>
                        <p className="hidden text-sm md:block">{link.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              ))}
            </div>
            <div className="max-w-none relative flex flex-1 p-6 md:py-8 md:pl-8 md:pr-0 lg:max-w-md">
              <div className="relative z-10 grid w-full auto-cols-fr auto-rows-max grid-cols-1 grid-rows-[max-content_max-content] gap-4">
                <h4 className="text-sm font-semibold leading-[1.3]">
                  {megaMenu.featuredSections.title}
                </h4>
                <div className="grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start gap-y-2 lg:grid-rows-[auto]">
                  {megaMenu.featuredSections.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="flex auto-cols-fr grid-cols-[0.6fr_1fr] flex-col gap-x-6 py-2 md:grid"
                    >
                      <div className="relative w-full pt-[66.66%]">
                        <img
                          src={link.image.src}
                          alt={link.image.alt}
                          className="absolute inset-0 size-full object-cover"
                        />
                      </div>
                      <div className="rt-4 mt-4 flex flex-col justify-start md:mt-0">
                        <h5 className="mb-1 font-semibold">{link.title}</h5>
                        <p className="text-sm">{link.description}</p>
                        {link.button && (
                          <div className="mt-1.5">
                            <button {...link.button} className="text-sm underline">
                              {link.button.children}
                            </button>
                          </div>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
                <div className="flex items-center">
                  <button {...megaMenu.button}>{megaMenu.button.children}</button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-auto top-0 min-w-full bg-background-secondary lg:min-w-[100vw]" />
            </div>
          </div>
        </div>
      </Menu.Items>
    </Menu>
  );
};

export const Navbar5Defaults = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo image",
  },
  links: [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about" },
    { title: "Membership", url: "/membership" },
    { title: "Courses & Partners", url: "/courses" },
    { title: "Contact Us", url: "/contact" },
  ],
  buttons: [
    {
      children: "Login",
      className: "text-white hover:text-tahitigold transition-colors font-medium",
      href: route('login')
    },
    {
      children: "Register",
      className: "rounded-full border-2 border-tahitigold bg-tahitigold px-6 py-2 text-white hover:bg-transparent hover:text-tahitigold transition-all font-medium",
      href: route('register')
    },
  ],
};

const heightVariants = {
  open: {
    height: "var(--height-open, 100dvh)",
  },
  closed: {
    height: "var(--height-closed, 0)",
  },
};

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};
