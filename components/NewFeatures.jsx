'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const NewFeatures = ({ imgUrl, title, text, index }) => (
  <motion.div
    variants={fadeIn('right', 'tween', index * 0.2, '1')}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className="flex flex-col mr-4 justify-start"
  >
    <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] text-white bg-[#ffffff14] mr-8 mb-4 mt-8 text-[18px]">
      <img src={imgUrl} alt="" />
    </div>

    <div className="text-white text-[24px] font-semibold">
      {title}
    </div>

    <div className="text-[#B0B0B0] w-[225px]">
      {text}
    </div>
  </motion.div>
);

export default NewFeatures;
