import { motion } from 'framer-motion';
import { FaFire, FaBomb, FaExclamationTriangle } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id="about" className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-center font-comic text-5xl md:text-6xl text-white mb-16 text-stroke">
          WHAT IS THIS RAGE ABOUT?
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - Angry image */}
          <div className="w-full lg:w-1/3 flex justify-center items-center">
            <div className="relative">
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-accent-red/30 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3
                }}
              />
              <motion.img
                src="https://ext.same-assets.com/912005439/346678242.png"
                alt="Angry fist punching"
                className="relative z-10 w-full max-w-xs mx-auto"
                animate={{
                  rotate: [-2, 2, -2]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2
                }}
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="w-full lg:w-2/3">
            <h3 className="font-comic text-2xl md:text-3xl text-accent-red mb-6">
              THE MARKET IS BROKEN. WE'RE FIXING IT!
            </h3>

            <div className="text-white space-y-4 text-sm md:text-base">
              <p className="flex items-start gap-2">
                <FaFire className="text-accent-red mt-1 flex-shrink-0" />
                <span>
                  In a crypto world filled with false promises and pump-and-dump schemes, $QUIT emerges as the
                  voice of rage and rebellion. We're furious about the state of the industry, and we're channeling
                  that anger into the most honest token you'll ever find.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <FaBomb className="text-accent-red mt-1 flex-shrink-0" />
                <span>
                  Our team of pissed-off developers and market veterans have had ENOUGH of the BS. We're creating
                  a token that actually delivers what it promises - pure, unadulterated rage against the machine.
                  No false roadmaps. No empty hype. Just pure, concentrated anger transformed into the most
                  explosive token in crypto.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <FaExclamationTriangle className="text-accent-red mt-1 flex-shrink-0" />
                <span>
                  This isn't just another meme coin. $QUIT is a movement, a statement, and a middle finger to
                  the establishment. When you hold $QUIT, you're not just investing in a token - you're joining
                  a rebellion against everything wrong with crypto today.
                </span>
              </p>
            </div>

            <div className="mt-8">
              <motion.a
                href="#buy"
                className="angry-button inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                JOIN THE REBELLION
              </motion.a>
            </div>
          </div>
        </div>

        {/* Rage Video section */}
        <div className="mt-16 text-center">
          <motion.button
            className="inline-flex items-center gap-2 text-white bg-accent-red py-2 px-6 rounded-lg border-2 border-black font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8" fill="white"></polygon>
            </svg>
            WATCH THE RAGE VIDEO
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
