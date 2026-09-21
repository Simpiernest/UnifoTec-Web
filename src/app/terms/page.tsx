"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/motion/MotionSection";
import FadeUp from "@/components/motion/FadeUp";
import { motion } from "framer-motion";
import { FileText, Scale, Gavel, AlertCircle } from "lucide-react";

const MDiv = motion.div;

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      <section className="bg-light py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-8">
              <Scale className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark mb-6 tracking-tight">Terms of Service</h1>
            <p className="text-grey text-lg font-medium">Effective Date: October 24, 2024</p>
          </FadeUp>
        </div>
      </section>

      <MotionSection className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-dark mb-4">1. Engagement of Services</h2>
            <p className="text-grey text-base font-medium leading-relaxed mb-8">
              By accessing this website or engaging UNIFOTEC-WEB for engineering services, you agree to be bound by these Terms of Service. All projects are subject to a separate Master Services Agreement (MSA) or Statement of Work (SOW) that defines specific technical deliverables.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4">2. Intellectual Property Rights</h2>
            <p className="text-grey text-base font-medium leading-relaxed mb-8">
              Unless otherwise agreed in a signed SOW, all custom source code developed for a client remains the intellectual property of the client upon full payment. UNIFOTEC-WEB retains rights to its foundational boilerplate code and internal engineering tools.
            </p>

            <div className="my-12 p-8 bg-emerald-50 rounded-3xl border border-emerald-100 flex gap-6">
               <Gavel className="w-8 h-8 text-accent shrink-0" />
               <div>
                  <h4 className="text-accent font-bold text-sm uppercase tracking-widest mb-2">Legal Compliance</h4>
                  <p className="text-dark text-sm font-medium leading-relaxed">
                     All engineering services are provided in compliance with the laws of the Republic of Kenya and international software development standards.
                  </p>
               </div>
            </div>

            <h2 className="text-2xl font-bold text-dark mb-4">3. Limitation of Liability</h2>
            <p className="text-grey text-base font-medium leading-relaxed mb-8">
              UNIFOTEC-WEB provides technical services "as is" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from the use or inability to use the developed software systems.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4">4. Governing Law</h2>
            <p className="text-grey text-base font-medium leading-relaxed mb-8">
              These terms shall be governed by and construed in accordance with the laws of Kenya. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Nairobi.
            </p>
          </div>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}
