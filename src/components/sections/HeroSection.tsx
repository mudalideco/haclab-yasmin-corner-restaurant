'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

export function HeroSection() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&q=80"
          alt="Yasmin Corner Restaurant interior with warm ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 h-full flex flex-col items-start justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.div
          variants={fadeItem}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/90 text-sm font-medium">Now Open for Dining & Delivery</span>
        </motion.div>

        <motion.h1
          variants={fadeItem}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white max-w-4xl leading-tight"
        >
          Ugandan & Swahili
          <br />
          <span className="text-accent">Cuisine,</span> Served with Heart
        </motion.h1>

        <motion.p
          variants={fadeItem}
          className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed"
        >
          Located on Clement Hill Road, Yasmin Corner brings the authentic flavors of East Africa to Kampala — from traditional Ugandan dishes to aromatic Swahili delicacies.
        </motion.p>

        <motion.div variants={fadeItem} className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-all shadow-lg shadow-accent/25"
          >
            Explore Our Menu
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#reservation"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur-md text-white font-medium rounded-full border border-white/30 hover:bg-white/20 transition-all"
          >
            <Phone className="w-4 h-4" />
            Reserve a Table
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div className="w-1 h-2 bg-white/60 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
