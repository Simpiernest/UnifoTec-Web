"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/motion/MotionSection";
import FadeUp from "@/components/motion/FadeUp";
import { staggerContainer, staggerItem } from "@/components/motion/variants";
import { motion } from "framer-motion";
import {
  Building2,
  TrendingUp,
  BarChart3,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Users,
  Globe,
  Database,
} from "lucide-react";
import Link from "next/link";

const MDiv = motion.div;

export default function BusinessIndustryPage() {
  const solutions = [
    {
      title: "Enterprise ERP Systems",
      desc: "Centralized platforms to manage finance, HR, and operations in a unified digital ecosystem.",
      icon: Database,
    },
    {
      title: "Business Intelligence",
      desc: "Advanced data visualization and predictive analytics for strategic decision making.",
      icon: BarChart3,
    },
    {
      title: "Global Supply Chain",
      desc: "Real-time tracking and logistics automation for international trade operations.",
      icon: Globe,
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-dark to-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#005FFF_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeUp>
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 mb-4 inline-block">
              Industry Focus
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Technology Solutions for <br /><span className="text-primary">Global Business</span>
            </h1>
            <p className="text-grey text-lg max-w-2xl font-medium">
              We engineer scalable software architectures that empower enterprises to dominate their markets via digital excellence.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Industry Specifics */}
      <MotionSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-3xl font-bold text-dark mb-6">Modernizing the Corporate Engine</h2>
                 <p className="text-grey text-lg font-medium leading-relaxed mb-8">
                    Modern businesses require more than just a digital presence. They need robust, automated systems that eliminate manual overhead and provide real-time visibility into every operational node.
                 </p>
                 <div className="space-y-4">
                    {["Scale-ready microservices", "Role-based security layers", "High-throughput data cores"].map((item, i) => (
                       <div key={i} className="flex items-center gap-3 text-sm font-bold text-dark">
                          <CheckCircle className="w-5 h-5 text-accent" />
                          {item}
                       </div>
                    ))}
                 </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {solutions.map((sol, i) => (
                    <MDiv key={i} variants={staggerItem} className="bg-light p-8 rounded-2xl border border-gray-100 shadow-sm">
                       <sol.icon className="w-8 h-8 text-primary mb-4" />
                       <h4 className="font-bold text-dark mb-2">{sol.title}</h4>
                       <p className="text-grey text-xs font-medium leading-relaxed">{sol.desc}</p>
                    </MDiv>
                 ))}
              </div>
           </div>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}
