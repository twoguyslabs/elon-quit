import { motion } from "framer-motion";
import { FaFire, FaBomb, FaSkull, FaExclamationTriangle } from "react-icons/fa";

interface RoadmapStageProps {
  number: number;
  title: string;
  items: string[];
  icon: React.ReactNode;
}

const RoadmapStage = ({ number, title, items, icon }: RoadmapStageProps) => {
  return (
    <motion.div
      className="angry-card relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-accent-red opacity-30"></div>

      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-red font-bold text-white">
          {number}
        </div>
        <div>
          <div className="text-sm font-bold text-accent-red">PHASE {number}</div>
          <div className="font-comic text-xl text-white">{title}</div>
        </div>
      </div>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="mt-1 text-accent-red">{icon}</div>
            <span className="text-sm text-white">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const RoadmapSection = () => {
  const roadmapData = [
    {
      number: 1,
      title: "INITIAL RAGE",
      items: [
        "Token sale with maximum fury",
        "Social channels filled with rage",
        "Community building of angry investors",
        "First DEX listings",
      ],
      icon: <FaFire size={14} />,
    },
    {
      number: 2,
      title: "EXPLOSION",
      items: [
        "Major CEX listings with fury",
        "Marketing blitz to spread the rage",
        "Community events for the angriest holders",
      ],
      icon: <FaBomb size={14} />,
    },
  ];

  return (
    <section id="roadmap" className="relative bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <div className="section-tag mb-2">Our Angry Path</div>
          <h2 className="section-heading text-4xl md:text-6xl">
            RAGE
            <br />
            MAP
          </h2>
          <p className="mt-2 text-white/80">We don't follow rules. We make them.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {roadmapData.map((stage, index) => (
            <RoadmapStage
              key={index}
              number={stage.number}
              title={stage.title}
              items={stage.items}
              icon={stage.icon}
            />
          ))}
        </div>

        {/* Action button */}
        <div className="mt-12 flex justify-center">
          <motion.a
            href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x426A9f960F76F3F5F64D68735762e4e1b8C56208"
            className="angry-button inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: ["3px 3px 0px #121212", "5px 5px 0px #121212", "3px 3px 0px #121212"],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
          >
            <FaFire /> JOIN THE RAGE NOW
          </motion.a>
        </div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute right-10 top-20 h-32 w-32 rounded-full bg-accent-red/20 blur-xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 h-40 w-40 rounded-full bg-accent-red/15 blur-xl"
          animate={{
            y: [0, -40, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 7,
          }}
        />
      </div>
    </section>
  );
};

export default RoadmapSection;
