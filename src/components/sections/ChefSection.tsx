'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function ChefSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=700&q=80"
                alt="Head Chef preparing a dish at Yasmin Corner"
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 md:order-2"
          >
            <span className="text-accent font-medium text-sm tracking-widest uppercase">Our Chef</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Chef{' '}
              <span className="text-primary">Yasmin</span>
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              At the heart of Yasmin Corner is Chef Yasmin — a passionate culinary artist with over 15 years of experience crafting East Africa&apos;s most beloved dishes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Trained in both Ugandan and Swahili culinary traditions, Chef Yasmin brings an authentic touch to every plate, blending time-honored recipes with fresh, locally-sourced ingredients.
            </p>

            <div className="flex items-start gap-4 p-6 bg-muted/50 rounded-2xl">
              <Quote className="w-8 h-8 text-primary shrink-0" />
              <p className="text-foreground/80 italic text-base leading-relaxed">
                &ldquo;Every dish at Yasmin Corner tells a story — of heritage, of family, and of the vibrant flavors that make East Africa unforgettable.&rdquo;
              </p>
            </div>

            <div className="flex gap-4">
              <div className="text-center">
                <p className="text-2xl font-heading font-bold text-primary">15+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="text-2xl font-heading font-bold text-primary">1,000+</p>
                <p className="text-xs text-muted-foreground">Recipes Mastered</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="text-2xl font-heading font-bold text-primary">50K+</p>
                <p className="text-xs text-muted-foreground">Meals Served</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
