import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const defaultFaqs = [
  {
    question: "What are the tournament dates?",
    answer: "The tournament will be held from [Date] to [Date]. Please check the schedule section for detailed timings of each round and event."
  },
  {
    question: "What is the registration process?",
    answer: "Registration can be completed online through our tournament portal. You'll need to provide your golf handicap, contact information, and complete the payment process."
  },
  {
    question: "What is included in the entry fee?",
    answer: "The entry fee includes access to all tournament rounds, practice facilities, cart rental, tournament gift pack, and admission to the awards ceremony."
  },
  {
    question: "What is the format of play?",
    answer: "The tournament follows a stroke play format over four rounds. Players will be grouped in threesomes for the first two rounds, with cuts made for the final rounds."
  },
  {
    question: "Are caddies available?",
    answer: "Yes, professional caddies are available for hire. Please request a caddie during registration or contact our tournament office for arrangements."
  }
];

const FAQ7 = ({ faqs = defaultFaqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 text-lg text-black/70 md:mb-16 lg:mb-20 md:text-xl"
          >
            Find answers to common questions about the tournament.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto max-w-3xl divide-y divide-gray/10"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-6"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-start justify-between text-left"
              >
                <span className="text-lg font-semibold text-black md:text-xl">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-6 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gray"
                >
                  <ChevronDown className="h-5 w-5 text-black" />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-black/70 md:text-lg">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

FAQ7.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ),
};

export default FAQ7;
