"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/motion/MotionSection";
import FadeUp from "@/components/motion/FadeUp";
import { staggerContainer, staggerItem } from "@/components/motion/variants";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowLeft,
  CheckCircle,
  Code2,
  Cpu,
  Globe,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

const MDiv = motion.div;

export default function ProjectDetailPage() {
  const specs = [
    { label: "Client", value: "Global Fintech Corp" },
    { label: "Category", value: "FinTech / Payments" },
    { label: "Duration", value: "6 Months" },
    { label: "Tech Stack", value: "Next.js, Node.js, AWS" },
  ];

  const highlights = [
    { title: "High Throughput", desc: "Handles 5,000+ concurrent transactions per second with sub-100ms latency.", icon: ZapIcon },
    { title: "Military Security", desc: "End-to-end AES-256 encryption and PCI-DSS compliant architecture.", icon: ShieldCheck },
    { title: "Multi-Region", desc: "Deployed across 3 global regions with automated failover and data sync.", icon: Globe },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Project Header */}
      <section className="bg-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#005FFF_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeUp>
            <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-bold text-grey hover:text-white transition-colors uppercase tracking-widest mb-8">
              <ArrowLeft className="w-4 h-4" />
              All Projects
            </Link>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div>
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Case Study</span>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">FinTech Payment Engine</h1>
                <p className="text-grey text-lg max-w-2xl font-medium">
                  A high-performance, secure, and scalable payment processing core engineered for a global financial institution.
                </p>
              </div>
              <a href="#" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-all w-fit">
                Launch Live Platform
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Overview Grid */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-dark mb-6">The Challenge</h2>
              <p className="text-grey text-lg font-medium leading-relaxed mb-8">
                Our client required a complete overhaul of their legacy payment pipeline which was suffering from frequent downtime and high latency during peak market hours. The goal was to build a zero-downtime, PCI-compliant engine capable of handling global transaction volumes while integrating seamlessly with multiple regional mobile money gateways.
              </p>

              <h2 className="text-2xl font-bold text-dark mb-6">Our Solution</h2>
              <p className="text-grey text-lg font-medium leading-relaxed">
                We engineered a distributed microservices architecture using Node.js and AWS Lambda, coordinated via an event-driven core. By leveraging Redis for real-time caching and PostgreSQL for ACID-compliant ledgers, we achieved extreme reliability and speed.
              </p>
            </div>

            <div className="bg-light p-8 rounded-3xl border border-gray-100 h-fit">
              <h3 className="text-lg font-bold text-dark mb-6">Project Specs</h3>
              <div className="space-y-6">
                {specs.map((spec) => (
                  <div key={spec.label}>
                    <span className="block text-[10px] font-bold text-grey uppercase tracking-widest mb-1">{spec.label}</span>
                    <span className="text-sm font-bold text-dark">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <MotionSection className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MDiv variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <MDiv key={i} variants={staggerItem} className="bg-white p-8 rounded-2xl border border-gray-200/50 shadow-sm">
                  <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-dark mb-3">{item.title}</h4>
                  <p className="text-grey text-sm font-medium leading-relaxed">{item.desc}</p>
                </MDiv>
              );
            })}
          </MDiv>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}

const ZapIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
