"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Book,
  Search,
  ChevronRight,
  FileText,
  Video,
  ExternalLink,
  Code2,
} from "lucide-react";

const MDiv = motion.div;

export default function KnowledgeBasePage() {
  const articles = [
    { title: "API Integration Standards", category: "Engineering", icon: Code2 },
    { title: "Security Best Practices", category: "DevOps", icon: FileText },
    { title: "Design System Guidelines", category: "UI/UX", icon: Book },
    { title: "Dashboard Video Walkthrough", category: "Training", icon: Video },
  ];

  return (
    <div className="space-y-8 p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dark mb-1">Knowledge Base</h1>
          <p className="text-grey text-sm font-medium">Access technical documentation and resource guides.</p>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search docs..."
            className="w-full md:w-64 bg-white border border-gray-200 rounded-xl px-4 py-2 pl-10 text-sm focus:outline-none focus:border-primary/50 font-medium shadow-sm"
          />
          <Search className="w-4 h-4 text-grey absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((art, i) => (
          <MDiv
            key={i}
            whileHover={{ y: -4, shadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}
            className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-between group cursor-pointer transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                <art.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-0.5">{art.category}</span>
                <h3 className="text-lg font-bold text-dark">{art.title}</h3>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-grey group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </MDiv>
        ))}
      </div>

      <div className="bg-dark text-white p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full -mr-32 -mt-32"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-4">Request Custom Training</h2>
            <p className="text-grey text-sm font-medium leading-relaxed">
              Need a deep dive into specific architectural components? Our engineers can provide one-on-one sessions for your team.
            </p>
          </div>
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2 w-fit shrink-0">
             Contact Architect
             <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
