"use client";

import React from 'react';
import { motion, HTMLMotionProps, useReducedMotion } from 'framer-motion';
import { fadeUp, fadeIn } from './variants';

const MDiv = motion.div;

interface FadeUpProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
}

const FadeUp = ({ children, delay = 0, ...props }: FadeUpProps) => {
  const shouldReduceMotion = useReducedMotion();

  const variants = shouldReduceMotion ? fadeIn : fadeUp;

  return (
    <MDiv
      variants={variants}
      transition={{ delay }}
      {...props}
    >
      {children}
    </MDiv>
  );
};

export default FadeUp;
