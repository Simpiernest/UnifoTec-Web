"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/motion/FadeUp";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function StartProjectPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    budget: "",
    name: "",
    email: "",
    details: "",
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <main className="min-h-screen pt-20 bg-slate-50">
      <Navbar />

      <section className="py-16 max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-dark tracking-tight mb-2">Start Your Project Blueprint</h1>
            <p className="text-grey text-xs font-medium">Fill out the quick questionnaire below to capture your core engineering specifications.</p>
          </div>
        </FadeUp>

        {/* Steps Tracker */}
        <div className="flex items-center justify-between mb-8 px-4 text-xs font-bold text-grey uppercase tracking-wider">
          <span className={step >= 1 ? "text-primary font-black" : ""}>1. Tier Selection</span>
          <div className="h-0.5 w-12 bg-gray-200 flex-1 mx-2"></div>
          <span className={step >= 2 ? "text-primary font-black" : ""}>2. Budget Allocation</span>
          <div className="h-0.5 w-12 bg-gray-200 flex-1 mx-2"></div>
          <span className={step >= 3 ? "text-primary font-black" : ""}>3. Credentials</span>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200/60 p-8 shadow-sm overflow-hidden min-h-[300px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h3 className="font-extrabold text-sm text-dark uppercase tracking-wider mb-2">Which service tier do you require?</h3>
                {["Website Development", "Mobile App Development", "Custom Software Solutions", "E-commerce Frontends"].map((svc) => (
                  <label key={svc} className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.service === svc ? "border-primary bg-blue-50/20" : "border-gray-100 hover:border-gray-200"
                  }`}>
                    <span className="text-xs font-bold text-dark">{svc}</span>
                    <input
                      type="radio"
                      name="service"
                      value={svc}
                      checked={formData.service === svc}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="accent-primary"
                    />
                  </label>
                ))}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h3 className="font-extrabold text-sm text-dark uppercase tracking-wider mb-2">Estimated project investment bracket</h3>
                {["Below $2,500", "$2,500 - $10,000", "$10,000 - $25,000", "Enterprise Scale ($25k+)"].map((bgt) => (
                  <label key={bgt} className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.budget === bgt ? "border-primary bg-blue-50/20" : "border-gray-100 hover:border-gray-200"
                  }`}>
                    <span className="text-xs font-bold text-dark">{bgt}</span>
                    <input
                      type="radio"
                      name="budget"
                      value={bgt}
                      checked={formData.budget === bgt}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="accent-primary"
                    />
                  </label>
                ))}
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h3 className="font-extrabold text-sm text-dark uppercase tracking-wider mb-4">Contact Credentials</h3>
                <div className="space-y-3 text-xs font-bold text-dark">
                  <div>
                    <label className="block mb-1.5">Full Corporate Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-light border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block mb-1.5">Email Destination</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full bg-light border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center border-t border-gray-100 pt-6 mt-6">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className="text-xs font-bold text-grey uppercase tracking-wider flex items-center disabled:opacity-30"
            >
              <ArrowLeft className="w-4 h-4 mr-1" /> Prev
            </button>
            {step < 3 ? (
              <button
                onClick={nextStep}
                className="bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-lg flex items-center"
              >
                Next <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            ) : (
              <button
                onClick={() => {
                  alert("Project Blueprint Submitted Successfully!");
                  setStep(1);
                  setFormData({ service: "", budget: "", name: "", email: "", details: "" });
                }}
                className="bg-accent hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-lg flex items-center shadow-md shadow-accent/10"
              >
                Submit Questionnaire <CheckCircle2 className="w-4 h-4 ml-1" />
              </button>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
