"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/motion/FadeUp";
import { motion } from "framer-motion";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center py-20 bg-light">
        <div className="max-w-md w-full px-6 text-center">
          <FadeUp>
            <div className="w-24 h-24 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
               <AlertCircle className="w-12 h-12" />
            </div>
            <h1 className="text-6xl font-black text-dark mb-4 tracking-tighter">404</h1>
            <h2 className="text-2xl font-bold text-dark mb-6">Endpoint Not Found</h2>
            <p className="text-grey font-medium mb-10">
               The architectural path you requested does not exist in our digital ecosystem. It may have been relocated or deprecated.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link href="/" className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all">
                  <Home className="w-4 h-4" />
                  Home Base
               </Link>
               <button onClick={() => window.history.back()} className="bg-white hover:bg-slate-50 text-dark px-8 py-3.5 rounded-xl font-bold border border-gray-200 transition-all flex items-center justify-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Go Back
               </button>
            </div>
          </FadeUp>
        </div>
      </div>

      <Footer />
    </main>
  );
}
