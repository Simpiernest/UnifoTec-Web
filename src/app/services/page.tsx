"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/motion/MotionSection";
import FadeUp from "@/components/motion/FadeUp";
import { staggerContainer } from "@/components/motion/variants";
import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Settings,
  ShoppingCart,
  CreditCard,
  Zap,
  Palette,
  Cloud,
} from "lucide-react";
import { StandardCard } from "@/components/ui/standard-card";

const MDiv = motion.div;

export default function ServicesPage() {
  const servicesList = [
    {
      icon: Monitor,
      title: "Website Development",
      description: "Performant, fully responsive, and SEO-optimized web setups using Next.js, React, and Tailwind CSS.",
      path: "/services/web-development",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Premium native and cross-platform apps built for iOS and Android using Flutter and React Native.",
      path: "/services/mobile-app",
    },
    {
      icon: Settings,
      title: "Custom Software Solutions",
      description: "Robust enterprise architectures tailored precisely to automate your unique complex business backend workflows.",
      path: "/services/custom-software",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Development",
      description: "High-conversion online storefronts optimized for maximum sales throughput with flawless checkout funnels.",
      path: "/services/ecommerce",
    },
    {
      icon: CreditCard,
      title: "API & Payment Integration",
      description: "Flawless connections for M-Pesa, card merchants, global banks, and webhook notification automation.",
      path: "/services/api-payment",
    },
    {
      icon: Zap,
      title: "Business Automation",
      description: "Eliminate repetitive tasks, reduce human overhead error rates, and skyrocket day-to-day organizational efficiency.",
      path: "/services/business-automation",
    },
    {
      icon: Palette,
      title: "Digital Transformation",
      description: "Comprehensive modernization of business processes, culture, and customer experiences via deep tech adoption.",
      path: "/services/digital-transformation",
    },
    {
      icon: Cloud,
      title: "Cloud & Managed Hosting",
      description: "Ultra-secure cloud hosting, horizontal server auto-scaling, and managed backup monitoring.",
      path: "/services/cloud-hosting",
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Ongoing technical support, security patching, and performance optimization for your existing applications.",
      path: "/services/maintenance",
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
            <span className="text-accent font-bold text-xs uppercase tracking-widest bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20 mb-4 inline-block">
              What We Deliver
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              Comprehensive Services For <br />The Modern Digital Enterprise
            </h1>
            <p className="text-grey text-lg max-w-2xl mx-auto font-medium">
              From premium web assets to enterprise automation architectures, we craft systems that scale alongside your user base.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Grid Content */}
      <MotionSection className="py-20 bg-white" amount="some">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MDiv variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, i) => (
              <StandardCard
                key={i}
                index={i}
                title={service.title}
                description={service.description}
                Icon={service.icon}
                href={service.path}
              />
            ))}
          </MDiv>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}
