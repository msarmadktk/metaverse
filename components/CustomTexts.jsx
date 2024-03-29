'use client';

import { motion } from 'framer-motion';
import { textVariant2, textContainer } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p variants={textContainer} className={`font-normal text-[14px] text-secondary-white ${textStyles}`}>
    {
      Array.from(title).map((Letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {
            Letter === ' ' ? '\u00A0' : Letter
          }
        </motion.span>
      ))
    }
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <h2 className={`text-[64px] text-white font-bold leading-[75px] ${textStyles}`}>
    {title}
  </h2>
);
