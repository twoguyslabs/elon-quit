import { motion } from "framer-motion";
import { FaFire, FaUsers, FaBriefcase, FaRocket } from "react-icons/fa";

const TokenomicsSection = () => {
  const tokenomicsData = [
    { name: "Community Rage", percentage: 50, color: "var(--tw-color-chart-1)", icon: <FaUsers /> },
    {
      name: "Development",
      percentage: 25,
      color: "var(--tw-color-chart-4)",
      icon: <FaBriefcase />,
    },
    { name: "Marketing", percentage: 15, color: "var(--tw-color-chart-3)", icon: <FaRocket /> },
    { name: "Burn Mechanism", percentage: 10, color: "var(--tw-color-chart-2)", icon: <FaFire /> },
  ];

  return (
    <section id="tokenomics" className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <div className="section-tag mb-2">Get Ready For</div>
          <h2 className="section-heading text-4xl md:text-6xl">
            ANGRY
            <br />
            NUMBERS
          </h2>
        </div>

        {/* Ticker strip */}
        <div className="mb-12 overflow-hidden rounded-lg border-b-2 border-t-2 border-black bg-accent-darkBlue py-3">
          <motion.div
            className="flex space-x-8 whitespace-nowrap"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <span key={i} className="text-xl font-bold uppercase text-accent-red">
                  $QUIT &nbsp;•&nbsp; RAGE &nbsp;•&nbsp; $QUIT &nbsp;•&nbsp; FURY
                </span>
              ))}
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-center gap-12 lg:flex-row">
          {/* Chart visualization - Angry style */}
          <div className="flex w-full justify-center lg:w-1/2">
            <img src="/src/assets/tokenomics-img.png" alt="Tokenomics" className="w-full max-w-md" />
          </div>

          {/* Right side - Description */}
          <div className="relative w-full rounded-lg border-2 border-black bg-accent-darkBlue p-6 lg:w-1/2">
            <motion.div
              className="absolute -right-3 -top-3 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-accent-red text-white"
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
            >
              <FaFire size={24} />
            </motion.div>

            <h3 className="mb-4 font-comic text-2xl text-white">RAGE-DRIVEN TOKENOMICS</h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-accent-red p-1 text-white">
                  <FaUsers size={14} />
                </div>
                <div>
                  <span className="font-bold text-white">50% Community Rage:</span>
                  <p className="text-sm text-white/70">
                    Half our supply goes directly to our community of angry traders. The power
                    belongs to YOU.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-accent-red p-1 text-white">
                  <FaRocket size={14} />
                </div>
                <div>
                  <span className="font-bold text-white">25% Development:</span>
                  <p className="text-sm text-white/70">
                    Spreading the rage far and wide. We're not quiet about our mission.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-accent-red p-1 text-white">
                  <FaFire size={14} />
                </div>
                <div>
                  <span className="font-bold text-white">15% Marketing:</span>
                  <p className="text-sm text-white/70">
                    Airdropping 10% of the supply to the community.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-accent-red p-1 text-white">
                  <FaBriefcase size={14} />
                </div>
                <div>
                  <span className="font-bold text-white">10% Burn:</span>
                  <p className="text-sm text-white/70">
                    Team members will receive 10% of the supply. Fully vested.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
