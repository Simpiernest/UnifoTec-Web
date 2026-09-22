"use client";
import React from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StandardCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  index: number;
  className?: string;
  href?: string;
}

export const StandardCard: React.FC<StandardCardProps> = ({
  title,
  description,
  Icon,
  index,
  className,
  href
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = (): void => {
    x.set(0);
    y.set(0);
  };

  const CardWrapper = href ? motion.a : motion.div;

  return (
    <CardWrapper
      {...(href ? { href } : {})}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative bg-white p-8 md:p-10 rounded-[2rem] flex flex-col h-full transition-all duration-500 group border border-gray-100 shadow-sm hover:shadow-xl",
        className
      )}
    >
      {/* Inner Content with Z-index for 3D effect */}
      <div
        style={{ transform: "translateZ(50px)" }}
        className="flex flex-col h-full"
      >
        <div className="mb-6 md:mb-8 w-14 h-14 md:w-16 md:h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-500 ease-out shadow-sm group-hover:shadow-xl">
          <Icon size={28} strokeWidth={1.2} className="md:w-8 md:h-8" />
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4 md:mb-5 tracking-tight group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-grey text-base md:text-lg leading-relaxed mb-6 md:mb-8 font-light line-clamp-3">
          {description}
        </p>

        <div className="mt-auto flex items-center text-xs md:text-sm font-bold text-dark uppercase tracking-widest overflow-hidden">
          <span className="relative group-hover:text-primary transition-colors">
            Discover More
            <span className="absolute bottom-0 left-0 w-full h-px bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </span>
          <motion.div
            className="ml-3 group-hover:text-primary transition-colors"
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight size={18} />
          </motion.div>
        </div>
      </div>

      {/* Thick Shadow handling */}
      <div className="absolute inset-0 rounded-[2rem] bg-black/5 -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-8 scale-95" />
    </CardWrapper>
  );
};
