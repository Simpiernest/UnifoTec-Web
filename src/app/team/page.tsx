"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/motion/MotionSection";
import FadeUp from "@/components/motion/FadeUp";
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code2,
  Palette,
  Briefcase,
  Terminal,
} from "lucide-react";

export default function TeamPage() {
  const teamData = [
    {
      name: "Jane Wanjiku",
      role: "CEO & Founder",
      bio: "Visionary leader with a passion for driving digital transformation across Africa.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      name: "Kevin Mwangi",
      role: "Lead Web Developer",
      bio: "Master of modern web architectures and high-performance frontend systems.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      name: "Faith Njeri",
      role: "App Engineer",
      bio: "Expert in building intuitive, cross-platform mobile experiences for iOS and Android.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      name: "Brian Otieno",
      role: "Backend Architect",
      bio: "Specializing in secure cloud infrastructure and high-throughput API systems.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      name: "Amina Yusuf",
      role: "Marketing Director",
      bio: "Strategic growth expert focused on brand positioning and digital market entry.",
      avatar: "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      name: "Peter Kamau",
      role: "Content Lead",
      bio: "Crafting the narratives that define our clients' digital identities.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop"
    }
  ];

  const testimonials = teamData.map(member => ({
    author: {
      name: member.name,
      handle: member.role,
      avatar: member.avatar
    },
    text: member.bio
  }));

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-dark to-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#005FFF_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeUp>
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 mb-4 inline-block">
              The Engine Room
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              Elite Engineering Minds <br />Building the Future
            </h1>
            <p className="text-grey text-lg max-w-2xl mx-auto font-medium">
              A diverse collective of architects, engineers, and designers dedicated to building robust technology solutions.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Featured Marquee Section */}
      <TestimonialsSection
        title="Our Experts in Action"
        description="Dynamic minds collaborating to solve complex digital challenges through innovation and precision."
        testimonials={testimonials}
        className="py-24"
      />

      {/* Join Us CTA */}
      <MotionSection className="py-20 bg-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
             <h2 className="text-3xl font-extrabold text-dark mb-4">Want to join the mission?</h2>
             <p className="text-grey text-base mb-8 max-w-xl mx-auto font-medium">
                We are always looking for elite engineers, visionary designers, and strategic architects to join our global team.
             </p>
             <a href="mailto:careers@unifotec-web.com" className="bg-dark text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-dark/20 flex items-center gap-2 mx-auto w-fit">
                <Mail className="w-4 h-4" />
                View Open Positions
             </a>
          </FadeUp>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}
