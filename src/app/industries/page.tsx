"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/motion/MotionSection";
import FadeUp from "@/components/motion/FadeUp";
import { staggerContainer } from "@/components/motion/variants";
import { motion } from "framer-motion";
import {
  Building2,
  Landmark,
  GraduationCap,
  Heart,
  PieChart,
  Map,
  ShoppingBag,
  Leaf,
  Tv,
} from "lucide-react";
import { StandardCard } from "@/components/ui/standard-card";

const MDiv = motion.div;

export default function IndustriesPage() {
  const industriesList = [
    { icon: Building2, label: "Enterprise Business", desc: "Digital systems for resource management, internal communications, and cloud migration frameworks." },
    { icon: Landmark, label: "Government Agencies", desc: "Highly secure portals, citizens-facing systems, and optimized administrative automated databases." },
    { icon: GraduationCap, label: "Educational Institutions", desc: "Customized E-learning, student registry score sheets, and robust virtual class workflows." },
    { icon: Heart, label: "Healthcare Systems", desc: "Secure telemedicine interfaces, client onboarding records management, and automated consultation booking." },
    { icon: PieChart, label: "Financial Institutions", desc: "Hardened payment rails, micro-accounting ledgers, and live premium analytical dashboards." },
    { icon: Map, label: "Tourism & Travel", desc: "Automated itinerary dispatchers, multi-currency booking modules, and integrated maps APIs." },
    { icon: ShoppingBag, label: "Retail & E-commerce", desc: "Immersive virtual catalogs, automated coupon engines, and rapid instant express checkout funnels." },
    { icon: Leaf, label: "Smart Agriculture", desc: "Supply chain tracking dashboards, agricultural yield analytics dashboards, and farmer direct-payout tools." },
    { icon: Tv, label: "Media & Entertainment", desc: "High throughput custom audio/video media pipelines, custom newsroom CMS solutions, and social integrations." },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-dark to-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#005FFF_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeUp>
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 mb-4 inline-block">
              Sectors We Serve
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              Tailored Digital Solutions For <br />Every Vertical Market Sector
            </h1>
            <p className="text-grey text-lg max-w-2xl mx-auto font-medium">
              We understand industry-specific compliance and workflows, engineering customized apps that solve precise industrial challenges.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Grid Layout */}
      <MotionSection className="py-20 bg-white" amount="some">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MDiv variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesList.map((ind, i) => (
              <StandardCard
                key={i}
                index={i}
                title={ind.label}
                description={ind.desc}
                Icon={ind.icon}
                href="/contact"
              />
            ))}
          </MDiv>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}
