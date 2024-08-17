import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { RevealLinks } from "./RevealLinks";


const Hero = () => {
  return (
    <section className={`relative w-full mx-auto`}>
       <div
        className={`absolute inset-0  mx-auto `}
      >
       

        <RevealLinks/>
      </div>

        

      <div className='absolute w-full h-full flex justify-center items-center bottom-64 '>
        <a href='#about'>
          <div className='w-[35px] h-[64px] mt-[1600px] xxs:mt-[1400px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
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

export default SectionWrapper(Hero, "");

