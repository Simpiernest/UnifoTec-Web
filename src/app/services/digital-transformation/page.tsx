"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/motion/MotionSection";
import FadeUp from "@/components/motion/FadeUp";
import { staggerContainer, staggerItem, scaleIn } from "@/components/motion/variants";
import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  Database,
  Cpu,
  Globe,
  Rocket,
} from "lucide-react";
import Link from "next/link";

const MDiv = motion.div;

export default function DigitalTransformationDetailPage() {
  const keyFeatures = [
    {
      title: "Strategic Technology Audit",
      desc: "Deep analysis of your current technical landscape to identify bottlenecks and modernization opportunities.",
      icon: Lightbulb,
    },
    {
      title: "Legacy System Migration",
      desc: "Secure and phased transitioning of outdated monolithic systems into modern, scalable microservices architectures.",
      icon: TrendingUp,
    },
    {
      title: "Data-Driven Decision Core",
      desc: "Implementation of advanced analytics and business intelligence tools to drive growth via actionable insights.",
      icon: Database,
    },
    {
      title: "Cloud-First Culture Adoption",
      desc: "Training and process realignment to leverage the full agility and cost-benefits of modern cloud ecosystems.",
      icon: Globe,
    },
  ];

  const useCases = [
    {
      title: "Enterprise Modernization",
      desc: "Transforming traditional brick-and-mortar operations into high-efficiency digital-first organizations.",
    },
    {
      title: "Customer Experience Overhaul",
      desc: "Re-engineering user journeys across all digital touchpoints to maximize satisfaction and loyalty.",
    },
    {
      title: "Operational Agility Injection",
      desc: "Implementing DevOps and Agile methodologies to accelerate product delivery cycles and innovation.",
    },
  ];

  const techStack = [
    { name: "Cloud Architecture", desc: "Foundational shift to AWS/Azure for ultimate scalability and reach.", category: "Infra" },
    { name: "Modern Web Stack", desc: "Next.js and React for superior user interface performance and SEO.", category: "Frontend" },
    { name: "Microservices", desc: "Decoupled architecture for independent scaling and rapid deployment.", category: "Backend" },
    { name: "CI/CD Pipelines", desc: "Automated testing and deployment for faster, safer release cycles.", category: "DevOps" },
    { name: "AI/ML Integration", desc: "Leveraging data for predictive modeling and automated insights.", category: "Intelligence" },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-dark to-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#005FFF_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <MDiv variants={staggerContainer} initial="hidden" animate="visible" className="lg:w-3/5">
              <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 mb-4 inline-block">
                Future-Proof Tier
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
                Comprehensive <br />
                <span className="text-primary">Digital Transformation</span>
              </h1>
              <p className="text-grey text-lg font-medium leading-relaxed max-w-xl">
                We partner with you to modernize your legacy infrastructure, culture, and processes for the digital age.
              </p>
            </MDiv>
            <MDiv variants={scaleIn} initial="hidden" animate="visible" className="lg:w-2/5 w-full bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Modernize your business?</h3>
              <p className="text-slate-400 text-sm font-medium mb-6">Let's craft a strategic transformation roadmap that positions your brand at the tech forefront.</p>
              <Link href="/contact" className="w-full bg-primary hover:bg-primary-dark text-white text-center block font-bold text-sm py-3 rounded-lg shadow-lg shadow-primary/20 transition-all">
                Book a Strategy Session
              </Link>
            </MDiv>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <MotionSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Modernization Standards</h2>
            <h3 className="text-3xl font-bold text-dark">Key Transformation Features</h3>
          </div>

          <MDiv variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <MDiv key={i} variants={staggerItem} className="flex gap-4 p-6 bg-light rounded-xl border border-gray-100 group hover:bg-white hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-primary/5 text-primary rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-base mb-1.5">{feat.title}</h4>
                    <p className="text-grey text-xs font-medium leading-relaxed">{feat.desc}</p>
                  </div>
                </MDiv>
              );
            })}
          </MDiv>
        </div>
      </MotionSection>

      {/* Popular Use Cases */}
      <MotionSection className="py-20 bg-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Impact Areas</h2>
            <h3 className="text-3xl font-bold text-dark">Popular Transformation Cases</h3>
          </div>

          <MDiv variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, i) => (
              <MDiv
                key={i}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="bg-white p-8 rounded-xl border border-gray-200/60 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-7 h-7 bg-emerald-50 rounded-full flex items-center justify-center text-accent mb-4 font-bold text-xs">
                    0{i + 1}
                  </div>
                  <h4 className="text-lg font-bold text-dark mb-3">{useCase.title}</h4>
                  <p className="text-grey text-sm font-medium leading-relaxed mb-6">{useCase.desc}</p>
                </div>
                <div className="flex items-center text-xs font-bold text-accent uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Future Proof</span>
                </div>
              </MDiv>
            ))}
          </MDiv>
        </div>
      </MotionSection>

      {/* Technologies We Use */}
      <MotionSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">The Roadmap</h2>
            <h3 className="text-3xl font-bold text-dark">Technologies We Use</h3>
            <p className="text-grey text-sm max-w-md mx-auto mt-2">
              We leverage the full power of the modern cloud and data ecosystems to drive your transformation.
            </p>
          </div>

          <MDiv variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {techStack.map((tech, i) => (
              <MDiv
                key={i}
                variants={staggerItem}
                whileHover={{ scale: 1.03 }}
                className="bg-light p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center shadow-sm"
              >
                <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold text-sm mb-4 shadow-md shadow-slate-900/10">
                  {tech.name.charAt(0)}
                </div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">{tech.category}</span>
                <h4 className="font-bold text-dark text-sm mb-2">{tech.name}</h4>
                <p className="text-grey text-[11px] font-medium leading-normal">{tech.desc}</p>
              </MDiv>
            ))}
          </MDiv>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}
