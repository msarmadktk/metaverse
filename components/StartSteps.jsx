'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const StartSteps = ({ index, text }) => (
  <motion.div
    variants={fadeIn('down', 'tween', index * 0.2, '1')}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className="flex flex-row mt-8"
  >
    <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] text-white bg-[#ffffff14] mr-8 text-[18px]">
      {index + 1}
    </div>

    <div className="flex justify-center items-center text-[#B0B0B0] max-w-[270px]">
      {text}
    </div>
  </motion.div>
);

export default StartSteps;
