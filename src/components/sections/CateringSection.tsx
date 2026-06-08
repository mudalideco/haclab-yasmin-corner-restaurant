'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const highlights = [
  'Corporate events & galas',
  'Weddings & receptions',
  'Private parties & celebrations',
  'Custom menu planning',
  'Professional serving staff',
  'Setup & cleanup included',
];

export function CateringSection() {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-primary-foreground/70 font-medium text-sm tracking-widest uppercase">Catering & Events</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">
              Let Us Cater{' '}
              <span className="text-accent">Your Next</span>{' '}
              Event
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full" />
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              From corporate galas to intimate family celebrations, our professional events management team brings flawless execution and unforgettable flavors to every occasion.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2 text-primary-foreground/80">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#reservation"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-all shadow-lg mt-4"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"
              alt="Elegant event catering setup by Yasmin Corner"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-accent/30 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
