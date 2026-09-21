"use client";

import React, { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/motion/MotionSection";
import FadeUp from "@/components/motion/FadeUp";
import { staggerContainer, staggerItem } from "@/components/motion/variants";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

const MDiv = motion.div;

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      <section className="bg-gradient-to-br from-dark to-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#005FFF_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/" className="inline-flex items-center text-xs font-bold text-primary hover:underline mb-6">
            <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to Home
          </Link>
          <FadeUp>
            <span className="text-accent font-bold text-xs uppercase tracking-widest bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20 mb-4 inline-block">
              Case Study Hub
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              Enterprise Deployment: Project Reference #{id}
            </h1>
            <p className="text-grey text-lg max-w-xl font-medium">
              An inside look into the custom software engineering architectures, database specifications, and metrics driven for this client solution.
            </p>
          </FadeUp>
        </div>
      </section>

      <MotionSection className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-black text-dark mb-3">Project Overview & Background</h2>
              <p className="text-grey text-sm font-medium leading-relaxed">
                The client required a modular decentralized cloud cluster to replace their high-friction local spreadsheet synchronization bottlenecks. The engineering team deployed a multi-tenant Next.js 15 App router fronting isolated PostgreSQL transactional nodes.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h2 className="text-xl font-black text-dark mb-4">Core Deliverables Achieved</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-xs font-bold text-dark/90">Sub-second API payload rendering times</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-xs font-bold text-dark/90">99.98% operational uptime across cluster clusters</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-xs font-bold text-dark/90">Idempotent automated payment notification webhooks</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-xs font-bold text-dark/90">Multi-factor biometric access controls (RBAC)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}
