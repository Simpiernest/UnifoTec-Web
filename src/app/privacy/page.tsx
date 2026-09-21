"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/motion/MotionSection";
import FadeUp from "@/components/motion/FadeUp";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

const MDiv = motion.div;

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      <section className="bg-light py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-8">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark mb-6 tracking-tight">Privacy Policy</h1>
            <p className="text-grey text-lg font-medium">Last Updated: October 24, 2024</p>
          </FadeUp>
        </div>
      </section>

      <MotionSection className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-dark mb-4">1. Data Collection Protocols</h2>
            <p className="text-grey text-base font-medium leading-relaxed mb-8">
              UNIFOTEC-WEB is committed to the highest standards of data protection. We collect only the minimum necessary information required to provide our technical services, including contact details and project requirements voluntarily provided via our inquiry forms.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4">2. Engineering Security</h2>
            <p className="text-grey text-base font-medium leading-relaxed mb-8">
              We leverage military-grade encryption for all data at rest and in transit. Our internal processes follow strict zero-trust architectures to ensure client project data remains isolated and secure.
            </p>

            <div className="my-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 flex gap-6">
               <Lock className="w-8 h-8 text-primary shrink-0" />
               <div>
                  <h4 className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Security Commitment</h4>
                  <p className="text-dark text-sm font-medium leading-relaxed">
                     We never share, sell, or rent client data to third parties. All information is used strictly for technical service delivery and improvement.
                  </p>
               </div>
            </div>

            <h2 className="text-2xl font-bold text-dark mb-4">3. Cookie & Analytics Implementation</h2>
            <p className="text-grey text-base font-medium leading-relaxed mb-8">
              Our website uses essential cookies to maintain session states and anonymous analytics to monitor site performance. You can manage your cookie preferences via your browser settings at any time.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4">4. Client Rights</h2>
            <p className="text-grey text-base font-medium leading-relaxed mb-8">
              Under global data protection regulations (GDPR/CCPA), you have the right to access, rectify, or request the deletion of your personal data. Please contact our data protection officer at <code>privacy@unifotec-web.com</code> for such requests.
            </p>
          </div>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}
