"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/motion/MotionSection";
import FadeUp from "@/components/motion/FadeUp";
import { staggerContainer, staggerItem } from "@/components/motion/variants";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft, CheckCircle, Smartphone, Globe, Zap } from "lucide-react";
import Link from "next/link";

const MDiv = motion.div;

export default function SampleProjectPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <section className="bg-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeUp>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Sample Project Detail</h1>
            <p className="text-grey text-lg max-w-2xl mx-auto">This is a placeholder for a detailed project case study showing engineering excellence.</p>
          </FadeUp>
        </div>
      </section>
      <Footer />
    </main>
  );
}
