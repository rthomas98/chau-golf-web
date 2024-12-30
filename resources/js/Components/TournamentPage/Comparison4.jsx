import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";

const defaultTiers = [
  {
    name: "Standard Entry",
    price: 299,
    description: "Perfect for individual players seeking a professional tournament experience",
    features: [
      "Tournament entry",
      "Practice round",
      "Cart rental",
      "Range balls",
      "Welcome package"
    ]
  },
  {
    name: "Premium Entry",
    price: 399,
    description: "Enhanced package with additional practice opportunities and premium perks",
    featured: true,
    features: [
      "Tournament entry",
      "Two practice rounds",
      "Cart rental",
      "Unlimited range balls",
      "Premium welcome package",
      "Tournament polo"
    ]
  },
  {
    name: "VIP Package",
    price: 599,
    description: "Ultimate tournament experience with exclusive benefits and unlimited access",
    features: [
      "Tournament entry",
      "Unlimited practice rounds",
      "Cart rental",
      "Unlimited range balls",
      "Luxury welcome package",
      "Tournament polo",
      "VIP parking",
      "Exclusive reception access"
    ]
  }
];

const Comparison4 = ({ tiers = defaultTiers }) => {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-4xl font-bold text-black md:text-5xl lg:text-6xl"
          >
            Tournament Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 text-lg text-black/70 md:mb-16 lg:mb-20 md:text-xl"
          >
            Choose the perfect package that suits your tournament experience.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col overflow-hidden rounded-2xl border ${
                tier.featured
                  ? "border-chaugreen bg-chaugreen/5 shadow-lg"
                  : "border-gray/10 bg-white"
              }`}
            >
              {tier.featured && (
                <div className="absolute -right-20 top-8 rotate-45">
                  <div className="w-[170px] bg-chaugreen py-1 text-center text-sm text-white shadow-sm">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-xl font-semibold text-black">{tier.name}</h3>
                <p className="mt-4 text-base text-black/70">{tier.description}</p>
                <div className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold text-black">${tier.price}</span>
                  <span className="text-sm text-black/70">/player</span>
                </div>

                <ul role="list" className="mt-8 space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className={`h-5 w-5 flex-shrink-0 ${tier.featured ? 'text-chaugreen' : 'text-black/50'}`} />
                      <span className="text-black/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex p-8 pt-0">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-center text-sm font-semibold transition-all ${
                    tier.featured
                      ? "bg-chaugreen text-white hover:bg-black"
                      : "bg-black text-white hover:bg-chaugreen"
                  }`}
                >
                  Select Package
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-base text-black/70">
            All packages include tournament entry, access to practice facilities, and participation in the awards ceremony.
            <br />
            <a href="#contact" className="mt-2 inline-flex items-center gap-1 text-chaugreen hover:text-black">
              Contact us for custom packages <ChevronRight className="h-4 w-4" />
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

Comparison4.propTypes = {
  tiers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
      featured: PropTypes.bool,
    })
  ),
};

export default Comparison4;
