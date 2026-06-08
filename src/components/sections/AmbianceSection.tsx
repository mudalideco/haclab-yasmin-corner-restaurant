'use client';

import { motion } from 'framer-motion';
import { CircleDot, Heart, Users, Sparkles } from 'lucide-react';

const ambianceFeatures = [
  {
    icon: Sparkles,
    title: 'Warm Ambiance',
    description: 'Soft lighting, earthy tones, and authentic decor create a cozy, welcoming atmosphere for every occasion.',
  },
  {
    icon: Users,
    title: 'Family-Friendly',
    description: 'Whether it\'s a family dinner or a gathering with friends, our space is designed to make everyone feel at home.',
  },
  {
    icon: Heart,
    title: 'Locally Sourced',
    description: 'We source the freshest ingredients from local markets, supporting Ugandan farmers and suppliers.',
  },
];

export function AmbianceSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-accent font-medium text-sm tracking-widest uppercase">The Experience</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              More Than a{' '}
              <span className="text-primary">Meal</span>
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Yasmin Corner, we believe dining is about more than just food. It&apos;s about the warmth of the welcome, 
              the beauty of the space, and the joy of sharing a meal with loved ones.
            </p>

            <div className="space-y-4 pt-2">
              {ambianceFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-1">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80"
                  alt="Warm candlelit dinner setting at Yasmin Corner"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80"
                  alt="Elegant restaurant interior with cozy lighting"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=80"
                  alt="Outdoor dining area at Yasmin Corner"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80"
                  alt="Beautifully presented plate of food"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary/20 rounded-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
