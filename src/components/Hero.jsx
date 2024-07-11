import { motion } from "framer-motion";

import { styles } from "../styles";
import { RevealLinks } from "./RevealLinks";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[250px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
       

        <RevealLinks/>
      </div>



      <div className='absolute lg:bottom-32 w-full flex justify-center items-center xxs:bottom-0 sm:bottom-32 md:bottom-32'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl mb-20 border-4 border-secondary flex justify-center items-start p-2 '>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
