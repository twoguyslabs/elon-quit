import { motion } from "framer-motion";
import { FaTelegram, FaDiscord, FaTwitter, FaReddit, FaFire, FaChevronUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t-2 border-black bg-primary py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Back to top button */}
        <div className="mb-12 flex justify-center">
          <motion.button
            onClick={scrollToTop}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-accent-red text-white"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronUp size={20} />
          </motion.button>
        </div>

        {/* Footer top with logo and navigation */}
        <div className="mb-12 flex flex-col justify-between md:flex-row">
          <div className="mb-8 flex items-center font-comic text-4xl text-white md:mb-0 md:text-6xl">
            <span className="mr-2 text-accent-red">$</span>QUIT
            <motion.span
              className="ml-2"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaFire className="text-accent-red" />
            </motion.span>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-6">
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
            <a
              href="#faq"
              className="font-medium text-white transition-colors hover:text-accent-red"
            >
              FAQ
            </a>
          </div>
        </div>

        {/* Social icons */}
        <div className="mb-12 flex justify-center space-x-6">
          <motion.a
            href="https://t.me/elonquitchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors hover:text-accent-red"
            whileHover={{ scale: 1.2, y: -5 }}
          >
            <FaTelegram size={28} />
          </motion.a>
          <motion.a
            href="https://x.com/elonquit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors hover:text-accent-red"
            whileHover={{ scale: 1.2, y: -5 }}
          >
            <FaTwitter size={28} />
          </motion.a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="mb-1 text-white">$QUIT HOLDINGS LLC © 2025</p>
          <p className="text-xs font-bold uppercase text-white">CRYPTO WITH ATTITUDE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
