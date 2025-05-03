import { motion } from "framer-motion";
import { useState } from "react";
import { FaFistRaised, FaPowerOff } from "react-icons/fa";
import quitIllustation from "../assets/quit-illustration.png";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const tokenAddress = "0xa3F829501eb03A0A059fEFA21BEae95786c3693b";

  const handleCopyClick = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative bg-primary pb-16 pt-24 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center md:flex-row">
          {/* Left side content */}
          <div className="mb-10 w-full md:mb-0 md:w-1/2">
            <div className="section-tag mb-3"># Elon Finally QUIT – And So Should You!</div>
            <h1 className="text-stroke mb-4 font-comic text-6xl text-white md:text-8xl lg:text-9xl">
              $QUIT
            </h1>
            <p className="mb-8 max-w-md text-sm font-medium text-white md:text-base">
              After realizing the Cybertruck was just a stainless-steel disaster, Elon QUIT Tesla,
              QUIT crypto, and left us with his final legacy… the $QUIT token!
            </p>

            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="https://sale.elonquit.com/"
                className="angry-button inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPowerOff /> RAGE BUY NOW
              </motion.a>
              <motion.a
                href="https://t.me/elonquitchannel"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-2 font-medium text-white"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFistRaised /> JOIN THE RAGE
              </motion.a>
            </div>

            {/* Token address */}
            <div className="flex max-w-md items-center rounded-lg border-2 border-black bg-accent-darkBlue p-3">
              <div className="mr-2 flex-grow overflow-hidden">
                <p className="mb-1 text-xs text-white/70">Token address:</p>
                <p className="truncate text-xs text-white">{tokenAddress}</p>
              </div>
              <motion.button
                onClick={handleCopyClick}
                className="rounded-md border border-black bg-accent-red px-3 py-1 text-xs text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {copied ? "Copied!" : "Copy to Clipboard"}
              </motion.button>
            </div>
          </div>

          {/* Right side image */}
          <div className="flex w-full justify-center md:w-1/2">
            <motion.img
              src={quitIllustation}
              alt="Angry Crypto Character"
              className="w-full max-w-md"
              animate={{
                scale: [1, 1.02, 1],
                rotate: [-1, 1, -1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
            />
          </div>
        </div>

        {/* Exchange buttons */}
        <div className="mt-12 md:mt-24">
          <h2 className="text-stroke mb-8 text-center font-comic text-4xl text-white md:text-5xl">
            AVAILABLE
            <br />
            ON:
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {/* <motion.a
              href="https://www.binance.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="-rotate-1 transform rounded-lg border-2 border-black bg-accent-red px-6 py-2 font-bold text-white"
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              Binance
            </motion.a> */}
            <motion.a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="rotate-1 transform rounded-lg border-2 border-black bg-accent-red px-6 py-2 font-bold text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Coming Soon to OctaSwap
            </motion.a>
          </div>

          <motion.div
            className="mt-12 text-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="rounded-lg border-2 border-black bg-white px-4 py-1 text-2xl font-bold text-accent-red">
              RAGE MODE ON!
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
