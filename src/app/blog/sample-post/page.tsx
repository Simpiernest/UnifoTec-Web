"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/motion/FadeUp";

export default function SamplePostPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <FadeUp>
            <h1 className="text-4xl font-extrabold text-dark mb-8">Sample Blog Post</h1>
            <p className="text-grey text-lg font-medium leading-relaxed">
              This is a placeholder for a blog post content. Engineering insights and strategy thoughts will be placed here.
            </p>
          </FadeUp>
        </div>
      </section>
      <Footer />
    </main>
  );
}
