"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/motion/MotionSection";
import FadeUp from "@/components/motion/FadeUp";
import { staggerContainer, staggerItem } from "@/components/motion/variants";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Bookmark,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

const MDiv = motion.div;

export default function BlogDetailPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Post Header */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold text-grey hover:text-primary transition-colors uppercase tracking-widest mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="bg-blue-50 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-blue-100">
                Engineering
              </span>
              <div className="flex items-center gap-2 text-grey text-xs font-medium">
                <Calendar className="w-3.5 h-3.5" />
                Oct 24, 2024
              </div>
              <div className="flex items-center gap-2 text-grey text-xs font-medium">
                <Clock className="w-3.5 h-3.5" />
                8 min read
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-dark mb-8 tracking-tight leading-tight">
              The Future of Next.js 15 in Enterprise Architectures
            </h1>

            <div className="flex items-center justify-between border-y border-gray-100 py-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-light rounded-full flex items-center justify-center border border-gray-100">
                  <User className="w-6 h-6 text-grey" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-dark">Alex Muli</h4>
                  <p className="text-grey text-xs font-medium">Lead Solutions Architect</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="text-grey hover:text-primary transition-colors"><Share2 className="w-5 h-5" /></button>
                <button className="text-grey hover:text-primary transition-colors"><Bookmark className="w-5 h-5" /></button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Post Content */}
      <MotionSection className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="text-grey text-lg font-medium leading-relaxed mb-8">
              Next.js 15 has arrived, and it brings a suite of features that are fundamentally changing how we approach enterprise-level web development. From enhanced caching strategies to the stabilization of React Server Components, the framework is doubling down on performance and scalability.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4">React 19 & Next.js 15 Harmony</h2>
            <p className="text-grey text-base font-medium leading-relaxed mb-8">
              The tight integration with React 19's latest features, including the new 'use' hook and improved hydration algorithms, ensures that enterprise apps remain responsive even under heavy data loads. We've observed a 20% reduction in TTI (Time to Interactive) across our internal benchmarks.
            </p>

            <div className="my-12 p-8 bg-light rounded-3xl border border-gray-100 shadow-inner">
               <h4 className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Key Takeaway</h4>
               <p className="text-dark font-bold text-lg leading-relaxed">
                  "Enterprise applications no longer need to compromise between developer experience and end-user performance. Next.js 15 bridges this gap via intelligent server-side defaults."
               </p>
            </div>

            <h2 className="text-2xl font-bold text-dark mb-4">Advanced Caching Strategies</h2>
            <p className="text-grey text-base font-medium leading-relaxed mb-8">
              The new <code>stale-while-revalidate</code> defaults and granular control over tag-based revalidation allow us to build complex dashboards that show real-time data while still benefiting from static-like speeds.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4">Conclusion</h2>
            <p className="text-grey text-base font-medium leading-relaxed mb-8">
              As we continue to deploy production-grade apps for our global clients, Next.js 15 stands out as the most robust choice for those requiring high-throughput, secure, and performant digital assets.
            </p>
          </div>

          <div className="mt-16 pt-16 border-t border-gray-100">
             <div className="bg-light p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border border-gray-100 shrink-0">
                   <User className="w-10 h-10 text-grey" />
                </div>
                <div>
                   <h4 className="text-lg font-bold text-dark mb-2">About Alex Muli</h4>
                   <p className="text-grey text-sm font-medium leading-relaxed mb-4">
                      Alex is a veteran software architect with a focus on distributed systems and high-performance web applications. He leads the engineering strategy at UNIFOTEC-WEB.
                   </p>
                   <Link href="/team" className="text-xs font-bold text-primary uppercase tracking-widest hover:underline">View Team Profile</Link>
                </div>
             </div>
          </div>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}
