"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/motion/MotionSection";
import FadeUp from "@/components/motion/FadeUp";
import { staggerContainer } from "@/components/motion/variants";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Building2,
  Cpu,
  ShieldCheck,
  Rocket,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { StandardCard } from "@/components/ui/standard-card";

const MDiv = motion.div;

export default function SolutionsPage() {
  const solutions = [
    {
      title: "FinTech Infrastructure",
      desc: "Robust payment processing and mobile money integration for modern financial platforms.",
      icon: ShieldCheck,
      color: "text-primary",
      bg: "bg-blue-50",
    },
    {
      title: "Headless E-Commerce",
      desc: "Blazing fast digital storefronts with decoupled frontend and commerce backend.",
      icon: ShoppingCart,
      color: "text-accent",
      bg: "bg-emerald-50",
    },
    {
      title: "Enterprise ERP/CRM",
      desc: "Custom resource planning and customer management tools for scaled organizations.",
      icon: Building2,
      color: "text-primary",
      bg: "bg-blue-50",
    },
    {
      title: "IoT & Real-time Monitoring",
      desc: "Hardware-to-cloud data streaming and visualization for industrial environments.",
      icon: Cpu,
      color: "text-accent",
      bg: "bg-emerald-50",
    },
    {
      title: "SaaS Product Launch",
      desc: "End-to-end engineering for new software startups looking for rapid market entry.",
      icon: Rocket,
      color: "text-primary",
      bg: "bg-blue-50",
    },
    {
      title: "Digital Ecosystems",
      desc: "Integrated suites of web and mobile applications sharing a unified data core.",
      icon: Layers,
      color: "text-accent",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-dark to-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#005FFF_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeUp>
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 mb-4 inline-block">
              Engineered Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              Technology Architectures <br />Built for Real-World Growth
            </h1>
            <p className="text-grey text-lg max-w-2xl mx-auto font-medium">
              We don't just build features; we engineer comprehensive digital solutions that solve complex business challenges at scale.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Grid Content */}
      <MotionSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MDiv variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, i) => (
              <StandardCard
                key={i}
                index={i}
                title={solution.title}
                description={solution.desc}
                Icon={solution.icon}
                href="/contact"
              />
            ))}
          </MDiv>
        </div>
      </MotionSection>

      {/* CTA Section */}
      <MotionSection className="py-20 bg-dark text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Need a custom technical roadmap?</h2>
            <p className="text-grey text-lg mb-10 max-w-xl mx-auto font-medium">
              Our solutions architects are ready to design a high-performance system tailored to your unique scaling needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-primary/20">
                Book a Free Consultation
              </Link>
              <Link href="/services" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-xl font-bold border border-white/10 transition-all">
                Explore All Services
              </Link>
            </div>
          </FadeUp>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}
