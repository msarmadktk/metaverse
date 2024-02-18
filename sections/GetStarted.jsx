'use client';


import { motion } from 'framer-motion';
import { StartSteps, TitleText, TypingText } from '../components';
import { startingFeatures } from '../constants';
import styles from '../styles';
import { fadeIn, staggerContainer, planetVariants } from '../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} md:mx-auto ml-[1rem]  relative z-10`}>

    <motion.div variants={staggerContainer}  initial="hidden" whileInView='show' viewport={{once : false , amount : 0.25}} className={`flex md:flex-row flex-col ${styles.innerWidth} ${styles.xPaddings} justify-start items-center gap-8 `}>
      <motion.div variants={planetVariants('left')}className=' flex-1'  >

        <motion.img src="/get-started.png" variants={fadeIn('right' , 'tween' , '0.3' , '1')} alt="" />

      </motion.div>

      <motion.div variants={staggerContainer} className='flex flex-col justify-start items-start flex-[0.75] '>
        <TypingText title={"| How Metaverse work"} textStyles={"text-left mb-8"} />
        <TitleText title={"Get started with just a few clicks"} textStyles={"w-[471px] md:text-[60px] sm:text-[50px] text-[40px] leading-[40px] md:leading-[70px] sm:leading-[50px]"}/>

        {
          startingFeatures.map((obj , index) => (
            <StartSteps index={index} text={obj} />
          ))
        }        

      </motion.div>

    </motion.div>

  </section>
);

export default GetStarted;
