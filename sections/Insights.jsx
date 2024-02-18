'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText , InsightCard } from '../components';
import { insights } from '../constants';

import { fadeIn, staggerContainer } from '../utils/motion';

const Insights = () => (
  <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once:false , amount:0.25}} className={`${styles.paddings} ${styles.xPaddings} flex flex-col`}>
    
    <TypingText title={"| Insight"} textStyles={"text-center"} />
    <TitleText title={"Insight about metaverse"} textStyles={"text-center text-white"}/>

    <div className='flex flex-col'>
      {
        insights.map((obj , index) =>(
          <InsightCard imgUrl={obj.imgUrl} title={obj.title} subtitle={obj.subtitle} index={index} />
        ))
      }

    </div>

  </motion.section>
);

export default Insights;
