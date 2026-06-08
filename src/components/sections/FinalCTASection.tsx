'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white/10 rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-20 h-20 border-2 border-accent/20 rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <span className="inline-block text-primary-foreground/70 font-medium text-sm tracking-widest uppercase">
            Come & Dine
          </span>

          <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground leading-tight">
            Ready to Experience{' '}
            <span className="text-accent">Authentic</span>{' '}
            East African Flavors?
          </h2>

          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
            Whether you&apos;re craving a comforting plate of matoke, a fragrant Swahili biryani, 
            or planning a special event — Yasmin Corner is ready to welcome you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#reservation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-all shadow-xl text-lg"
            >
              Reserve a Table
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+256794099205"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 text-white font-medium rounded-full hover:bg-white/25 transition-all text-lg backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              Call Now: +256 794 099 205
            </a>
          </div>

          <p className="text-primary-foreground/60 text-sm">
            Walk-ins welcome • Catering available • Delivery across Kampala
          </p>
        </motion.div>
      </div>
    </section>
  );
}
