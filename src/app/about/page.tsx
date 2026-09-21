"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/motion/MotionSection";
import FadeUp from "@/components/motion/FadeUp";
import { staggerContainer, staggerItem, scaleIn } from "@/components/motion/variants";
import { motion } from "framer-motion";
import { Shield, Lightbulb, Users, Target, ArrowRight, Award, CheckCircle } from "lucide-react";
import Link from "next/link";

const MDiv = motion.div;

export default function AboutPage() {
  const coreValues = [
    {
      title: "Innovation",
      desc: "We stay ahead of technological trends to provide cutting-edge solutions that give our clients a competitive advantage.",
      icon: Lightbulb,
      color: "bg-blue-50 text-primary",
    },
    {
      title: "Reliable",
      desc: "We deliver stable, high-performance systems and offer unparalleled technical support you can depend on 24/7.",
      icon: Shield,
      color: "bg-emerald-50 text-accent",
    },
    {
      title: "Client-Focused",
      desc: "Your success is our priority. We align our design, functionality, and workflows entirely with your business objectives.",
      icon: Users,
      color: "bg-amber-50 text-amber-500",
    },
  ];

  const team = [
    { name: "Jane Wanjiku", role: "CEO", sub: "Strategy & Leadership" },
    { name: "Kevin Mwangi", role: "Web Developer", sub: "Frontend & Backend" },
    { name: "Faith Njeri", role: "Web Developer", sub: "Web & Mobile Apps" },
    { name: "Brian Otieno", role: "Web Developer", sub: "Databases & APIs" },
    { name: "Amina Yusuf", role: "Marketing Team", sub: "Digital & Social Media" },
    { name: "Peter Kamau", role: "Marketing Team", sub: "Content & Campaigns" },
    { name: "Grace Wanjiru", role: "Customer Care", sub: "Client Support" },
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
              Who We Are
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              Driving Digital Transformation <br />With Passion & Precision
            </h1>
            <p className="text-grey text-lg md:text-xl max-w-3xl mx-auto font-medium">
              UNIFOTEC-WEB is a premier technology solutions firm empowering businesses, entrepreneurs, and institutions worldwide with robust digital infrastructure.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Philosophy Theme Section */}
      <MotionSection className="py-20 bg-white" amount="some">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Our Pillars</h2>
            <h3 className="text-3xl font-bold text-dark">The UNIFOTEC Philosophy</h3>
            <p className="text-grey max-w-xl mx-auto text-sm mt-2">
              We operate under a simple yet powerful tripartite principle that guarantees excellence in every deployment.
            </p>
          </div>

          <MDiv variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <MDiv
                  key={i}
                  variants={staggerItem}
                  whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05)" }}
                  className="bg-light p-8 rounded-2xl border border-gray-100 transition-all flex flex-col items-center text-center group"
                >
                  <div className={`w-14 h-14 ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-dark mb-3">{value.title}</h4>
                  <p className="text-grey text-sm font-medium leading-relaxed">{value.desc}</p>
                </MDiv>
              );
            })}
          </MDiv>
        </div>
      </MotionSection>

      {/* Stats Counter Section */}
      <section className="py-16 bg-slate-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCard count="100+" label="Projects Completed" desc="Web, Mobile & Software" />
            <StatCard count="7+" label="Expert Specialists" desc="Engineers & Designers" />
            <StatCard count="100%" label="Client Retention" desc="Satisfied Long-term Partners" />
            <StatCard count="24/7" label="Active Support" desc="Monitoring & Troubleshooting" />
          </div>
        </div>
      </section>

      {/* Detailed Mission / Vision */}
      <MotionSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <MDiv variants={scaleIn} className="lg:w-1/2 w-full aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-gray-100 p-8 flex flex-col justify-between shadow-inner">
              <div>
                <Target className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-2xl font-bold text-dark mb-2">Our Mission</h4>
                <p className="text-grey text-sm font-medium leading-relaxed">
                  To provide state-of-the-art technological solutions that streamline processes, increase digital reach, and catalyze sustainable profitability for our clients.
                </p>
              </div>
              <div className="border-t border-gray-200/50 pt-4 flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-wider">
                <span>Building for the future</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </MDiv>

            <MDiv variants={scaleIn} className="lg:w-1/2 w-full aspect-video bg-gradient-to-br from-slate-900 to-dark rounded-2xl p-8 flex flex-col justify-between text-white shadow-xl shadow-slate-900/10">
              <div>
                <Award className="w-12 h-12 text-accent mb-4" />
                <h4 className="text-2xl font-bold mb-2">Our Vision</h4>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  To become Africa's leading developer of enterprise digital ecosystems, standardizing top-tier engineering across startups and global conglomerates alike.
                </p>
              </div>
              <div className="border-t border-slate-800 pt-4 flex items-center space-x-2 text-accent font-bold text-xs uppercase tracking-wider">
                <span>Innovation without bounds</span>
                <CheckCircle className="w-3 h-3" />
              </div>
            </MDiv>
          </div>
        </div>
      </MotionSection>

      {/* Team Showcase */}
      <MotionSection className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Talent</h2>
            <h3 className="text-3xl font-bold text-dark">Meet Our Experts</h3>
            <p className="text-grey text-sm max-w-md mx-auto mt-2">
              Our multidisciplinary team brings unparalleled passion and technological prowess to every build.
            </p>
          </div>

          <MDiv variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <MDiv
                key={i}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center group transition-all"
              >
                <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl text-primary border border-gray-100 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                  {member.name.charAt(0)}
                </div>
                <h4 className="font-bold text-dark text-sm group-hover:text-primary transition-colors mb-0.5">{member.name}</h4>
                <p className="text-primary text-[11px] font-bold uppercase tracking-wider mb-2">{member.role}</p>
                <p className="text-grey text-[11px] font-medium leading-tight">{member.sub}</p>
              </MDiv>
            ))}
          </MDiv>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}

const StatCard = ({ count, label, desc }: { count: string; label: string; desc: string }) => (
  <div className="p-4">
    <div className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight mb-1">{count}</div>
    <div className="text-sm font-bold text-dark mb-0.5">{label}</div>
    <div className="text-xs text-grey font-medium">{desc}</div>
  </div>
);
