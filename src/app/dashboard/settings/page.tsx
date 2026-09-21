"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Lock,
  User,
  Globe,
  Database,
  Shield,
  CreditCard,
  ChevronRight,
} from "lucide-react";

const MDiv = motion.div;

export default function SettingsPage() {
  const sections = [
    { title: "Account Preferences", desc: "Manage your profile information and email settings.", icon: User },
    { title: "Security & Auth", desc: "Configure 2FA, API keys, and password rotation.", icon: Lock },
    { title: "Notifications", desc: "Set triggers for deployment and security alerts.", icon: Bell },
    { title: "Billing & Plans", desc: "View invoices and manage your support tier.", icon: CreditCard },
    { title: "Team Access", desc: "Manage role-based access control for your organization.", icon: Shield },
  ];

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-2xl font-bold text-dark mb-1">Settings</h1>
        <p className="text-grey text-sm font-medium">Configure your platform experience and security.</p>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
        <div className="divide-y divide-gray-100">
          {sections.map((section, i) => (
            <button
              key={i}
              className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors text-left group"
            >
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 bg-light text-grey rounded-xl flex items-center justify-center group-hover:bg-primary/5 group-hover:text-primary transition-all">
                  <section.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-base mb-0.5">{section.title}</h3>
                  <p className="text-grey text-xs font-medium">{section.desc}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 bg-red-50 rounded-2xl border border-red-100 flex items-center justify-between">
         <div>
            <h4 className="text-red-600 font-bold text-sm mb-1">Danger Zone</h4>
            <p className="text-red-500/70 text-xs font-medium">Permanently deactivate your organization account and all associated data.</p>
         </div>
         <button className="bg-white text-red-600 border border-red-200 px-6 py-2 rounded-lg font-bold text-xs hover:bg-red-600 hover:text-white transition-all shadow-sm">
            Delete Account
         </button>
      </div>
    </div>
  );
}
