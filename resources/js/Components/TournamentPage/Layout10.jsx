import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const defaultSponsors = {
  tiers: [
    {
      name: "Platinum Sponsors",
      sponsors: [
        {
          name: "GolfTech Pro",
          logo: "https://ui-avatars.com/api/?name=GolfTech+Pro&background=059669&color=fff&size=128",
          contribution: "Official Technology Partner"
        },
        {
          name: "Elite Sports",
          logo: "https://ui-avatars.com/api/?name=Elite+Sports&background=059669&color=fff&size=128",
          contribution: "Equipment Sponsor"
        },
        {
          name: "Premier Golf",
          logo: "https://ui-avatars.com/api/?name=Premier+Golf&background=059669&color=fff&size=128",
          contribution: "Tournament Partner"
        }
      ]
    },
    {
      name: "Gold Sponsors",
      sponsors: [
        {
          name: "Pro Shop Direct",
          logo: "https://ui-avatars.com/api/?name=Pro+Shop&background=059669&color=fff&size=128",
          contribution: "Retail Partner"
        },
        {
          name: "Golf Gear Co",
          logo: "https://ui-avatars.com/api/?name=Golf+Gear&background=059669&color=fff&size=128",
          contribution: "Equipment Provider"
        },
        {
          name: "Golf Plus",
          logo: "https://ui-avatars.com/api/?name=Golf+Plus&background=059669&color=fff&size=128",
          contribution: "Training Equipment"
        }
      ]
    },
    {
      name: "Silver Sponsors",
      sponsors: [
        {
          name: "Local Links",
          logo: "https://ui-avatars.com/api/?name=Local+Links&background=059669&color=fff&size=128",
          contribution: "Community Partner"
        },
        {
          name: "Golf Academy",
          logo: "https://ui-avatars.com/api/?name=Golf+Academy&background=059669&color=fff&size=128",
          contribution: "Training Partner"
        }
      ]
    }
  ],
  becomeASponsor: {
    description: "Join our growing family of sponsors and help shape the future of golf tournaments.",
    contactLink: "/contact"
  }
};

const Layout10 = ({ sponsors = defaultSponsors }) => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-[5%]">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-black md:text-5xl lg:text-6xl"
          >
            Our Sponsors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-black/70"
          >
            We're proud to partner with these amazing organizations to bring you an exceptional tournament experience.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-16"
        >
          <div className="grid grid-cols-1 items-start gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
            {sponsors.tiers.map((tier, tierIndex) => (
              <motion.div
                key={tierIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: tierIndex * 0.1 }}
                className="rounded-lg border border-chaugreen/20 bg-white p-8 shadow-sm"
              >
                <div className="text-center">
                  <h3 className="text-xl font-semibold leading-8 text-black">
                    {tier.name}
                  </h3>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  {tier.sponsors.map((sponsor, sponsorIndex) => (
                    <motion.div
                      key={sponsorIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.1 * sponsorIndex,
                      }}
                      className="group flex flex-col items-center gap-y-4"
                    >
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          className="h-20 w-auto object-contain transition-all duration-300 group-hover:scale-110"
                          src={sponsor.logo}
                          alt={sponsor.name}
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="text-sm font-semibold text-black">
                          {sponsor.name}
                        </h4>
                        {sponsor.contribution && (
                          <p className="mt-1 text-xs text-black/70">
                            {sponsor.contribution}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {sponsors.becomeASponsor && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 rounded-lg bg-gray p-8 text-center"
            >
              <h3 className="text-2xl font-semibold text-black">
                Interested in Becoming a Sponsor?
              </h3>
              <p className="mt-4 text-black/70">
                {sponsors.becomeASponsor.description}
              </p>
              <a
                href={sponsors.becomeASponsor.contactLink}
                className="mt-6 inline-flex items-center rounded-lg bg-chaugreen px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-black"
              >
                Contact Us About Sponsorship
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

Layout10.propTypes = {
  sponsors: PropTypes.shape({
    tiers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        sponsors: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            logo: PropTypes.string.isRequired,
            contribution: PropTypes.string,
          })
        ).isRequired,
      })
    ).isRequired,
    becomeASponsor: PropTypes.shape({
      description: PropTypes.string.isRequired,
      contactLink: PropTypes.string.isRequired,
    }),
  }),
};

export default Layout10;
