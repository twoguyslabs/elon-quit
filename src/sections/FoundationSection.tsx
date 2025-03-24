import { motion } from 'framer-motion';
import { FaFire, FaUserNinja, FaBomb } from 'react-icons/fa';

const FeatureCard = ({
  title,
  description,
  icon
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <motion.div
      className="angry-card relative overflow-hidden"
      whileHover={{
        scale: 1.03,
        boxShadow: "7px 7px 0px #121212"
      }}
    >
      <div className="absolute -right-6 -top-6 w-12 h-12 bg-accent-red rounded-full opacity-50"></div>
      <div className="text-accent-red text-3xl mb-4">{icon}</div>
      <h3 className="font-comic text-xl text-white mb-2">{title}</h3>
      <p className="text-white/80 text-sm">{description}</p>
    </motion.div>
  );
};

const FoundationSection = () => {
  return (
    <section id="features" className="bg-primary py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="section-tag mb-2">We're Building On</div>
          <h2 className="section-heading text-4xl md:text-6xl">
            PURE<br />
            <span className="relative inline-block">
              FURY
              <motion.div
                className="absolute -right-16 -top-3 text-accent-red"
                animate={{ rotate: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5
                }}
              >
                <FaFire size={40} />
              </motion.div>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="SAVAGE DEVELOPMENT"
            description="Our development team is obsessed with breaking boundaries. We're not just making another token - we're creating a revolution that will shake the crypto world to its core."
            icon={<FaFire />}
          />

          <FeatureCard
            title="ZERO BULLSHIT POLICY"
            description="We tell it like it is. No fake promises, no unrealistic roadmaps, no rug pulls. Just honest, straightforward rage against the corrupt crypto machine."
            icon={<FaUserNinja />}
          />

          <FeatureCard
            title="EXPLOSIVE GROWTH"
            description="Most tokens promise slow, steady growth. We're not most tokens. $QUIT is designed to explode onto the scene with the force of a thousand angry traders."
            icon={<FaBomb />}
          />
        </div>
      </div>

      {/* Angry decoration elements */}
      <motion.div
        className="absolute left-0 top-1/4 w-24 h-24 bg-accent-red rounded-full opacity-20 blur-xl"
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 30, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 8
        }}
      />
      <motion.div
        className="absolute right-0 bottom-1/4 w-32 h-32 bg-accent-red rounded-full opacity-20 blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 10
        }}
      />
    </section>
  );
};

export default FoundationSection;
