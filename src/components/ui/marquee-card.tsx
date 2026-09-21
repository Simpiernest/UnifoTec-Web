"use client";

import { Star } from "lucide-react"
import { LiquidCard, CardContent } from "@/components/ui/liquid-glass-card"
import { Marquee } from "@/components/ui/marquee"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    content:
      "This component library has transformed our development workflow. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Frontend Developer",
    content:
      "Clean, modern, and incredibly easy to use. Perfect for our React projects.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "UI Designer",
    content:
      "The design system is consistent and beautiful. Love the attention to detail.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Alex Rodriguez",
    role: "Tech Lead",
    content:
      "Excellent documentation and great community support. A must-have toolkit.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5,
  },
]


export const MarqueeCard = () => {
  return (
    <div className="relative">
      <Marquee pauseOnHover>
        {testimonials.map((testimonial, index) => (
          <LiquidCard key={index} className="mx-1 rounded-3xl w-80 h-full bg-white/50 backdrop-blur-md">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center space-x-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="h-10 w-10 object-cover rounded-full border border-primary/20"
                />
                <div>
                  <h4 className="font-semibold text-dark">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-primary font-bold uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
              <p className="mb-3 text-grey text-sm italic font-medium leading-relaxed">"{testimonial.content}"</p>
              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </CardContent>
          </LiquidCard>
        ))}
      </Marquee>

      {/* Edge gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
    </div>
  );
};
