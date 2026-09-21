"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/motion/MotionSection";
import FadeUp from "@/components/motion/FadeUp";
import { staggerContainer, staggerItem } from "@/components/motion/variants";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  HelpCircle,
  Search,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const MDiv = motion.div;

export default function FAQPage() {
  const faqs = [
    {
      q: "What is your typical project timeline?",
      a: "For standard web applications, timelines range from 4-8 weeks. Complex enterprise software or multi-platform mobile apps typically require 3-6 months depending on the scope of discovery and QA requirements.",
    },
    {
      q: "Do you provide ongoing technical support?",
      a: "Yes, we offer comprehensive managed support tiers that include 24/7 uptime monitoring, security patching, and iterative feature development for all systems we engineer.",
    },
    {
      q: "Can you integrate with existing legacy systems?",
      a: "Absolutely. Our architects specialize in digital transformation, bridging the gap between legacy databases/APIs and modern cloud-native architectures without disrupting current operations.",
    },
    {
      q: "How do you handle project security and data privacy?",
      a: "We follow industry best practices including end-to-end encryption, strict RBAC, and regular security audits. All projects are built with PCI-DSS and GDPR standards in mind where applicable.",
    },
    {
      q: "What technology stack do you use?",
      a: "We primarily build with Next.js 15, React, TypeScript, and Tailwind CSS for frontends, and Node.js, Python, or Go for backends, typically deployed on AWS or Vercel infrastructure.",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 mb-4 inline-block">
              Support Center
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark mb-6 tracking-tight">
              Common Engineering <br />Inquiries
            </h1>
            <div className="relative max-w-xl mx-auto mt-10">
               <input type="text" placeholder="Search for answers..." className="w-full bg-light border border-gray-100 rounded-2xl px-6 py-4 pl-14 text-sm focus:outline-none focus:border-primary/50 font-medium shadow-sm" />
               <Search className="w-5 h-5 text-grey absolute left-6 top-1/2 -translate-y-1/2" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ Accordion */}
      <MotionSection className="py-20 bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <MDiv variants={staggerContainer} className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </MDiv>

          <div className="mt-20 p-8 md:p-12 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-slate-200/50 text-center">
             <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8" />
             </div>
             <h3 className="text-2xl font-bold text-dark mb-4">Still have questions?</h3>
             <p className="text-grey font-medium mb-8">Our solutions architects are available for a direct technical consultation to discuss your specific needs.</p>
             <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 shadow-lg shadow-primary/20 transition-all">
                Contact Support Team
                <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MDiv variants={staggerItem} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
      >
        <span className="text-base font-bold text-dark">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-primary shrink-0" />
        ) : (
          <Plus className="w-5 h-5 text-grey shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-8 pb-6 text-grey text-sm font-medium leading-relaxed border-t border-slate-50 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </MDiv>
  );
};
