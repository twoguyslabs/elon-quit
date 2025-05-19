import { useState } from "react";
import { motion } from "framer-motion";
import { FaTelegram, FaDiscord, FaTwitter, FaReddit } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b-2 border-black bg-primary px-4 py-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="flex items-center font-comic text-2xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
        >
          <span className="mr-1 text-accent-red">$</span>QUIT
        </motion.a>

        {/* Social Links - Desktop */}
        <div className="hidden gap-x-10 lg:flex">
          <a
            href="#about"
            className="font-medium text-white transition-colors hover:text-accent-red"
          >
            ABOUT
          </a>
          <a
            href="#features"
            className="font-medium text-white transition-colors hover:text-accent-red"
          >
            FURY
          </a>
          <a
            href="#tokenomics"
            className="font-medium text-white transition-colors hover:text-accent-red"
          >
            NUMBERS
          </a>
          <a
            href="#roadmap"
            className="font-medium text-white transition-colors hover:text-accent-red"
          >
            RAGEMAP
          </a>
          <a
            href="#how-to-buy"
            className="font-medium text-white transition-colors hover:text-accent-red"
          >
            HOW TO BUY
          </a>
          <a href="#faq" className="font-medium text-white transition-colors hover:text-accent-red">
            FAQ
          </a>
        </div>

        {/* Buy Button */}
        <motion.a
          href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x426A9f960F76F3F5F64D68735762e4e1b8C56208"
          className="angry-button px-5 py-2 text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          RAGE BUY
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className="text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-b-2 border-black bg-accent-darkBlue p-6 lg:hidden"
        >
          <div className="flex flex-col space-y-4">
            <a href="#about" className="font-medium text-white">
              ABOUT
            </a>
            <a href="#features" className="font-medium text-white">
              FURY
            </a>
            <a href="#tokenomics" className="font-medium text-white">
              NUMBERS
            </a>
            <a href="#roadmap" className="font-medium text-white">
              RAGEMAP
            </a>
            <a href="#how-to-buy" className="font-medium text-white">
              HOW TO BUY
            </a>
            <a href="#faq" className="font-medium text-white">
              ANGRY ANSWERS
            </a>

            {/* Social icons in mobile menu */}
            <div className="flex space-x-5 pt-2">
              <a href="https://telegram.org/" className="text-white">
                <FaTelegram size={22} />
              </a>
              <a href="https://discord.com/" className="text-white">
                <FaDiscord size={22} />
              </a>
              <a href="https://twitter.com/" className="text-white">
                <FaTwitter size={22} />
              </a>
              <a href="https://reddit.com/" className="text-white">
                <FaReddit size={22} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
