"use client";

import React, { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/motion/MotionSection";
import FadeUp from "@/components/motion/FadeUp";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";

export default function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      <section className="bg-gradient-to-br from-dark to-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#005FFF_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/blog" className="inline-flex items-center text-xs font-bold text-primary hover:underline mb-6">
            <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to Blog
          </Link>
          <FadeUp>
            <div className="flex items-center space-x-4 text-slate-400 text-xs font-bold mb-4">
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> Jan 12, 2025</span>
              <span className="flex items-center"><User className="w-4 h-4 mr-1" /> Tech Engineering Guild</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight max-w-4xl">
              Deep Dive Analytics Reference Log #{id}
            </h1>
            <p className="text-grey text-lg max-w-xl font-medium">
              A comprehensive technical exploration of modern performance boundaries, framework caches, and data protection rules.
            </p>
          </FadeUp>
        </div>
      </section>

      <MotionSection className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-dark">
          <article className="prose prose-slate max-w-none space-y-6 text-sm font-medium leading-relaxed text-[#475569]">
            <p className="text-base font-semibold text-dark">
              Building for sub-second user responsiveness requires an upfront dedication to server-side static compilation boundaries.
            </p>
            <p>
              When initializing network data operations inside standard single-page app layers, client-side resource calls cause painful rendering flashes and high initial input delays. By leveraging Next.js server components, web assets compute their database interactions entirely within local fast memory arrays before dispatching clean static HTML layouts down the pipe.
            </p>
            <p>
              Furthermore, incorporating type-safe schemas using TypeScript guarantees that compile-time error filters intercept accidental runtime properties long before code clusters receive live production traffic routes.
            </p>
          </article>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}
