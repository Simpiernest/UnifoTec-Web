"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { fadeIn } from './variants';

const MSection = motion.section;

interface MotionSectionProps extends HTMLMotionProps<'section'> {
  children: React.ReactNode;
  once?: boolean;
  amount?: number | 'some' | 'all';
}

const MotionSection = ({
  children,
  once = true,
  amount = 0.15,
  ...props
}: MotionSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={shouldReduceMotion ? fadeIn : undefined}
      {...props}
    >
      {children}
    </MSection>
  );
};

export default MotionSection;
