"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/motion/MotionSection";
import FadeUp from "@/components/motion/FadeUp";
import { staggerContainer, staggerItem } from "@/components/motion/variants";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  CheckCircle,
  Monitor,
  Smartphone,
  Cpu,
  Globe,
  Briefcase,
  Layers,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import CustomSelect from "@/components/CustomSelect";

const MDiv = motion.div;

export default function StartProjectPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const [budget, setBudget] = useState("$10k - $25k");
  const [launch, setExpectedLaunch] = useState("3-6 Months");

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const serviceOptions = [
    { id: "web", title: "Web Application", icon: Monitor },
    { id: "mobile", title: "Mobile App", icon: Smartphone },
    { id: "software", title: "Custom Software", icon: Cpu },
    { id: "ecommerce", title: "E-Commerce", icon: Globe },
    { id: "automation", title: "Automation", icon: Layers },
    { id: "other", title: "Consulting", icon: Briefcase },
  ];

  const budgetOptions = ["$5k - $10k", "$10k - $25k", "$25k - $50k", "$50k+"];
  const launchOptions = ["1-2 Months", "3-6 Months", "6+ Months"];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      <section className="bg-light py-20 min-h-[calc(100vh-80px)] flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Step {step} of {totalSteps}</span>
              <span className="text-[10px] font-bold text-grey uppercase tracking-widest">{Math.round((step/totalSteps) * 100)}% Complete</span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(step/totalSteps) * 100}%` }}
                className="h-full bg-primary"
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-slate-200/60 overflow-hidden">
            <div className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div>
                      <h2 className="text-3xl font-extrabold text-dark mb-2 text-balance">What are we building?</h2>
                      <p className="text-grey font-medium">Select the primary service area for your new project.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {serviceOptions.map((opt) => (
                        <button
                          key={opt.id}
                          className="flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-100 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                        >
                          <opt.icon className="w-8 h-8 text-grey group-hover:text-primary mb-4 transition-colors" />
                          <span className="text-xs font-bold text-dark group-hover:text-primary uppercase tracking-widest">{opt.title}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div>
                      <h2 className="text-3xl font-extrabold text-dark mb-2">Project Details</h2>
                      <p className="text-grey font-medium">Tell us more about the scope and timeline.</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-[10px] font-bold text-grey uppercase tracking-widest mb-2">Project Name / Working Title</label>
                        <input type="text" className="w-full bg-light border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 font-medium" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <CustomSelect
                          label="Budget Range"
                          options={budgetOptions}
                          value={budget}
                          onChange={setBudget}
                        />
                        <CustomSelect
                          label="Expected Launch"
                          options={launchOptions}
                          value={launch}
                          onChange={setExpectedLaunch}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div>
                      <h2 className="text-3xl font-extrabold text-dark mb-2">Contact Info</h2>
                      <p className="text-grey font-medium">Where should we send the proposal?</p>
                    </div>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[10px] font-bold text-grey uppercase tracking-widest mb-2">Full Name</label>
                          <input type="text" className="w-full bg-light border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 font-medium" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-grey uppercase tracking-widest mb-2">Work Email</label>
                          <input type="email" className="w-full bg-light border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 font-medium" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-grey uppercase tracking-widest mb-2">Brief Summary of Goals</label>
                        <textarea rows={4} className="w-full bg-light border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 font-medium resize-none"></textarea>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="bg-light px-8 py-6 flex justify-between items-center border-t border-gray-100">
              <button
                onClick={prevStep}
                disabled={step === 1}
                className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all ${step === 1 ? 'opacity-0' : 'text-grey hover:text-dark'}`}
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>

              {step < totalSteps ? (
                <button
                  onClick={nextStep}
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20 transition-all"
                >
                  Continue
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  className="bg-accent hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-accent/20 transition-all"
                >
                  <Rocket className="w-4 h-4" />
                  Launch Inquiry
                </button>
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale">
             <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Confidential</span>
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">No Commitment</span>
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Expert Review</span>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
