"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, ArrowLeft, Lock, LifeBuoy } from "lucide-react";
import Link from "next/link";

const MDiv = motion.div;

export default function UnauthorizedPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <MDiv
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-slate-200/60"
        >
          <div className="w-20 h-20 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
             <ShieldAlert className="w-10 h-10" />
          </div>

          <h1 className="text-2xl font-black text-dark mb-4 tracking-tight uppercase italic">Access Restrict</h1>
          <h2 className="text-lg font-bold text-dark mb-6">Insufficient Permissions</h2>

          <p className="text-grey text-sm font-medium leading-relaxed mb-10">
             Your account is not authorized to access this architectural node. Please contact your workspace administrator to upgrade your access tier.
          </p>

          <div className="space-y-4">
             <Link href="/dashboard" className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all">
                <ArrowLeft className="w-4 h-4" />
                Return to Dashboard
             </Link>

             <button className="w-full bg-light hover:bg-gray-100 text-dark px-8 py-4 rounded-2xl font-bold border border-gray-100 transition-all flex items-center justify-center gap-2">
                <LifeBuoy className="w-4 h-4" />
                Contact Support
             </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-[10px] font-bold text-grey uppercase tracking-widest opacity-50">
             <Lock className="w-3 h-3" />
             NODE_SECURED_ENDPOINT
          </div>
        </MDiv>
      </div>
    </div>
  );
}
