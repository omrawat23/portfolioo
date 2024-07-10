"use client"
import styles from '../Zoom/styles.modules.scss?inline';
import image1 from '../../../public/desktop_pc/1.png';
import image2 from '../../../public/desktop_pc/2.png';
import image3 from '../../../public/desktop_pc/3.png';
import image4 from '../../../public/desktop_pc/4.png';
import image5 from '../../../public/desktop_pc/5.png';
import image6 from '../../../public/desktop_pc/6.png';
import SectionWrapper  from "../../hoc/SectionWrapper";
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const Zoom = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        { src: image1, scale: scale4 },
        { src: image2, scale: scale5 },
        { src: image3, scale: scale6 },
        { src: image4, scale: scale8 },
        { src: image5, scale: scale9 },
        // { src: image3, scale: scale8 },
        // { src: image1, scale: scale9 },
    ];

    return (
        
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {pictures.map(({ src, scale }, index) => (
                    <motion.div key={index} style={{ scale }} className={styles.el}>
                        <div className={styles.imageContainer}>
                            <img src={src} alt="image" width={200} height={100}/>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
     
    );
}

export default SectionWrapper(Zoom, "");
