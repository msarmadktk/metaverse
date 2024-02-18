'use client';



import { motion } from 'framer-motion';
import { NewFeatures, StartSteps, TitleText, TypingText } from '../components';
import { newFeatures } from '../constants';
import styles from '../styles';
import { fadeIn, staggerContainer, planetVariants } from '../utils/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} ${styles.xPaddings} ml-[1rem] ${styles.innerWidth} relative z-10`}>

    <motion.div variants={staggerContainer} initial="hidden" whileInView='show' viewport={{ once: false, amount: 0.25 }} className={`flex md:flex-row flex-col ${styles.innerWidth} ${styles.xPaddings} justify-start items-center gap-8`}>

      <motion.div variants={staggerContainer} className='flex flex-col justify-start items-start '>
        <TypingText title={"| What's New?"} textStyles={"text-left mb-8"} />
        <TitleText title={"What's new about Metaversus?"} textStyles={"w-[471px] md:text-[60px] sm:text-[50px] text-[40px] leading-[40px] md:leading-[70px] sm:leading-[50px]"} />


        <div className='flex'>
          {
            newFeatures.map((obj, index) => (
              <NewFeatures index={index} imgUrl={obj.imgUrl} title={obj.title} text={obj.subtitle} />
            ))
          }

        </div>
      </motion.div>

      <motion.div variants={planetVariants('right')} className=' ml-8 mr-8'  >

        <motion.img src="/whats-new.png" variants={fadeIn('left', 'tween', '0.3', '1')} alt="" />

      </motion.div>


    </motion.div>

  </section>
);

export default WhatsNew;
