"use client";

import React from 'react';
import { motion } from 'framer-motion';
import MotionSection from './motion/MotionSection';
import { staggerItem } from './motion/variants';
import { MarqueeCard } from "@/components/ui/marquee-card";

const MDiv = motion.div;

const Testimonials = () => {
  return (
    <MotionSection id="testimonials" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <MDiv variants={staggerItem}>
          <h2 className="text-[#0F172A] font-bold text-2xl mb-2">What Our Clients Say</h2>
          <p className="text-[#64748B] text-sm italic">Trusted by businesses, organizations and entrepreneurs.</p>
        </MDiv>
      </div>

      <div className="w-full">
        <MarqueeCard />
      </div>
    </MotionSection>
  );
};

export default Testimonials;
