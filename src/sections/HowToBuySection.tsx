import React from "react";
import { motion } from "framer-motion";
import { FaFire, FaExclamation, FaExclamationTriangle } from "react-icons/fa";

const HowToBuySection = () => {
  return (
    <section id="how-to-buy" className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12 text-center">
          <div className="section-tag mb-2">Ready To</div>
          <h2 className="text-stroke mb-3 font-comic text-5xl text-white md:text-6xl">RAGE BUY?</h2>
          <p className="mx-auto max-w-2xl text-white">
            Don't overthink it. The steps below are so simple, even your grandma could do it. Stop
            making excuses and start making rage-fueled gains!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Side - Text content */}
          <div>
            <motion.div className="angry-card relative mb-8" whileHover={{ scale: 1.02 }}>
              <div className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-accent-red font-bold text-white">
                1
              </div>

              <h3 className="mb-4 flex items-center gap-2 font-comic text-xl text-white md:text-2xl">
                <FaExclamation className="text-accent-red" /> GET A WALLET
              </h3>

              <p className="text-sm text-white/80">
                Download MetaMask or Trust Wallet. If you don't know how to do this, maybe crypto
                isn't for you. But we believe in you! Set it up, secure it, and get ready to RAGE!
              </p>
            </motion.div>

            <motion.div className="angry-card relative mb-8" whileHover={{ scale: 1.02 }}>
              <div className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-accent-red font-bold text-white">
                2
              </div>

              <h3 className="mb-4 flex items-center gap-2 font-comic text-xl text-white md:text-2xl">
                <FaExclamation className="text-accent-red" /> BUY SOL
              </h3>

              <p className="text-sm text-white/80">
                Buy SOL from an exchange and send it to your wallet. We're on Solana because we're not
                maximalists - we're RAGE-imalists. More chains coming soon!
              </p>
            </motion.div>

            <motion.div className="angry-card relative" whileHover={{ scale: 1.02 }}>
              <div className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-accent-red font-bold text-white">
                3
              </div>

              <h3 className="mb-4 flex items-center gap-2 font-comic text-xl text-white md:text-2xl">
                <FaExclamation className="text-accent-red" /> SWAP FOR $QUIT
              </h3>

              <p className="text-sm text-white/80">
                Go to Uniswap or PancakeSwap, paste our contract address, set your slippage to 0.5%
                (yes, we have LOW fees because we're not greedy), and RAGE BUY as much as you can
                handle!
              </p>

              <div className="mt-6">
                <motion.button
                  className="angry-button inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFire /> RAGE BUY NOW
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Warning image */}
          <div className="flex flex-col items-center justify-center">
            <motion.div
              className="relative mb-8 w-full max-w-md"
              animate={{
                rotate: [-1, 1, -1],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
            >
              <div className="-rotate-2 transform rounded-lg border-2 border-black bg-accent-red p-6 text-center">
                <FaExclamationTriangle className="mx-auto mb-4 text-4xl text-white" />
                <h3 className="mb-2 font-comic text-2xl text-white">WARNING!</h3>
                <p className="text-sm text-white">
                  Buying $QUIT may cause extreme euphoria, uncontrollable excitement, and the urge
                  to tell everyone about how much you're making. Side effects include constant
                  portfolio checking and newfound confidence.
                </p>
              </div>
            </motion.div>

            <motion.img
              src="https://ext.same-assets.com/1645689267/2944662709.png"
              alt="Angry character with money"
              className="w-full max-w-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -15, 0],
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 2,
                },
                opacity: { duration: 0.5 },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuySection;
