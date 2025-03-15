import { motion } from "motion/react";

const UpcomingTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <motion.div
      className="md:mt-30 relative m-5 mt-20 lg:mt-40"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
    >
      <p className="text-alignment mx-auto text-center font-leap text-5xl font-semibold text-leap-dark-green">
        {title}
      </p>
      <div className="relative m-2 mx-auto w-1/6 border-b-4 border-leap-mid-green p-2" />
    </motion.div>
  );
};

export default UpcomingTitle;
