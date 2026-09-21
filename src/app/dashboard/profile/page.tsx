"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Briefcase,
  MapPin,
  Camera,
  ShieldCheck,
  Zap,
} from "lucide-react";

const MDiv = motion.div;

export default function ProfilePage() {
  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-2xl font-bold text-dark mb-1">User Profile</h1>
        <p className="text-grey text-sm font-medium">Manage your personal identity and workspace role.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-primary to-blue-600"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-white shadow-lg mx-auto mb-4 overflow-hidden relative group cursor-pointer">
                <div className="flex items-center justify-center h-full text-primary font-black text-3xl">JD</div>
                <div className="absolute inset-0 bg-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-dark">John Doe</h3>
              <p className="text-grey text-xs font-bold uppercase tracking-widest mb-6">Technical Director</p>

              <div className="flex justify-center gap-4 border-t border-gray-100 pt-6">
                <div className="text-center">
                  <span className="block text-lg font-black text-dark">12</span>
                  <span className="text-[10px] font-bold text-grey uppercase">Projects</span>
                </div>
                <div className="w-px h-8 bg-gray-100"></div>
                <div className="text-center">
                  <span className="block text-lg font-black text-dark">4</span>
                  <span className="text-[10px] font-bold text-grey uppercase">Teams</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary p-6 rounded-3xl text-white shadow-lg shadow-primary/20">
             <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-white animate-pulse" />
                <h4 className="font-bold text-sm uppercase tracking-widest">Enterprise Status</h4>
             </div>
             <p className="text-white/80 text-xs font-medium leading-relaxed mb-6">
                Your account is currently integrated into the UNIFOTEC Global workspace with full architectural access.
             </p>
             <div className="flex items-center gap-2 text-[10px] font-bold bg-white/10 w-fit px-3 py-1 rounded-full border border-white/20">
                <ShieldCheck className="w-3 h-3" />
                VERIFIED ACCOUNT
             </div>
          </div>
        </div>

        {/* Details Form */}
        <div className="lg:col-span-2">
           <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-dark mb-8">Personal Details</h3>
              <form className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                       <label className="block text-[10px] font-bold text-grey uppercase tracking-widest mb-2">Full Name</label>
                       <div className="relative">
                          <input type="text" defaultValue="John Doe" className="w-full bg-light border border-gray-100 rounded-xl px-4 py-3 pl-10 text-sm focus:outline-none focus:border-primary/50 font-medium" />
                          <User className="w-4 h-4 text-grey/50 absolute left-3 top-1/2 -translate-y-1/2" />
                       </div>
                    </div>
                    <div>
                       <label className="block text-[10px] font-bold text-grey uppercase tracking-widest mb-2">Email Address</label>
                       <div className="relative">
                          <input type="email" defaultValue="john@company.com" className="w-full bg-light border border-gray-100 rounded-xl px-4 py-3 pl-10 text-sm focus:outline-none focus:border-primary/50 font-medium" />
                          <Mail className="w-4 h-4 text-grey/50 absolute left-3 top-1/2 -translate-y-1/2" />
                       </div>
                    </div>
                    <div>
                       <label className="block text-[10px] font-bold text-grey uppercase tracking-widest mb-2">Organization</label>
                       <div className="relative">
                          <input type="text" defaultValue="Global Fintech Corp" className="w-full bg-light border border-gray-100 rounded-xl px-4 py-3 pl-10 text-sm focus:outline-none focus:border-primary/50 font-medium" />
                          <Briefcase className="w-4 h-4 text-grey/50 absolute left-3 top-1/2 -translate-y-1/2" />
                       </div>
                    </div>
                    <div>
                       <label className="block text-[10px] font-bold text-grey uppercase tracking-widest mb-2">Region / Timezone</label>
                       <div className="relative">
                          <input type="text" defaultValue="Nairobi, GMT+3" className="w-full bg-light border border-gray-100 rounded-xl px-4 py-3 pl-10 text-sm focus:outline-none focus:border-primary/50 font-medium" />
                          <MapPin className="w-4 h-4 text-grey/50 absolute left-3 top-1/2 -translate-y-1/2" />
                       </div>
                    </div>
                 </div>

                 <div className="pt-6">
                    <button className="bg-dark text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-dark/20 transition-all w-full md:w-fit">
                       Save Profile Changes
                    </button>
                 </div>
              </form>
           </div>
        </div>

      </div>
    </div>
  );
}
