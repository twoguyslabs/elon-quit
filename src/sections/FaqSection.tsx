import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFire } from 'react-icons/fa';

type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  index: number;
};

const FaqItem = ({ question, answer, isOpen, toggleOpen, index }: FaqItemProps) => {
  return (
    <motion.div
      className="bg-accent-darkBlue p-4 rounded-lg cursor-pointer border-2 border-black overflow-hidden"
      whileHover={{ scale: 1.02 }}
      onClick={toggleOpen}
    >
      <div className="flex items-start gap-3">
        <div className="bg-accent-red text-white w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm border border-black">
          {index + 1}
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-center">
            <h3 className="text-white font-medium mb-1 pr-4">{question}</h3>
            <div className="text-accent-red">
              {isOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-white/80 text-sm pt-2">{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqData = [
    {
      question: "What makes $QUIT different from other tokens?",
      answer: "Unlike other tokens that promise the moon and deliver nothing, $QUIT is built on pure RAGE. We're angry at the state of crypto, and we're channeling that fury into the most honest, no-BS token ever created."
    },
    {
      question: "Is this just another meme coin?",
      answer: "Hell no. We have actual utility, an experienced team of pissed-off devs, and a long-term vision. We're not here to pump and dump - we're here to create a movement of angry investors who demand better."
    },
    {
      question: "How high can $QUIT go?",
      answer: "We don't make price predictions because we're not bullshitters. But consider this: when you combine genuine utility with the most viral angry branding in crypto, you get something that can't be ignored. Our rage is limitless."
    },
    {
      question: "Who's behind $QUIT?",
      answer: "A team of crypto veterans who've been in the trenches since 2017. We've seen every scam, every hollow promise, and every rugpull. We're sick of it. Our identities are public - no hiding behind anonymous profiles here."
    },
    {
      question: "What's the total supply?",
      answer: "1 billion $QUIT tokens. 50% for the community, 25% for development, 15% for marketing, and 10% for token burns. Unlike other projects, we're actually burning tokens on schedule."
    },
    {
      question: "When lambo?",
      answer: "If you're here asking 'when lambo,' you're part of the problem. We're building something legitimate that will last. But since you asked... probably sooner than you think. RAGE makes everything happen faster."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-primary py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="section-tag mb-2">Questions?</div>
          <h2 className="section-heading text-4xl md:text-6xl mb-3">
            ANGRY<br />ANSWERS
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Got questions? We've got answers. And yes, they're as blunt and honest as everything else we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFaq(index)}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href="https://pump.fun/coin/HQDVsRB7E3iHpSeErCEUhcE8RthZA3fFGPa3Zcsjpump"
            className="angry-button inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFire /> JOIN THE RAGE
          </motion.a>
        </div>
      </div>

      {/* Background elements */}
      <motion.div
        className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent-red/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 8
        }}
      />
    </section>
  );
};

export default FaqSection;
